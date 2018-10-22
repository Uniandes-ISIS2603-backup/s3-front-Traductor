import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

const API_URL = environment.API_URL;
const clientes = '/clientes';

/**
 * El servicio que provee todo lo de los clientes
 */
@Injectable()
export class ClienteService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
  
   getClientes() : Observable<Cliente[]> {
       return this.http.get<Cliente[]>(API_URL + clientes);
   }
}
