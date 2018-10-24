import { Component, OnInit } from '@angular/core';
import { Area } from '../areas';
import { AreasService } from '../areas.service';

/**
 * EL componente para listar las areas en traductor
 */
@Component({
  selector: 'list-area',
  templateUrl: './areas-list.component.html'
})
export class AreasListComponent implements OnInit {

  constructor(private areaService: AreasService) { }

  /**
   * la lista de areas de la aplicacion
   */
  areas: Area[];
/**
 * actualiza las areas
 */
  getAreas(): void {
    this.areaService.getAreas().subscribe(areas => this.areas = areas);
  }
  
  /**
   * Iniclializa el componente pidiendo la lista de areas del servicio
   * Se llama cuando se crea el componente
   */
  ngOnInit() {
    this.getAreas();
  }

}