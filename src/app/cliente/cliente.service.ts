import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 
//import { catchError } from 'rxjs/operators';
import { TarjetaDeCredito } from './tarjetaDeCredito';
import { Propuesta } from './propuesta';
import { Pagos } from '../pagos/pagos';
//import 'rxjs/add/operator/catch';
//import { HttpErrorInterceptor } from '../interceptors/httperrorinterceptor.service';

const API_URL = environment.API_URL;
const clientes = '/clientes';
const tarjetas = '/tarjetasDeCredito';
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
    
  /**
   * Returns the Observable object with the details of the clients retirieved from the API
   * @returns The clients from the API
   */
  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(API_URL + clientes);
  }

  /**
   * Creates a new client
   * @param cliente The new client
   * @returns The new client with the new id
   */
  createCliente(cliente) : Observable<Cliente>
  {
    return this.http.post<Cliente>(API_URL + clientes, cliente);
  }

  /**
  * Returns the Observable object with the details of a client retrieved from the API
  * @returns The client details
  */
  getCliente(clienteId): Observable<Cliente> {
    return this.http.get<Cliente>(API_URL + clientes + '/' + clienteId);
  }

  createTarjetaDeCredito(idCliente, tarjeta): Observable<TarjetaDeCredito> {
    return this.http.post<TarjetaDeCredito>(API_URL + clientes + '/' + idCliente + tarjetas, tarjeta);
  }

  createPago(idCliente, pago): Observable<Pagos> {
    return this.http.post<Pagos>(API_URL + clientes + '/' + idCliente + tarjetas, pago);
  }

  getPropuesta(clienteId:number,propuestaId:number): Observable<Propuesta> {
    return this.http.get<Propuesta>(API_URL + clientes + '/' + clienteId+"/propuesta/"+propuestaId);
  }

  
}
