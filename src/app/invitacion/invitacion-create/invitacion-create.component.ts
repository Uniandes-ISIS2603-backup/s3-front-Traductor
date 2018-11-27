import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Invitacion} from '../invitacion';
import {InvitacionService} from '../invitacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitacion-create',
  templateUrl: './invitacion-create.component.html',
  styleUrls: ['./invitacion-create.component.css']
})
export class InvitacionCreateComponent implements OnInit {

  /**
  * Constructor for the component of cliente-create
  * @param invitacionService The invitacion services provider
  * @param toastrService The toastr to show messages to the user
  */
 constructor(
  private invitacionService: InvitacionService,
  private toastrService: ToastrService,
  private router: Router
  ) {}

  /**
   * Nueva invitación a crear
   */

  invitacion : Invitacion;

  /**
   * Evento para informar al componente List que se cancelo la creación de una nueva invitación
   */
  
  @Output() cancel = new EventEmitter();

  /**
   * Evento para informar al componente Listo que se creó satisfactoriamente la nueva invitación
   */

  @Output() create = new EventEmitter();

  /**
   * Crear una nueva invitación
   */

  createInvitacion() : Invitacion {
    console.log("La descripcion de la invitación es:" + this.invitacion.descripcion);
    this.invitacionService.createInvitacion(this.invitacion).subscribe((invitacion) =>
    {
      this.invitacion = invitacion
      this.create.emit();
      this.toastrService.success("La invitación ha sido creada satisfactoriamente", "Crear invitación");
    });
    return this.invitacion;
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelCreation(): void {
    this.cancel.emit();
}

  ngOnInit() {
    this.invitacion = new Invitacion();
  }
}
