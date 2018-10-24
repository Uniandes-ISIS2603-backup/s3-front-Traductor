import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idioma } from './idiomas';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

const API_URL = environment.API_URL;
const idiomas = '/idiomas';

/**
 * El servicio que provee todo lo de los clientes
 */
@Injectable()
export class IdiomasService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
  
   getIdiomas() : Observable<Idioma[]> {
       return this.http.get<Idioma[]>(API_URL + idiomas);
   }
}