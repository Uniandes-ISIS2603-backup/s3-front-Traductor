import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 
//import { catchError } from 'rxjs/operators';
import { TarjetaDeCredito } from './tarjetaDeCredito';
import { Propuesta } from './propuesta';
import { Pagos } from './pagos';
import {Invitacion} from './invitacion';
//import 'rxjs/add/operator/catch';
//import { HttpErrorInterceptor } from '../interceptors/httperrorinterceptor.service';

const API_URL = environment.API_URL;
const clientes = '/clientes';
const tarjetas = '/tarjetasDeCredito';
const invitaciones = '/invitaciones';

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
    return this.http.post<Pagos>(API_URL + clientes + '/' + idCliente + "/pagos", pago);
  }

  getPropuesta(clienteId:number,propuestaId:number): Observable<Propuesta> {
    return this.http.get<Propuesta>(API_URL + clientes + '/' + clienteId+"/propuesta/"+propuestaId);
  }

  deletePropuesta(idCliente,idPropuesta): Observable<Propuesta> {
    return this.http.delete<Propuesta>(API_URL + clientes + '/' + idCliente+"/propuestas/"+idPropuesta);
  }

   /**
    * Updates an author
    * @param author The author's information updated
    * @returns The confirmation that the author was updated
    */
   updateTarjeta(idCliente,tarjeta): Observable<TarjetaDeCredito> {
    return this.http.put<TarjetaDeCredito>(API_URL + clientes + '/' + idCliente+"/tarjetasDeCredito/"+tarjeta.idTarjeta, tarjeta);
}

updateCliente(cliente): Observable<Cliente> {
  return this.http.put<Cliente>(API_URL + clientes + '/' + cliente.id, cliente);
}

deleteTarjeta(clienteId,idTarjeta): Observable<TarjetaDeCredito> {
  return this.http.delete<TarjetaDeCredito>(API_URL + clientes + '/' + clienteId+tarjetas+"/"+idTarjeta);
}

deleteCliente(idCliente): Observable<Cliente> {
  return this.http.delete<Cliente>(API_URL + clientes + '/' + idCliente );
}
  

  /**
   * Se acopla los metodos para el funcionamiento de invitación
   * Geovanny
   */

  /**
	 * Permite obtener todas las invitaciones de un cliente registrado en el aplicativo
	*/
	
	getInvitaciones(clienteId : number): Observable<Invitacion[]>	{
		return this.http.get<Invitacion[]>(API_URL + clientes + '/' + clienteId + invitaciones);
	}

	/**
  	* Returns the Observable object with the details of a client retrieved from the API
  	* @returns The invitacion details
	*/
		  
 	getInvitacion(clienteId : number, invitacionId): Observable<Invitacion> {
	 	console.log("[InvitacionService] Trayendo del back la invitacion con ID:" + invitacionId);
    	return this.http.get<Invitacion>(API_URL + clientes + '/' + clienteId + invitaciones + '/' + invitacionId);
	}
	  
	/**
	 * Permite crear una nueva invitación en el sistema
	 */

	createInvitacion(clienteId : number, invitacion : Invitacion) : Observable<Invitacion>
	{
    return this.http.post<Invitacion>(API_URL + clientes + '/' + clienteId + invitaciones + '/', invitacion);
  }

  asociarInvitacion(invitacion:Invitacion) : Observable<Invitacion> {
    let ruta = API_URL + '/empleados' + '/' + invitacion.idEmpleado + invitaciones + '/' + invitacion.idInvitacion
    console.log("Asociar invitacion" + ruta);
    return this.http.post<Invitacion>(ruta, invitacion);
  }
  
	/** Updates an invitacion
    * @param invitacion The invitacion's information updated
    * @returns The confirmation that the invitacion was updated
    */
    updateInvitacion(clienteId : number, invitacion : Invitacion): Observable<Invitacion> {
		return this.http.put<Invitacion>(API_URL + clientes + '/' + clienteId + invitaciones + '/' + invitacion.idInvitacion, invitacion);
	}

	/**
	* Deletes an invitacion from the BookStore
	* @param authorId The id of the author
	* @returns The confirmation that the invitacion was deleted
	*/

	deleteInvitacion(clienteId : number, invitacionId): Observable<boolean> {
		return this.http.delete<boolean>(API_URL + clientes + '/' + clienteId + invitaciones + '/' + invitacionId);
	}
  
}
