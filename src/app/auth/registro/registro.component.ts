import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  /**
  * Constructor for the component
  * @param authService Auth service provider
  * @param toastrService The toastr to show messages to the usuario
  */
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
  ) { }

  usuario: Usuario;

  roles: String[];

  /**
  * Sign the usuario up with the selected role
  */
  registro(): void {
    this.authService.registrar(this.usuario);
  }

  /**
  * This function will initialize the component
  */
  ngOnInit() {
    this.usuario = new Usuario();
    this.roles = ['Administrador', 'Cliente', 'Empleado'];
  }

}
