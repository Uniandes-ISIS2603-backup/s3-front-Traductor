import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions'
import { ToastrService } from 'ngx-toastr';

import { Usuario } from './usuario';
import { ClienteService } from '../cliente/cliente.service';
import { EmpleadoService } from '../empleado/empleado.service';
import { Empleado } from '../empleado/empleado';
import { Cliente } from '../cliente/cliente';

@Injectable()
export class AuthService {

  /**
   * El usuario actual almacenado
   */
  usuarioActual: any;

  /**
   * Constructor of the service
   * @param router Angular's Router to redirect the user on login or logout
   * @param roleService NgxRolesService to manage authentication roles
   * @param permissionsService NgxPermissionsService to manage authentication permissions
   * @param empleadoService The service to access the employees
   * @param clienteService The service to access the clients
   * @param toastrService The alert service to notify
   */
  constructor(private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService, private clienteService: ClienteService, private empleadoService: EmpleadoService, private toastrService: ToastrService) { }

  start(): void {
    this.permissionsService.flushPermissions();
    this.roleService.flushRoles();
    this.permissionsService.loadPermissions(['edit_cliente_permission', 'edit_empleado_permission', 'delete_cliente_permission', 'delete_empleado_permission', 'dejar_comentario', 'crear_solicitud', 'crear_propuesta']);
    const rol = localStorage.getItem('rol');
    let usuario = localStorage.getItem('usuario');
    if (usuario) {
      usuario = JSON.parse(usuario);
      this.usuarioActual = usuario;
    }
    if (!rol) {
      this.setGuestRole();
    } else if (rol === 'ADMIN') {
      this.setAdministratorRole();
    } else if (rol === 'EMPLEADO') {
      this.setEmployeeRole(usuario, 'carga');
    } else {
      this.setClientRole(usuario, 'carga');
    }
  }

  setGuestRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('INVITADO', ['']);
  }

  setClientRole(usuario, accion: string): void {
    if (accion === 'registro') {
      this.clienteService.createCliente(usuario).subscribe(
        (c) => {
          this.usuarioActual = c;
          localStorage.setItem('usuario', JSON.stringify(this.usuarioActual));
          this.roleService.flushRoles();
          this.roleService.addRole('CLIENTE', ['dejar_comentario', 'crear_solicitud']);
          localStorage.setItem('rol', 'CLIENTE');
          this.router.navigateByUrl('/');
          this.toastrService.success('Bienvenido, ' + this.usuarioActual.nombreUsuario);
        }
      );
    } else {
      this.clienteService.getClientes().subscribe(
        (clients) => {
          let clientes: Cliente[] = clients;
          let found: boolean = false;
          clientes.forEach((c) => {
            if (c.nombreUsuario == usuario.nombreUsuario && c.contrasenia == usuario.contrasenia) {
              found = true;
              this.usuarioActual = c;
              localStorage.setItem('usuario', JSON.stringify(this.usuarioActual));
              this.roleService.flushRoles();
              this.roleService.addRole('CLIENTE', ['dejar_comentario', 'crear_solicitud']);
              localStorage.setItem('rol', 'CLIENTE');
              this.router.navigateByUrl('/');
              this.toastrService.success('Hola de nuevo, ' + this.usuarioActual.nombreUsuario);
            } 
          }); 
          if (!found) {
            this.toastrService.error("Nombre de usuario o contraseña incorrectos");
          }
        }
      );
    }
  }

  setEmployeeRole(usuario, accion: string): void {

    if (accion === 'registro') {
      this.empleadoService.createEmpleado(usuario).subscribe(
        (e) => {
          this.usuarioActual = e;
          localStorage.setItem('usuario', JSON.stringify(this.usuarioActual));
          this.roleService.flushRoles();
          this.roleService.addRole('EMPLEADO', ['crear_propuesta']);
          localStorage.setItem('rol', 'EMPLEADO');
          // this.router.navigate(['/miperfil']);
          this.router.navigateByUrl('/');
          this.toastrService.success('Bienvenido, ' + this.usuarioActual.nombreUsuario);
        }
      );
    } else {
      this.empleadoService.getEmpleados().subscribe(
        (employees) => {
          let empleados: Empleado[] = employees;
          let found: boolean = false;
          empleados.forEach((e) => {
            if (e.nombreUsuario == usuario.nombreUsuario && e.contrasenia == usuario.contrasenia) {
              found = true;
              this.usuarioActual = e;
              localStorage.setItem('usuario', JSON.stringify(this.usuarioActual));
              this.roleService.flushRoles();
              this.roleService.addRole('EMPLEADO', ['crear_propuesta']);
              localStorage.setItem('rol', 'EMPLEADO');
              //this.router.navigate(['/miperfil']);
              this.router.navigateByUrl('/');
              this.toastrService.success('Hola de nuevo, ' + this.usuarioActual.nombreUsuario);
            } 
          });
          if (!found) {
            this.toastrService.error("Nombre de usuario o contraseña incorrectos");
          }
        }
      );
    }
  }

  setAdministratorRole(): void {
    this.roleService.flushRoles();
    this.roleService.addRole('ADMIN', ['edit_cliente_permission', 'delete_cliente_permission', 'edit_empleado_permission', 'delete_empleado_permission']);
    localStorage.setItem('rol', 'ADMIN');
    this.router.navigateByUrl('/');
  }

  printRole(): void {
    console.log(this.roleService.getRoles());
  }

  /**
   * Logs the user in with the desired rol
   * @param usuario The desired rol to set to the user
   */
  login(usuario: Usuario): void {
    if (usuario.rol === 'Administrador') {
      this.setAdministratorRole();
    } else if (usuario.rol === 'Empleado') {
      this.setEmployeeRole(usuario, 'login');
    } else {
      this.setClientRole(usuario, 'login')
    }
    //this.router.navigateByUrl('/');
  }

  registrar(usuario: Usuario): void {
    if (usuario.rol === 'Administrador') {
      this.setAdministratorRole();
    } else if (usuario.rol === 'Empleado') {
      this.setEmployeeRole(usuario, 'registro');
    } else {
      this.setClientRole(usuario, 'registro')
    }
    //this.router.navigateByUrl('/');
  }
  /**
   * Logs the user out
   */
  logout(): void {
    this.roleService.flushRoles();
    this.setGuestRole();
    this.usuarioActual = undefined;
    localStorage.removeItem('rol');
    localStorage.removeItem('usuario');
    this.router.navigateByUrl('/');
  }

  /**
   * Da el usuario actual que tiene almacenado 
   * en cache o que se registro/logueo
   */
  getUser(): any {
    return this.usuarioActual;
  }

}
