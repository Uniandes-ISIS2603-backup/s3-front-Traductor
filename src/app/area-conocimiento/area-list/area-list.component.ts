import { Component, OnInit } from '@angular/core';
import { Area } from '../area';
import { AreaService } from '../area.service';

/**
 * EL componente para listar las areas en traductor
 */
@Component({
  selector: 'list-area',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {

  constructor(private areaService: AreaService) { }

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