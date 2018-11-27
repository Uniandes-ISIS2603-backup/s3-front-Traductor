/*
 *  Mi primer componente en TypeScript
 *  Andres Manrique
 *  El componente se encuentra asociado a la función de mostrar toda la lista de propuestas
 *  existentes para un empleado.
*/

import {Propuesta} from '../propuesta';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { Component, OnInit,Input,ViewContainerRef } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from '../empleado.service';

@Component({
  //Declaración del selector para llamarlo en el archivo html y que pueda mostrar el contenido.
  selector: 'app-empleado-propuestas',
  templateUrl: './empleado-propuestas.component.html',
  styleUrls: ['./empleado-propuestas.component.css']
})

export class EmpleadoPropuestasListComponent implements OnInit {

  
  /**
 * Arreglo de propuestas
 */

  @Input() propuestasEmpleado : Propuesta [];

  @Input() idEmpleado:number;

  propuestaSeleccionada:Propuesta;
  
  public isCollapsed = true;

  /**
    * Shows or hides the edition of an credit card
    */
   showEdit: boolean;

   constructor(
    private empleadoService: EmpleadoService,
    private toastrService: ToastrService, 
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private router: Router
) { }

  /**
     * The function called when a propuesta is posted to update the reviews
     */
    updatePropuestas(propuestas:Propuesta[]): void {
      this.propuestasEmpleado = propuestas;
  }

  guardarPropuesta(id,costo,descripcion,estado,tiempoEstimado)
  {
this.propuestaSeleccionada.id=id;
this.propuestaSeleccionada.costo=costo;
this.propuestaSeleccionada.descripcion=descripcion;
this.propuestaSeleccionada.estado=estado;
this.propuestaSeleccionada.tiempoEstimado=tiempoEstimado;
this.showHidEdit();
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
                  this.empleadoService.deletePropuesta(this.idEmpleado,id).subscribe(book => {
                      this.toastrService.success("Tarjeta  ", "Tarjeta eliminada");
                      this.router.navigate(['empleados/'+this.idEmpleado]);
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
  
  showHidEdit(): void {
    this.showEdit = !this.showEdit;
}

/**
 * Inicializa el componente, recuperando en primer lugar las propuestas del servicio suscrito.
*/

  ngOnInit() {
    this.propuestaSeleccionada=new Propuesta;
    this.showEdit=false;
  }

}
