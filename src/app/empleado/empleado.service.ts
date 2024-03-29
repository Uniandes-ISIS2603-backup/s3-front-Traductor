import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Empleado } from './empleado';
import { Propuesta } from './propuesta';
import { EmpleadoDetail } from './empleado-detail';
import { Invitacion } from '../cliente/invitacion';
// import 'rxjs/add/operator/catch';
// import { HttpErrorInterceptor } from '../interceptors/httperrorinterceptor.service';

const API_URL = environment.API_URL;
const empleados = '/empleados';
const invitaciones = '/invitaciones'
// const API_URL = '../../assets';
// const empleados = '/empleados.json';
/**
 * El servicio que provee todo lo de los empleados
 */
@Injectable()
export class EmpleadoService {
  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) {
  }

  /**
   * Obtener todos los empleads
   */
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(API_URL + empleados);
  }
  /**
    * Creates an empleado
    * @param empleado The new empleado
    * @returns The new empleado with the new id
    */
  createEmpleado(empleado): Observable<Empleado> {
    return this.http.post<Empleado>(API_URL + empleados, empleado);
  }
  /**
  * Returns the Observable object with the details of a empleado retrieved from the API
  * @returns The client details
  */
  getEmpleado(empleadoId): Observable<EmpleadoDetail> {
    return this.http.get<EmpleadoDetail>(API_URL + empleados + '/' + empleadoId);
  }
  /**
	  * Crea una nueva propuesta de trabajo
	  * @param nuevaPropuesta La nueva propuesta de trabajo recibida del componente
	  * @returns La nueva propuesta con el ID incluido
	 */

  createPropuesta(idEmpleado: number, nuevaPropuesta: Propuesta): Observable<Propuesta> {
    let invitacion: Invitacion;

    nuevaPropuesta.invitacion = invitacion;
    return this.http.post<Propuesta>(API_URL + '/empleados/' + idEmpleado + '/propuestas', nuevaPropuesta);
  }

  getPropuestas(empleadoId): Observable<EmpleadoDetail> {
    return this.http.get<EmpleadoDetail>(API_URL + empleados + '/' + empleadoId + '/propuestas');
  }

  deletePropuesta(idEmpleado, idPropuesta): Observable<Propuesta> {
    return this.http.delete<Propuesta>(API_URL + empleados + '/' + idEmpleado + "/propuestas/" + idPropuesta);
  }

  deleteEmpleado(idEmpleado): Observable<Empleado> {
    return this.http.delete<Empleado>(API_URL + empleados + '/' + idEmpleado );
  }

  /**
 * Updates an author
 * @param author The author's information updated
 * @returns The confirmation that the author was updated
 */
  updatePropuesta(idEmpleado, propuesta): Observable<Propuesta> {
    return this.http.put<Propuesta>(API_URL + empleados + '/' + idEmpleado + "/propuestas/" + propuesta.id, propuesta);
  }

  updateEmpleado(empleado): Observable<EmpleadoDetail> {
    return this.http.put<EmpleadoDetail>(API_URL + empleados + '/' + empleado.id , empleado);
  }

  /**
   * Acoplando el modulo de invitacion para mostrar las invitaciones que ha recibido un cliente.
   * Geovanny
   */

  getInvitaciones(empleadoId: number): Observable<Invitacion[]> {
    return this.http.get<Invitacion[]>(API_URL + empleados + '/' + empleadoId + invitaciones);
  }

  /**
    * Returns the Observable object with the details of a empleado retrieved from the API
    * @returns The invitacion details
  */

  getInvitacion(empleadoId: number, invitacionId: number): Observable<Invitacion> {
    console.log("[InvitacionService] Trayendo del back la invitacion con ID:" + invitacionId);
    return this.http.get<Invitacion>(API_URL + empleados + '/' + empleadoId + invitaciones + '/' + invitacionId);
  }
}
