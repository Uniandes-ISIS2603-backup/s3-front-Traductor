import { Component, OnInit,Input,Output,EventEmitter, OnChanges } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ToastrService } from 'ngx-toastr';
import { TarjetaDeCredito } from '../tarjetaDeCredito';

@Component({
  selector: 'app-cliente-edit-tarjeta-de-credito',
  templateUrl: './cliente-edit-tarjeta-de-credito.component.html',
  styleUrls: ['./cliente-edit-tarjeta-de-credito.component.css']
})
export class ClienteEditTarjetaDeCreditoComponent implements OnInit, OnChanges {

  constructor( private clienteService: ClienteService,
    private toastrService: ToastrService) { }

/**
    * The cliente id as received from the parent component
    */
   @Input() idCliente: number;

   /**
    * The cliente id as received from the parent component
    */
   @Input() tarjeta: TarjetaDeCredito;


   /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new author
   */
   @Output() update = new EventEmitter();

   public isCollapsed = false;

 /**
    * Updates the information of the client
    */
   editTarjeta(): void {
   
    this.clienteService.updateTarjeta(this.idCliente,this.tarjeta)
        .subscribe(() => {
            this.toastrService.success("La info de la tarjeta se actualizo", "Actualizacion de la tarjeta");
        });
    this.update.emit();
    this.isCollapsed=true;
    
}

darMeses():number[]
{
return [1,2,3,4,5,6,7,8,9,10,11,12];
}

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelEdition(): void {
       
    this.cancel.emit();
    this.isCollapsed = true;
}

    /**
    * This function will initialize the component
    */
   ngOnInit() {
}

/**
* This function will be called when the user chooses another author to edit
*/
ngOnChanges() {
    this.ngOnInit();
}


}
