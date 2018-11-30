import { TarjetaDeCredito } from "./tarjetaDeCredito";
import { Propuesta } from "./propuesta";
import { Pagos } from "./pagos";

/**
* This class represents a client of the Translate proyect. 
* It contains all the information relevant to the client.
*/
export class Cliente {
    /**
    * El id
    */
    id: number;

    /**
    * El nombre del cliente
    */
    nombre: string;
    /**
     * el nombre de usuario del cliente
     */
    nombreUsuario: string;
    
    /**
     * El correo del cliente
     */
    correoElectronico: string;

    /**
     * la identificacion del cliente (sea NIT o cedula)
     */
    identificacion: string;
    
    /**
     * la contrasenia del cliente
     */
    contrasenia: string;

    /**
     * el tipo del cliente (EMPRESA o PERSONA_NATURAL)
     */
    tipoCliente: string;

    /**
     * las tarjetas de credito del cliente
     */
    tarjetas: TarjetaDeCredito[];

    /**
     * Las propuestas del cliente
     */
    propuestas: Propuesta[];

    /**
     * las invitaciones del cliente
     */
    //invitaciones: Invitacion[];

    /**
     * las solicitudes del cliente que envio al sistema
     */
    //solicitudes: Solicitud[];

    /**
     * Los pagos realizados por el cliente
     */
    pagos: Pagos[];
}
