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
  
  //Obtiene las invitaciones del servicio al cual esta suscrito.
  getInvitaciones(): void
  {
	  this.invitacionService.getInvitaciones().subscribe(pInvitacion => this.invitaciones = pInvitacion);
  }

  //Funcion principal de ejecucion del componente.
  ngOnInit() {
	  this.getInvitaciones();
  }
}
