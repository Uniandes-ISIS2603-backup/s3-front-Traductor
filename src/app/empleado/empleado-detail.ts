import { Calificacion } from '../calificaciones/calificaciones';
import { Propuesta } from '../propuesta/propuesta';
import { Area } from '../areas/areas';
import { Idioma } from '../idiomas/idiomas';

export class EmpleadoDetail {
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
    // TODO
    // invitaciones
    /**
     * Areas de conocimiento de un empleado
     */
    areasDeConocimiento: Area[];
    /**
     * Solicitudes en las cuales trabaja el empleado
     */
    // solicitudes
    /**
     * idiomas que domina el empleado
     */
    idiomas: Idioma[];
}
