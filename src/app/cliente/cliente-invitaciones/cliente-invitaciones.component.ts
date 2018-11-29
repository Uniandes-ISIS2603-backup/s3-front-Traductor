/**
 *  El componente se encuentra asociado a la función de mostrar toda la lista de invitaciones
 *  que ha creado un cliente.
 *  @author Geovanny Andres Gonzalez
 */

import { Component, OnInit, OnChanges, ViewContainerRef, Input } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { Invitacion } from '../invitacion';
import { ClienteService } from '../cliente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente-invitaciones',
  templateUrl: './cliente-invitaciones.component.html',
  styleUrls: ['./cliente-invitaciones.component.css']
})
export class ClienteInvitacionesComponent implements OnInit, OnChanges {

  constructor(
    private clienteService: ClienteService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) { }

  //Identificador del cliente
  @Input() clienteId: number;

  //Arreglo de invitaciones
  invitaciones: Invitacion[];

  //Mostrar el detalle de la invitacion.
  showView: boolean;

  //Mostrar el componente create de la invitación
  showCreate: boolean;

  //Mostrar el componente de edición
  showEdit: boolean;

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
      this.hideAllComponents();
    }
  }

  /**
   * Alterna entre la vista de detalle y la vista de edición
   */

  updateInvitacion(): void {
    this.hideAllComponents();
    this.showView = true;
    //Refrescar la vista
    this.getInvitaciones();
  }

  //Obtiene las invitaciones del servicio al cual esta suscrito.
  getInvitaciones(): void {
    this.clienteService.getInvitaciones(this.clienteId).subscribe(pInvitacion => this.invitaciones = pInvitacion);
  }

  getInvitacion(): void {
    console.log("Traer la invitacion con id:" + this.invitacion_id);
    this.clienteService.getInvitacion(this.clienteId, this.invitacion_id)
      .subscribe(selectedInvitacion => {
        this.selectedInvitacion = selectedInvitacion
      });
  }

  /**
    * Elimina una invitación que posee el cliente
    * @param invitacionId Es el identificador de la invitación a eliminar  
    */

  deleteInvitacion(invitacionId): void {
    this.modalDialogService.openDialog(this.viewRef, {
      title: 'Eliminar invitación',
      childComponent: SimpleModalComponent,
      data: { text: '¿Está seguro de eliminar esta invitación?' },
      actionButtons: [
        {
          text: 'Sí',
          buttonClass: 'btn btn-danger',
          onAction: () => {
            this.clienteService.deleteInvitacion(this.clienteId, invitacionId).subscribe(() => {
              this.toastrService.error("La invitación fue eliminada satisfactoriamente", "Eliminar invitación");
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
    this.selectedInvitacion = undefined;
    this.invitacion_id = undefined;
    this.showView = false;
    this.showCreate = false;
    this.showEdit = false;
    this.getInvitaciones();    
  }

  ngOnChanges(): void {
    this.ngOnInit(); //Refrescar los cambios   
  }
}
