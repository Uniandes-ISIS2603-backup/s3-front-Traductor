import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Invitacion } from '../invitacion';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cliente-invitacion-edit',
  templateUrl: './cliente-edit-invitacion.component.html',
  styleUrls: ['./cliente-edit-invitacion.component.css']
}) export class ClienteEditInvitacionComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService
    ) {}

  //Identificacion del cliente.

  @Input() clienteId : number;

  //Invitacion a acomodar

  @Input() invitacion : Invitacion;

  /**
    * The output which tells the parent component
    * that the user no longer wants to edit an invitacion
    */
   @Output() cancel = new EventEmitter();

   //Indica si el componente se colapsa
   public isCollapsed: boolean;

   /**
   * The output which tells the parent component
   * that the user updated a new invitacion
   */
   @Output() update = new EventEmitter();

  editInvitacion(): void {
    this.clienteService.updateInvitacion(this.clienteId,this.invitacion)
      .subscribe(() => {
        this.toastrService.success("La invitación ha sido actualizada satisfactoriamente", "Edición Invitación");
      });
    this.update.emit();
  }

  /**
   * Emits the signal to tell the parent component that the
   * user no longer wants to edit an user
   */
  cancelEdition(): void {
    this.cancel.emit();
  }

  ngOnInit() {
  }

  /**
   * This function will be called when the user chooses another invitacion to edit
   */
  ngOnChanges() {
    this.ngOnInit();
  }

}
