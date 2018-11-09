import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../solicitudes';
import { SolicitudService } from '../solicitudes.service';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
 
})
export class SolicitudesListComponent implements OnInit {

  constructor(private solicitudService : SolicitudService) { }

/**
 * Lista de solicitudes
 */
solicitudes : Solicitud[];


getSolicitudes() : void
{
  this.solicitudService.getSolicitudes().subscribe(solicitudes => this.solicitudes = this.solicitudes);
}


  ngOnInit() {
  }

}
