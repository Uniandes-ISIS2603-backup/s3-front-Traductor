import { Calificacion } from "../calificaciones/calificaciones";
import { Propuesta } from "../propuesta/propuesta";
import { Area } from "../areas/areas";
import { Idioma } from "../idiomas/idiomas";

export class Cliente {
    /**
    * El id
    */
    id: number;

    /**
    * El nombre del empleado
    */
    nombreEmpleado: string;
    /**
     * el nombre de usuario del cliente
     */
    nombreUsuario: string;
    
    /**
     * El correo del empleado
     */
    correoElectronico: string;

    /**
     * años experiencia del empleado
     */
    aniosExperiencia: number;
    
    /**
     * la contrasenia del cliente
     */
    contrasenia: string;

    /**
     * el tipo del empleado (corrector, traductor o ambos)
     */
    tipoEmpleado: string;

    /**
     * la trayectoria del empleado
     */
    trayectoria: string;

    /**
     * La hoja de vida del empleado
     */
    HojaDeVida: string;
    /**
     * los estudios del empleado
     */
    estudios: string;
    /**
     * Referencias personales y referencias externas del empleado
     */
    referencias:string
    /**
     * Calificaciones del empleado
     */
    calificaciones: Calificacion[];
    /**
     * propuestas del empleado
     */
    propuestas: Propuesta[];
    /**
     * las invitaciones enviadas al empleado por un cliente
     */
    //TODO
    //invitaciones
    /**
     * Areas de conocimiento de un empleado
     */
    areasDeConocimiento:Area[];
    /**
     * Solicitudes en las cuales trabaja el empleado 
     */
    //solicitudes
    /**
     * idiomas que domina el empleado 
     */
    idiomas:Idioma[];
}
