import { Invitacion } from '../cliente/invitacion';

/* 
 * Interfaz donde se definen los atributos y valores que recibe una propuesta.
 * Analogo a los DTO pero en el front-end.
 * @author Geovanny Andrés González 
 */

export class Propuesta {
	
	//Identificador de la propuesta.
	id: number;
	
	//Costo de la propuesta.
	costo: number;
	
	//Descripción de la propuesta.
	descripcion: string;
	
	//Estado de la propuesta.
	estado: string;
	
	//Tiempo estimado de entrega.
	tiempoEstimado: any;

	invitacion:Invitacion;
}

