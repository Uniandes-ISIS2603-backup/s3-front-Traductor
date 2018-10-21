import { Component, OnInit } from '@angular/core';
import { Pagos } from '../pagos';
import { PagosService } from '../pagos.service';

@Component({
  selector: 'app-pagos-list',
  templateUrl: './pagos-list.component.html',
  styleUrls: ['./pagos-list.component.css']
})
export class PagosListComponent implements OnInit {

  constructor(private pagosService: PagosService) { }



  pagos: Pagos[];
  


  getPagos(): void {
    this.pagosService.getPagos().subscribe(pagos => this.pagos = pagos);
  }

  getEstado(pago: Pagos): String {
    if (pago.pagoAprobado) {
      return "Aprobado"
    }

    else {
      return "Pendiente"
    }
  }

  ngOnInit() {
    this.getPagos();
  }




}
