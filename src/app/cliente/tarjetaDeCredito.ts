import { Cliente } from "./cliente";

/* 
 * Interfaz donde se definen los atributos y valores que recibe una propuesta.
 * Analogo a los DTO pero en el front-end.
 * @author ANDRES
 */

export class TarjetaDeCredito {
	
    idTarjeta:number;
    numeroTarjetaCredito:number;
    ccv:number;
    anioExpiracion:number;
    mesExpiracion:number;
    redBancaria:string;
    nombreTitular:string;
}

