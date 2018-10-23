import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from './calificacion';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

const API_URL = environment.API_URL;
const calificaciones = '/calificaciones';

/**
 * El servicio que provee todo lo de los clientes
 */
@Injectable()
export class CalificacionService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
  
   getClientes() : Observable<Calificacion[]> {
       return this.http.get<Calificacion[]>(API_URL + calificaciones);
   }
}
