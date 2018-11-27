import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from './calificaciones';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

const API_URL = environment.API_URL;
const empleado = '/empleados'
const calificaciones = '/calificaciones'

/**
 * El servicio que provee todo lo de los empleado
 */
@Injectable()
export class CalificacionesService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
  /**
   * Permite obtener todas las calificaciones de un cliente.
   * @param empleadoId Identificador del empleado a traer las calificaciones
   */
  
   getCalificaciones(empleadoId : number) : Observable<Calificacion[]> {
       return this.http.get<Calificacion[]>(API_URL + empleado + '/' + empleadoId + calificaciones);
   }

  /**
    * Returns the Observable object with the details of a client retrieved from the API
    * @param empleadoId Identificador del empleado a traer las calificaciones
  	* @returns The calificacion detail.
	*/
		  
  getCalificacion(empleadoId : number, calificacionId): Observable<Calificacion> {
    console.log("[CalificacionService] Trayendo del back la invitacion con ID:" + calificacionId);
     return this.http.get<Calificacion>(API_URL + empleado + '/' + empleadoId + calificaciones + '/' + calificacionId);
 }
   
 /**
  * Permite crear una nueva calificacion en el sistema
  */

 createCalificacion(empleadoId : number, invitacion : Calificacion) : Observable<Calificacion>
 {
   return this.http.post<Calificacion>(API_URL + empleado + '/' + empleadoId + calificaciones + '/', invitacion);
 }

 /** Updates an invitacion
   * @param calificacion La informacion de la nueva calificacion
   * @returns The confirmation that the invitacion was updated
   */
   updateCalificacion(empleadoId : number, calificacion : Calificacion): Observable<Calificacion> {
   return this.http.put<Calificacion>(API_URL + empleado + '/' + empleadoId + calificaciones + '/' + calificacion.id, calificacion);
 }

 /**
 * Deletes an invitacion from the BookStore
 * @param authorId The id of the author
 * @returns The confirmation that the invitacion was deleted
 */

 deleteCalificacion(empleadoId : number, calificacionId): Observable<boolean> {
   return this.http.delete<boolean>(API_URL + empleado + '/' + empleadoId + calificaciones + '/' + calificacionId);
 }
}
