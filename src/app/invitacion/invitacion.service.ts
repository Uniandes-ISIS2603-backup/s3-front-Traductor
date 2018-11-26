	/* 
 * Provee el servicio con las operaciones CRUD para acceder al Back-end
 * @author Geovanny Andres Gonzalez
 */
 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Invitacion} from './invitacion'; //Importa la interfaz propuesta con los tipos basicos.
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment';

//Declaración de constrantes
//const API_URL = environment.API_URL; //Se usa la direccion del servidor del back

/**
 * Estrategia. Pondremos todo a funcionar con el cliente con ID 100
 * Luego meteremos todo como subrecurso.
 * 
 * Geovanny
 */

const API_URL = environment.API_URL;
const invitaciones = '/clientes/100/invitaciones';


@Injectable()
export class InvitacionService
{
	/**
	 * Constructor del servicio
	 * @param http Es el cliente http que permite la comunicacion con el back-end
	 */
	 	
	constructor(private http: HttpClient){}	
	
	/**
	 * Permite obtener todas las invitaciones de un cliente registrado en el aplicativo
	*/
	
	getInvitaciones(): Observable<Invitacion[]>	{
		return this.http.get<Invitacion[]>(API_URL + invitaciones);
	}

	/**
  	* Returns the Observable object with the details of a client retrieved from the API
  	* @returns The invitacion details
	*/
		  
 	getInvitacion(invitacionId): Observable<Invitacion> {
	 	console.log("[InvitacionService] Trayendo del back la invitacion con ID:" + invitacionId);
    	return this.http.get<Invitacion>(API_URL + invitaciones + '/' + invitacionId);
	}
	  
	/**
	 * Permite crear una nueva invitación en el sistema
	 */

	createInvitacion(invitacion : Invitacion) : Observable<Invitacion>
	{
		return this.http.post<Invitacion>(API_URL + invitaciones + '/', invitacion);
	}
}



