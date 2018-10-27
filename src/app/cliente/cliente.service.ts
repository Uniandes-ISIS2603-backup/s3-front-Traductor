import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment'; 
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
//import { HttpErrorInterceptor } from '../interceptors/httperrorinterceptor.service';

const API_URL = environment.API_URL;
const clientes = '/clientes';
// const API_URL = '../../assets';
// const clientes = '/clientes.json';

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

  /**
  * Returns the Observable object with the details of a client retrieved from the API
  * @returns The client details
  */
  getCliente(clienteId): Observable<Cliente> {
    return this.http.get<Cliente>(API_URL + clientes + '/' + clienteId).pipe(catchError(err => this.handleError(err)));
  }

  /**
  * The method which handles the errors generated by the requests
  * @param error The error which the API REST returned
  */
  private handleError(error: any) { 
    return throwError(error.error.errorMessage);  
  }
}
