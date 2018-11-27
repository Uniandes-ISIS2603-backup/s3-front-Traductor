import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {InvitacionService} from '../invitacion.service';
import {Invitacion} from '../invitacion';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-invitacion-edit',
  templateUrl: './invitacion-edit.component.html',
  styleUrls: ['./invitacion-edit.component.css']
})
export class InvitacionEditComponent implements OnInit, OnChanges {

   /**
    * Constructor for the component
    * @param invitacionService The authors' services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private invitacionService: InvitacionService,
    private toastrService: ToastrService
    ) {}

  /**
   * La informacion de la invitacion a modificar
   */

  @Input() invitacion : Invitacion;

  /**
    * The output which tells the parent component
    * that the user no longer wants to edit an invitacion
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new invitacion
   */
   @Output() update = new EventEmitter();

   /**
    * Actualiza la informacion de la invitacion
    */

   editInvitacion(): void {
    this.invitacionService.updateInvitacion(this.invitacion)
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
