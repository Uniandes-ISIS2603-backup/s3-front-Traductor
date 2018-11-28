/**
 *  El componente se encuentra asociado a la función de mostrar toda la lista de invitaciones
 *  que ha recibido el empleado.
 *  @author Geovanny Andres Gonzalez
 */

import { Component, OnInit, OnChanges, ViewContainerRef, Input } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { Invitacion } from 'src/app/cliente/invitacion';
import { EmpleadoService } from '../empleado.service';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-empleado-invitaciones',
  templateUrl: './empleado-invitaciones.component.html',
  styleUrls: ['./empleado-invitaciones.component.css']
})
export class EmpleadoInvitacionesComponent implements OnInit, OnChanges {

  constructor(
    private empleadoService: EmpleadoService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) {}

  //Objeto empleado que necesita propuesta create!
  @Input() empleado: Empleado

   //Identificador del empleado
   @Input() empleadoId: number;

   //Arreglo de invitaciones
   invitaciones: Invitacion[];
 
   //Mostrar el detalle de la invitacion.
   showView: boolean;   
 
   /**
    * The id of invitacion that the user wants to view
    */
 
   invitacion_id: number;
 
   /**
    * Invitación seleccionada por el usuario.
    */
 
   selectedInvitacion: Invitacion;
 
   /**
    * Muestra una invitación seleccionada por el usuario.
    */
 
   onSelected(invitacion_id: number): void {
     if (this.showView) { this.showView = false; }
     else {
       console.log("Entrando a mirar con el id:" + invitacion_id);
       this.hideAllComponents();
       this.showView = true;
       this.invitacion_id = invitacion_id;
       this.selectedInvitacion = new Invitacion();
       this.getInvitacion();
     }
   }
 
   hideAllComponents(): void {
     this.showView = false;     
   }   
   
   //Obtiene las invitaciones del servicio al cual esta suscrito.
   getInvitaciones(): void {
     this.empleadoService.getInvitaciones(this.empleadoId).subscribe(pInvitacion => this.invitaciones = pInvitacion);
   }
 
   getInvitacion(): void {
     console.log("Traer la invitacion con id:" + this.invitacion_id);
     this.empleadoService.getInvitacion(this.empleadoId, this.invitacion_id)
       .subscribe(selectedInvitacion => {
         this.selectedInvitacion = selectedInvitacion
       });
   } 
 
   //Funcion principal de ejecucion del componente.
   ngOnInit() {
     this.selectedInvitacion = undefined;
     this.invitacion_id = undefined;
     this.showView = false;     
     this.getInvitaciones();    
   }
 
   ngOnChanges(): void {
     this.ngOnInit(); //Refrescar los cambios   
   }
}