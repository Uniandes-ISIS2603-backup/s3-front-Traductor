import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { Usuario } from '../usuario';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
  * Constructor for the component
  * @param authService Auth service provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
  ) { }

  usuario: Usuario;

  roles: String[];

  /**
  * Logs the usuario in with the selected role
  */
  login(): void {
    this.authService.login(this.usuario.rol);
    this.toastrService.success('Hola de nuevo, ' + this.usuario.nombreDeUsuario);
  }

  /**
  * This function will initialize the component
  */
  ngOnInit() {
    this.usuario = new Usuario();
    this.roles = ['Administrador', 'Cliente', 'Empleado'];
  }

}
