import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area } from './area';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

const API_URL = environment.API_URL;
const areas = '/areas';

/**
 * El servicio que provee todo lo de las areas
 */
@Injectable()
export class AreaService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
  
   getAreas() : Observable<Area[]> {
       return this.http.get<Area[]>(API_URL + areas);
   }
}
