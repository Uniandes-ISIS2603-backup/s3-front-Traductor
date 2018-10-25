import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../calificaciones';
import { CalificacionesService } from '../calificaciones.service';

/**
 * EL componente para listar los clientes en traductor
 */
@Component({
  selector: 'list-calificacion',
  templateUrl: './calificaciones-list.component.html'
})
export class CalificacionesListComponent implements OnInit {

  constructor(private calificacionService: CalificacionesService) { }

  /**
   * la lista de calificaciones de la aplicacion
   */
  calificaciones: Calificacion[];
/**
 * actualiza las calificaicones
 */
  getCalificaciones(): void {
    this.calificacionService.getCalificaciones().subscribe(calificaciones => this.calificaciones = calificaciones);
  }
  
  /**
   * Iniclializa el componente pidiendo la lista de calificaciones del servicio
   * Se llama cuando se crea el componente
   */
  ngOnInit() {
    this.getCalificaciones();
    console.log("holi :3");
  }

}