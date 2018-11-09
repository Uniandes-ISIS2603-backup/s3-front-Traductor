import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Solicitud} from './solicitudes'; 
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const solicitudes = 'solicitudes.json';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

   constructor(private clienteHttp: HttpClient){}
	
 
   
   getSolicitudes() : Observable<Solicitud[]> {
     return this.clienteHttp.get<Solicitud[]>(API_URL + solicitudes);
   }
}