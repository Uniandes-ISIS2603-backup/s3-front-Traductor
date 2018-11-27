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
  showView : boolean;

  //Mostrar el componente create de la invitación
  showCreate : boolean;

  //Mostrar el componente de edición
  showEdit : boolean;

  /**
   * The id of invitacion that the user wants to view
   */

  invitacion_id: number;

  /**
   * Invitación seleccionada por el usuario.
   */

  selectedInvitacion : Invitacion;  

   /**
    * Muestra una invitación seleccionada por el usuario.
    */

   onSelected(invitacion_id: number): void {
    if(this.showView) {this.showView = false;}
    else {    
    console.log("Entrando a mirar con el id:" + invitacion_id);
    this.hideAllComponents();
    this.showView = true;
    this.invitacion_id = invitacion_id;
    this.selectedInvitacion = new Invitacion();
    this.getInvitacion();
    }
  }

  hideAllComponents() : void {
    this.showView = false;
    this.showCreate = false;
    this.showEdit = false;
  }

  /**
   * Muestra o esconde el componente Create de la invitación.
   */

  showHideCreate() : void
  {
    if (this.showCreate) {this.hideAllComponents()}
    else {this.hideAllComponents();this.showCreate = !this.showCreate;}
  }

  /**
    * Shows or hides the edition component
    */
   showHideEdit(invitacion_id: number): void {
    if (!this.showEdit || (this.showEdit && invitacion_id != this.selectedInvitacion.idInvitacion)) {
        this.showView = false;
        this.showCreate = false;
        this.showEdit = true;
        this.invitacion_id = invitacion_id;
        this.selectedInvitacion = new Invitacion();
        this.getInvitacion();
    }
    else {
        this.showEdit = false;
        this.showView = true;
    }
}

/**
 * Alterna entre la vista de detalle y la vista de edición
 */

updateInvitacion(): void {
  this.showEdit = false;
  this.showView = true;
}

  //Obtiene las invitaciones del servicio al cual esta suscrito.
  getInvitaciones(): void
  {
	  this.invitacionService.getInvitaciones().subscribe(pInvitacion => this.invitaciones = pInvitacion);
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
    this.showCreate = false;
    this.showEdit = false;
	  this.getInvitaciones();
  }
}
