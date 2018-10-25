import { Component, OnInit } from '@angular/core';
import { Idioma } from '../idiomas';
import { IdiomasService } from '../idiomas.service';

/**
 * EL componente para listar los clientes en traductor
 */
@Component({
  selector: 'list-idioma',
  templateUrl: './idiomas-list.component.html'
})
export class IdiomasListComponent implements OnInit {

  constructor(private idiomaService: IdiomasService) { }

  /**
   * la lista de calificaciones de la aplicacion
   */
  idiomas: Idioma[];
/**
 * actualiza las calificaicones
 */
  getIdiomas(): void {
    this.idiomaService.getIdiomas().subscribe(idiomas => this.idiomas = idiomas);
  }
  
  /**
   * Iniclializa el componente pidiendo la lista de calificaciones del servicio
   * Se llama cuando se crea el componente
   */
  ngOnInit() {
    this.getIdiomas();
  }

}