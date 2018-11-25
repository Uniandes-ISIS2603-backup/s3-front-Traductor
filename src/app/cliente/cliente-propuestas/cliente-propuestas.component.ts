/*
 *  Mi primer componente en TypeScript
 *  Andres Manrique
 *  El componente se encuentra asociado a la función de mostrar toda la lista de propuestas
 *  existentes para un empleado.
*/

import { Component, OnInit,Input } from '@angular/core';
import {Propuesta} from '../propuesta';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Pagos} from '../pagos';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  //Declaración del selector para llamarlo en el archivo html y que pueda mostrar el contenido.
  selector: 'app-propuesta-list',
  templateUrl: './cliente-propuestas.component.html',
  styleUrls: ['./cliente-propuestas.component.css']
})

export class PropuestaListComponent implements OnInit {

  /**
 * Arreglo de propuestas
 */

  @Input() propuestasCliente : Propuesta [];

  public isCollapsed = true;
  
/**
* Constructor para el componene
* @param clienteService El proveedor de las propuestas, la logica.
*/ 
   
constructor( private clienteService: ClienteService,
  private route: ActivatedRoute,
  private router: Router,
  private toastrService: ToastrService) {}

  

 pagar(idPropuesta:number,costo:number,descripcion:string,estado:string,tiempoEstimado:string)
{
   let pago:Pagos;
   pago.pagoAprobado=1;
   let propuesta:Propuesta;
   propuesta.id=idPropuesta;
   propuesta.costo=costo;
   propuesta.descripcion=descripcion;
   propuesta.estado=estado;
   propuesta.tiempoEstimado=tiempoEstimado;
   pago.propuestaDto=propuesta;
console.log(idPropuesta);
let cliente_id = +this.route.snapshot.paramMap.get('id');
this.clienteService.createPago(cliente_id,pago);
}

/**
 * Inicializa el componente, recuperando en primer lugar las propuestas del servicio suscrito.
*/

  ngOnInit() {
  }

}
