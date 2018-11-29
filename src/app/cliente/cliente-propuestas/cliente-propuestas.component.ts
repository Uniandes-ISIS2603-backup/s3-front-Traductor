/*
 *  Mi primer componente en TypeScript
 *  Andres Manrique
 *  El componente se encuentra asociado a la función de mostrar toda la lista de propuestas
 *  existentes para un empleado.
*/

import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { Component, OnInit,Input,ViewContainerRef } from '@angular/core';
import {Propuesta} from '../propuesta';
import { ActivatedRoute, Router } from '@angular/router';
import {Pagos} from '../pagos';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  //Declaración del selector para llamarlo en el archivo html y que pueda mostrar el contenido.
  selector: 'app-cliente-propuestas',
  templateUrl: './cliente-propuestas.component.html',
  styleUrls: ['./cliente-propuestas.component.css']
})

export class ClientePropuestasListComponent implements OnInit {

  /**
 * Arreglo de propuestas
 */

  @Input() propuestas : Propuesta [];

  @Input() idCliente:number;

  public isCollapsed = true;
  
/**
* Constructor para el componene
* @param clienteService El proveedor de las propuestas, la logica.
*/ 
   
constructor( private clienteService: ClienteService,
  private route: ActivatedRoute,
  private toastrService: ToastrService, 
  private modalDialogService: ModalDialogService,
  private viewRef: ViewContainerRef,
  private router: Router) {}

  

 pagar(idPropuesta:number,costo:number,descripcion:string,estado:string,tiempoEstimado:string)
{
   let pago:Pagos=new Pagos;
   pago.pagoAprobado=true;
   let propuesta:Propuesta=new Propuesta;
   propuesta.id=idPropuesta;
   propuesta.costo=costo;
   propuesta.descripcion=descripcion;
   propuesta.estado=estado;
   propuesta.tiempoEstimado=tiempoEstimado;
   pago.propuestaDto=propuesta;
this.modalDialogService.openDialog(this.viewRef, {
    title: 'Pagar una propuesta',
    childComponent: SimpleModalComponent,
    data: {text: 'Seguro que quiere pagar esta propuesta?'},
    actionButtons: [
        {
            text: 'Yes',
            buttonClass: 'btn btn-danger',
            onAction: () => {
                this.clienteService.createPago(this.idCliente,pago).subscribe(book => {
                    this.toastrService.success("Propuesta  ", "Propuesta pagada");
                    this.router.navigate(['clientes/'+this.idCliente]);
                }, err => {
                    this.toastrService.error(err, "Error");
                });
                return true;
            }
        },
        {text: 'No', onAction: () => true}
    ]
});
}



deletePropuesta(id:number)
{
  this.modalDialogService.openDialog(this.viewRef, {
    title: 'Eliminar una propuesta',
    childComponent: SimpleModalComponent,
    data: {text: 'Seguro que quiere eliminar esta propuesta?'},
    actionButtons: [
        {
            text: 'Yes',
            buttonClass: 'btn btn-danger',
            onAction: () => {
                this.clienteService.deletePropuesta(this.idCliente,id).subscribe(book => {
                    this.toastrService.success("Propuesta  ", "Propuesta eliminada");
                    this.router.navigate(['clientes/'+this.idCliente]);
                }, err => {
                    this.toastrService.error(err, "Error");
                });
                return true;
            }
        },
        {text: 'No', onAction: () => true}
    ]
});
}

/**
 * Inicializa el componente, recuperando en primer lugar las propuestas del servicio suscrito.
*/

  ngOnInit() {
    
  }

}
