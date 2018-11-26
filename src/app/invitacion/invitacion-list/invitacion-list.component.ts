/**
 *  El componente se encuentra asociado a la función de mostrar toda la lista de invitaciones
 *  que ha creado un cliente.
 *  @author Geovanny Andres Gonzalez
 */
 
import { Component, OnInit } from '@angular/core';
import {Invitacion} from '../invitacion';
import {InvitacionService} from '../invitacion.service';

@Component({
  selector: 'app-invitacion-list',
  templateUrl: './invitacion-list.component.html',
  styleUrls: ['./invitacion-list.component.css']
})
export class InvitacionListComponent implements OnInit {

  //Constructor del componente, recibe de parametro el servicio que le provee 
  //los datos.
	
  constructor(private invitacionService: InvitacionService) { }
  
  //Arreglo de invitaciones
  invitaciones: Invitacion[];

  //Mostrar el detalle de la invitacion.
  showView : boolean

   /**
    * The id of invitacion that the user wants to view
    */

  invitacion_id: number;

  selectedInvitacion : Invitacion;
  
  //Obtiene las invitaciones del servicio al cual esta suscrito.
  getInvitaciones(): void
  {
	  this.invitacionService.getInvitaciones().subscribe(pInvitacion => this.invitaciones = pInvitacion);
  }

   /**
    * Shows the author
    */

   onSelected(invitacion_id: number): void {
    if(this.showView) {this.showView = false;}
    else {    
    console.log("Entrando a mirar con el id:" + invitacion_id);
    this.showView = true;
    this.invitacion_id = invitacion_id;
    this.selectedInvitacion = new Invitacion();
    this.getInvitacion();
    }
  }

  getInvitacion(): void {
    console.log("Traer la invitacion con id:" + this.invitacion_id);
    this.invitacionService.getInvitacion(this.invitacion_id)
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
}
