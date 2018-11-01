/**
 * Interfaz con los datos basicos que posee una invitacion
 * @author Geovanny Andres Gonzalez
*/

export interface Invitacion
{
	//Identificador de la invitacion
	idInvitacion: number;
	
	//Identificador del cliente
	idCliente: number;
	
	//Identificador del empleado
	idEmpleado: number;
	
	//Identificador de la solicitud asociada a la invitacion
	solicitudId: number;	
	
	//Descripcion de la solicitud
	descripcion: string;
}
