import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { TarjetaDeCredito } from '../tarjetaDeCredito';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../../cliente/cliente';
import { animation } from '@angular/animations';

@Component({
  selector: 'app-cliente-add-tarjeta-de-credito',
  templateUrl: './cliente-add-tarjeta-de-credito.component.html',
  styleUrls: ['./cliente-add-tarjeta-de-credito.component.css']
})
export class ClienteAddTarjetaDeCreditoComponent implements OnInit, OnChanges {

 
    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService
) { }


@Input() cliente: Cliente;


tarjeta: TarjetaDeCredito;


 anio:any=new Date().getFullYear;
 

public isCollapsed = true;

/**
* The Event Emitter which sends the signal when a review has just been posted
* so that the list of reviews refreshes
*/
@Output() updateTarjetas = new EventEmitter();

darMeses():number[]
{
return [1,2,3,4,5,6,7,8,9,10,11,12];
}


/**
* This function posts a card
* @param tarjetaForm The form of the card
*/
postTarjeta(tarjetaForm: NgForm): TarjetaDeCredito {
    this.tarjeta.cliente = this.cliente;
    this.clienteService.createTarjetaDeCredito(this.cliente.id,this.tarjeta)
        .subscribe(() => {
          tarjetaForm.resetForm();
            this.updateTarjetas.emit();
            this.toastrService.success("The credit card was successfully created", 'Credit card added');
        }, err => {
            this.toastrService.error(err, 'Error');
        });
    return this.tarjeta;
}

/**
* The function which initializes the component.
*/
ngOnInit() {
    this.tarjeta = new TarjetaDeCredito();
}

/**
* The function which notices that the input which defines the book_id has changed.
* If the book has changed, we update the reviews to show
*/
ngOnChanges() {
    this.ngOnInit();
}


}
