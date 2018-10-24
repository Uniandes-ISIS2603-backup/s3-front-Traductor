import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area } from './areas';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 

const API_URL = "../../assets/";
const areas = 'areas.json';

/**
 * El servicio que provee todo lo de las areas
 */
@Injectable({
  providedIn: 'root'
})
export class AreasService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
  
   getAreas() : Observable<Area[]> {
       return this.http.get<Area[]>(API_URL + areas);
   }
}
