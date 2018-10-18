/**
* This class represents a client of the Translate proyect. 
* It contains all the information relevant to the client.
*/
export interface Cliente {
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
}
