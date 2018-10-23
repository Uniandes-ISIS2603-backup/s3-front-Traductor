import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../calificacion';
import { CalificacionService } from '../calificacion.service';

/**
 * EL componente para listar los clientes en traductor
 */
@Component({
  selector: 'list-calificacion',
  templateUrl: './calificacion-list.component.html',
  styleUrls: ['./calificaicon-list.component.css']
})
export class CalificacionListComponent implements OnInit {

  constructor(private calificacionService: CalificaionService) { }

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
  }

}