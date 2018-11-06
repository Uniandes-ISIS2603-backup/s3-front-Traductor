/* 
 * Interfaz donde se definen los atributos y valores que recibe una propuesta.
 * Analogo a los DTO pero en el front-end.
 * @author Geovanny Andrés González 
 */

export class Propuesta {
	
	//Identificador de la propuesta.
	propuestaId: number;
	
	//Costo de la propuesta.
	costo: number;
	
	//Identificador del empleado.
	idEmpleado: number;
	
	//Descripción de la propuesta.
	descripcion: String;
	
	//Estado de la propuesta.
	estado: String;
	
	//Tiempo estimado de entrega.
	tiempoEstimado: Date;
}

