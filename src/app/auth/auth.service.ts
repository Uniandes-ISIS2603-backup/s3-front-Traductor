import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'

@Injectable()
export class AuthService {

  /**
   * Constructor of the service
   * @param router Angular's Router to redirect the user on login or logout
   * @param roleService NgxRolesService to manage authentication roles
   * @param permissionsService NgxPermissionsService to manage authentication permissions
   */
  constructor(private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

  start(): void {
    this.permissionsService.flushPermissions();
    this.roleService.flushRoles();
    this.permissionsService.loadPermissions(['edit_cliente_permission', 'edit_empleado_permission', 'delete_cliente_permission', 'delete_empleado_permission', 'dejar_comentario', 'crear_solicitud', 'crear_propuesta']);
    const rol = localStorage.getItem('rol');
    if (!rol) {
      this.setGuestRole();
    } else if (rol === 'ADMIN') {
      this.setAdministratorRole();
    } else if (rol === 'EMPLEADO') {
      this.setEmployeeRole();
    } else {
      this.setClientRole();
    }
  }

  setGuestRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('INVITADO', ['']);
  }

  setClientRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('CLIENTE', ['dejar_comentario', 'crear_solicitud']);
    localStorage.setItem('rol', 'CLIENTE');
  }

  setEmployeeRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('EMPLEADO', ['crear_propuesta']);
    localStorage.setItem('rol', 'EMPLEADO');
  }

  setAdministratorRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('ADMIN', ['edit_cliente_permission', 'delete_cliente_permission', 'edit_empleado_permission', 'delete_empleado_permission']);
    localStorage.setItem('rol', 'ADMIN');
  }

  printRole(): void {
    console.log(this.roleService.getRoles());
  }

  /**
   * Logs the user in with the desired rol
   * @param rol The desired rol to set to the user
   */
  login(rol): void {
    if (rol === 'Administrador') {
      this.setAdministratorRole();
    } else if (rol === 'Empleado') {
      this.setEmployeeRole();
    } else {
      this.setClientRole()
    }
    this.router.navigateByUrl('/books/list');
  }

  /**
   * Logs the user out
   */
  logout(): void {
    this.roleService.flushRoles();
    this.setGuestRole();
    localStorage.removeItem('rol');
    this.router.navigateByUrl('/');
  }

}
