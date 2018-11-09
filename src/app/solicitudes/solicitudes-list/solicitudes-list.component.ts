import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../solicitud';
import { SolicitudService } from '../solicitudes.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
 
})
export class SolicitudesListComponent implements OnInit {

  constructor(private solicitudService : SolicitudService, private toastrService: ToastrService) { }

/**
 * Lista de solicitudes
 */
solicitudes : Solicitud[];


getSolicitudes() : void
{
  this.solicitudService.getSolicitudes()
    .subscribe(solicitudes => {this.solicitudes = solicitudes}, err => {
          this.toastrService.error(err, "Error");
    });
}


  ngOnInit() {
    this.getSolicitudes();
  }

}
