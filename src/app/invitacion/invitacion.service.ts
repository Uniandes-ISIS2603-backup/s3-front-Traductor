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
//const invitaciones = '/clientes/1/invitaciones';

const API_URL = "../../assets/";
const invitaciones = 'invitaciones.json';

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
}



