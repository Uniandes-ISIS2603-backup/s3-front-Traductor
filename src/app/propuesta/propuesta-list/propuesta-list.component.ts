/*
 *  Mi primer componente en TypeScript
 *  Geovanny Andrés González
 *  El componente se encuentra asociado a la función de mostrar toda la lista de propuestas
 *  existentes para un empleado.
*/

import { Component, OnInit } from '@angular/core';
import {Propuesta} from '../propuesta';
import {PropuestaService} from '../propuesta.service';

@Component({
  //Declaración del selector para llamarlo en el archivo html y que pueda mostrar el contenido.
  selector: 'app-propuesta-list',
  templateUrl: './propuesta-list.component.html',
  styleUrls: ['./propuesta-list.component.css']
})

export class PropuestaListComponent implements OnInit {

/**
* Constructor para el componene
* @param propuestaService El proveedor de las propuestas, la logica.
*/ 
   
constructor(private propuestaService: PropuestaService) {}

/**
 * Arreglo de propuestas
 */

propuestas: Propuesta[];

/**
 * Pregunta al servicio por la información de las propuestas para actualizar la información de ellas.
 */
 
 getPropuestas(): void {
	 this.propuestaService.getPropuestas().subscribe(propuestas => this.propuestas = propuestas);
 }

/**
 * Inicializa el componente, recuperando en primer lugar las propuestas del servicio suscrito.
*/

  ngOnInit() {
	  this.getPropuestas();
  }

}
