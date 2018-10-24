import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from './calificaciones';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

const API_URL = '../../assets/';
const calificaciones = '/calificaciones.json';

/**
 * El servicio que provee todo lo de los clientes
 */
@Injectable()
export class CalificacionesService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
  
   getCalificaciones() : Observable<Calificacion[]> {
       return this.http.get<Calificacion[]>(API_URL + calificaciones);
   }
}
