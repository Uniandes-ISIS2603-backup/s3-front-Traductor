import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Invitacion} from '../invitacion';
import {ClienteService} from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-add-invitacion',
  templateUrl: './cliente-add-invitacion.component.html',
  styleUrls: ['./cliente-add-invitacion.component.css']
})
export class ClienteAddInvitacionComponent implements OnInit {

  /**
  * Constructor for the component of cliente-create
  * @param invitacionService The invitacion services provider
  * @param toastrService The toastr to show messages to the user
  */

 constructor(
  private clienteService: ClienteService,
  private toastrService: ToastrService,
  private router: Router
  ) {}

  
  @Input() clienteId : number;

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
    this.clienteService.createInvitacion(this.clienteId, this.invitacion).subscribe((invitacion) =>
    {
      this.invitacion = invitacion
      //Asociar la invitacion al empleado
      console.log("El ID de la invitacion ahora es:" + this.invitacion.idInvitacion);
      console.log("El ID del empleado ahora es:" + this.invitacion.idEmpleado);
      this.clienteService.asociarInvitacion(this.invitacion).subscribe((pI)=>this.invitacion = pI);
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