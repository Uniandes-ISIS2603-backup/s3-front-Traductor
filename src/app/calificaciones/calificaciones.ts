/**
* This class represents a calification of the Translate proyect. 
* It contains all the information relevant to the calification.
*/
export interface Calificacion {
    /**
    * El id de la calificacion
    */
    id: number;

    /**
    * El empleado calificado
    */
   idEmpleado: number;
    /**
     * comentario de la calificacion
     */
    comentario: string;
    
    /**
     * Valor de la calificacion
     */
    valor: number;

   
}