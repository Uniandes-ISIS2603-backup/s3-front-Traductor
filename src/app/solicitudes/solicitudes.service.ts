import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Solicitud} from './solicitud'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// const API_URL = "../../assets";
const API_URL = environment.API_URL;
// const solicitudes = '/solicitudes.json';
const solicitudes = '/solicitudes';

@Injectable()
export class SolicitudService {

   constructor(private clienteHttp: HttpClient){}
   
   getSolicitudes() : Observable<Solicitud[]> {
     return this.clienteHttp.get<Solicitud[]>(API_URL + solicitudes);
   }

   getSolicitudEmpleado(idEmpleado, id) : Observable<Solicitud> {
    return this.clienteHttp.get<Solicitud>(API_URL + '/empleados/' + idEmpleado + solicitudes + '/' + id);
  }

  getSolicitudesCliente(idCliente) : Observable<Solicitud[]> {
    return this.clienteHttp.get<Solicitud[]>(API_URL + '/clientes/' + idCliente + solicitudes);
  }

  getSolicitudCliente(idCliente, id) : Observable<Solicitud> {
    return this.clienteHttp.get<Solicitud>(API_URL + '/clientes/' + idCliente + solicitudes + '/' + id);
  }

  deleteSolicitudCliente(idCliente, idSol) : Observable<Solicitud> {
    return this.clienteHttp.delete<Solicitud>(API_URL + /clientes/ + idCliente + solicitudes + '/' + idSol);
  }

  
}