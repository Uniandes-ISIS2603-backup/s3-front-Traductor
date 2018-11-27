import { Component, OnInit,Input } from '@angular/core';
import { TarjetaDeCredito } from '../tarjetaDeCredito';


@Component({
  selector: 'app-cliente-tarjetas',
  templateUrl: './cliente-tarjetas.component.html',
  styleUrls: ['./cliente-tarjetas.component.css']
})
export class ClienteTarjetasComponent implements OnInit {

  @Input() tarjetasCliente : TarjetaDeCredito [];

  @Input() idCliente : number;

  tarjetaSeleccionada:TarjetaDeCredito;
    
    public isCollapsed = true;

      /**
    * Shows or hides the edition of an credit card
    */
   showEdit: boolean;

    
    /**
     * The function called when a review is posted to update the reviews
     */
    updateTarjetas(tarjetas:TarjetaDeCredito[]): void {
        this.tarjetasCliente = tarjetas;
    }

    guardarTarjeta(idTarjeta:number,ccv:number,anioExpiracion:number,mesExpiracion:number,nombreTitular:string,numeroTarjetaCredito:number,redBancaria:string)
    {
      this.tarjetaSeleccionada.idTarjeta=idTarjeta;
this.tarjetaSeleccionada.ccv=ccv;
this.tarjetaSeleccionada.anioExpiracion=anioExpiracion;
this.tarjetaSeleccionada.mesExpiracion=mesExpiracion;
this.tarjetaSeleccionada.nombreTitular=nombreTitular;
this.tarjetaSeleccionada.numeroTarjetaCredito=numeroTarjetaCredito;
this.tarjetaSeleccionada.redBancaria=redBancaria;
this.showHidEdit();
    }

    showHidEdit(): void {
      this.showEdit = !this.showEdit;
  }
    
    ngOnInit(){
      this.tarjetaSeleccionada=new TarjetaDeCredito;
      this.showEdit=false;
    }

}
