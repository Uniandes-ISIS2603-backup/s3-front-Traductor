import { Component, OnInit } from '@angular/core';
import {TarjetaDeCredito} from '../tarjetaDeCredito';
import {TarjetaDeCreditoService} from '../tarjeta-de-credito.service';

@Component({
  selector: 'app-tarjetas-list',
  templateUrl: './tarjetas-list.component.html',
  styleUrls: ['./tarjetas-list.component.css']
})
export class TarjetasListComponent implements OnInit {

       
    constructor(private tarjetaService: TarjetaDeCreditoService) {}
    
   
    
    tarjetas: TarjetaDeCredito[];
    
 
     getTarjetas(): void {
       this.tarjetaService.getTarjetas().subscribe(tarjetas => this.tarjetas = tarjetas);
     }
    
   
      ngOnInit() {
        this.getTarjetas();
      }
}
