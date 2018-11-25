/* 
 * Interfaz donde se definen los atributos y valores que recibe una propuesta.
 * Analogo a los DTO pero en el front-end.
 * @author ANDRES
 */
import {Propuesta} from '../propuesta/propuesta'

export interface Pagos {
 
idTransaccion:number;
pagoAprobado:number;
propuestaDto:Propuesta;

}

