
/**
 * Interfaz donde e definen los valores de los atributos de una Solicitud. 
 */

export class Solicitud {

    id: number;
    fechaInicio: any;
    fechaEntrega: any;
    estado: number;
    tipoSolicitud: number;
    idiomaEntrada: string;
    idiomaSalitda: string;
    descripcion: string;
    archivo: string;
    longitud: number;
}