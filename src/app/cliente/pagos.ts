/* 
 * Interfaz donde se definen los atributos y valores que recibe una propuesta.
 * Analogo a los DTO pero en el front-end.
 * @author ANDRES
 */
import {Propuesta} from './propuesta'

export class Pagos {
 
idTransaccion:number;
pagoAprobado:boolean;
propuestaDto:Propuesta;

}

