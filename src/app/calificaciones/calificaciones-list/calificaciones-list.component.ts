/**
 *  El componente se encuentra asociado a la función de mostrar toda la lista de calificaciones
 *  que ha recibido un empleado.
 *  @author Geovanny Andres Gonzalez
 */

import { Component, OnInit, OnChanges, ViewContainerRef, Input } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { Calificacion } from '../calificaciones';
import { CalificacionesService } from '../calificaciones.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'list-calificacion',
  templateUrl: './calificaciones-list.component.html'
})
export class CalificacionesListComponent implements OnInit, OnChanges {

  constructor(
    private calificacionService: CalificacionesService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) { }

  //Identificador del empleado
  @Input() empleadoId: number;

  /**
   * La lista de calificaciones del empleado
   */

  calificaciones: Calificacion[];

  //Mostrar el detalle de la invitacion.
  showView: boolean;

  //Mostrar el componente create de la invitación
  showCreate: boolean;

  //Mostrar el componente de edición
  showEdit: boolean;

  /**
   * The id of calificacion that the user wants to view
   */

  calificacion_id: number;

  /**
   *  Calificacion seleccionada por el usuario.
   */

  selectedCalificacion: Calificacion;

  /**
     * Muestra una invitación seleccionada por el usuario.
     */

  onSelected(calificacion_id: number): void {
    if (this.showView) { this.showView = false; }
    else {
      console.log("Entrando a mirar con el id:" + calificacion_id);
      this.hideAllComponents();
      this.showView = true;
      this.calificacion_id = calificacion_id;
      this.selectedCalificacion = new Calificacion();
      this.getCalificacion();
    }
  }

  hideAllComponents(): void {
    this.showView = false;
    this.showCreate = false;
    this.showEdit = false;
  }

  /**
   * Muestra o esconde el componente Create de la invitación.
   */

  showHideCreate(): void {
    if (this.showCreate) { this.hideAllComponents() }
    else { this.hideAllComponents(); this.showCreate = !this.showCreate; }
  }

  /**
    * Shows or hides the edition component
    */
  showHideEdit(calificacion_id: number): void {
    if (!this.showEdit || (this.showEdit && calificacion_id != this.selectedCalificacion.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.calificacion_id = calificacion_id;
      this.selectedCalificacion = new Calificacion();
      this.getCalificacion();
    }
    else {
      this.showEdit = false;
      this.showView = true;
    }
  }

  //Obtiene las invitaciones del servicio al cual esta suscrito.
  getCalificaciones(): void {
    this.calificacionService.getCalificaciones(this.empleadoId).subscribe(pCalificacion => this.calificaciones = pCalificacion);
  }

  getCalificacion(): void {
    console.log("Traer la calificacion con id:" + this.calificacion_id);
    this.calificacionService.getCalificacion(this.empleadoId, this.calificacion_id)
      .subscribe(selectedCalificacion => {
        this.selectedCalificacion = selectedCalificacion
      });
  }

  /**
    * Elimina una invitación que posee el cliente
    * @param calificacionId Es el identificador de la calificacion a eliminar  
    */

  deleteCalificacion(calificacionId): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar calificacion',
      childComponent: SimpleModalComponent,
      data: { text: '¿Está seguro de eliminar esta calificacion?' },
      actionButtons: [
        {
          text: 'Sí',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.calificacionService.deleteCalificacion(this.empleadoId, calificacionId).subscribe(() => {
              this.toastrService.error("La calificacion fue eliminada satisfactoriamente", "Eliminar invitación");
              this.ngOnInit();
            }, err => {
              this.toastrService.error(err, "Error");
            });
            return true;
          }
        },
        { text: 'No', onAction: () => true }
      ]
    });
  }

  //Funcion principal de ejecucion del componente.
  ngOnInit() {
    this.selectedCalificacion = undefined;
    this.calificacion_id = undefined;
    this.showView = false;
    this.showCreate = false;
    this.getCalificaciones();
  }

  ngOnChanges(): void {
    this.ngOnInit(); //Refrescar los cambios   
  }
}