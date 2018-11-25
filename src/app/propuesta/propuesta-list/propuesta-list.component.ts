/*
 *  Mi primer componente en TypeScript
 *  Geovanny Andrés González
 *  El componente se encuentra asociado a la función de mostrar toda la lista de propuestas
 *  existentes para un empleado.
*/

import { Component, OnInit } from '@angular/core';
import {Propuesta} from '../propuesta';
import {Pagos} from '../../pagos/pagos';
import {PropuestaService} from '../propuesta.service';
import { ClienteService } from 'src/app/cliente/cliente.service';

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
   
constructor(private propuestaService: PropuestaService,private clienteService: ClienteService) {}

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

 pagar(idPropuesta:number)
{
   let pago:Pagos;
  // pago.pagoAprobado=1;
  // pago.propuesta=this.clienteService.
console.log(idPropuesta);
//this.clienteService.createPago();
}

/**
 * Inicializa el componente, recuperando en primer lugar las propuestas del servicio suscrito.
*/

  ngOnInit() {
	  this.getPropuestas();
  }

}
