import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pagos} from './pagos'; 
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const pagos = 'pagos.json';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private clienteHttp: HttpClient){}
	
 
   getPagos() : Observable<Pagos[]> {
     return this.clienteHttp.get<Pagos[]>(API_URL + pagos);
   }
}
