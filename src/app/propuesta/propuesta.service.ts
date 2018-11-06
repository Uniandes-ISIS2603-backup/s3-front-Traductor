/* 
 * Servicio que permite obtener la lista de propuestas.
 * @author Geovanny Andres Gonzalez
 */
 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Propuesta} from './propuesta'; //Importa la interfaz propuesta con los tipos basicos.
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

//Declaración de constrantes
//const API_URL = environment.API_URL; //Se usa la direccion del servidor del back
//const propuestas = '/empleados/1/propuestas'; La de la BD
const API_URL = "../../assets/";
const propuestas = 'propuestas.json';

@Injectable()
export class PropuestaService 
{
	/**
    * Constructor del servicio
    * @param clienteHttp Es el HttpClient - El cual es necesario para realizar las peticiones al back-end.
    */
	
	constructor(private clienteHttp: HttpClient){}
	
	/*
	 * Permite obtener todas las propuestas existentes en el archivo JSON.
	*/
	
	getPropuestas() : Observable<Propuesta[]> {
		return this.clienteHttp.get<Propuesta[]>(API_URL + propuestas);
	}
}

