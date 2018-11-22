import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { Empleado } from './empleado';
import { EmpleadoDetail } from './empleado-detail';
// import 'rxjs/add/operator/catch';
// import { HttpErrorInterceptor } from '../interceptors/httperrorinterceptor.service';

 const API_URL = environment.API_URL;
 const empleados = '/empleados';
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
    return this.http.get<EmpleadoDetail>(API_URL + empleados + '/' + empleadoId) ;
  }
}
