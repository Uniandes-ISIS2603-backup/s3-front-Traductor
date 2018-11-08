import { Component, OnInit,Input } from '@angular/core';
import { TarjetaDeCredito } from '../tarjetaDeCredito';


@Component({
  selector: 'app-cliente-tarjetas',
  templateUrl: './cliente-tarjetas.component.html',
  styleUrls: ['./cliente-tarjetas.component.css']
})
export class ClienteTarjetasComponent implements OnInit {

  @Input() tarjetasCliente : TarjetaDeCredito [];
    
    public isCollapsed = false;
    
    /**
     * The function called when a review is posted to update the reviews
     */
    updateTarjetas(tarjetas:TarjetaDeCredito[]): void {
        this.tarjetasCliente = tarjetas;
    }
    
    ngOnInit(){
    }

}
