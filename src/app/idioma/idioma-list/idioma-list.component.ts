import { Component, OnInit } from '@angular/core';
import { Idioma } from '../idioma';
import { IdiomaService } from '../idioma.service';

/**
 * EL componente para listar los clientes en traductor
 */
@Component({
  selector: 'list-idioma',
  templateUrl: './idioma-list.component.html',
  styleUrls: ['./idioma-list.component.css']
})
export class IdiomaListComponent implements OnInit {

  constructor(private idiomaService: IdiomaService) { }

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