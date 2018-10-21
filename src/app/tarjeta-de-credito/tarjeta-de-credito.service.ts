import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TarjetaDeCredito} from './tarjetaDeCredito'; 
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const tarjetas = 'tarjetas.json';

@Injectable({
  providedIn: 'root'
})
export class TarjetaDeCreditoService {

   constructor(private clienteHttp: HttpClient){}
	
 
   
   getTarjetas() : Observable<TarjetaDeCredito[]> {
     return this.clienteHttp.get<TarjetaDeCredito[]>(API_URL + tarjetas);
   }
}
