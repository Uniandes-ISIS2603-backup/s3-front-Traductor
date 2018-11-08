import { Component, OnInit,Input } from '@angular/core';
import { Pagos } from 'src/app/pagos/pagos';

@Component({
  selector: 'app-cliente-pagos',
  templateUrl: './cliente-pagos.component.html',
  styleUrls: ['./cliente-pagos.component.css']
})
export class ClientePagosComponent implements OnInit {
  @Input() pagosCliente : Pagos [];

  public isCollapsed = false;

  constructor() { }

  updatePagos(pagos:Pagos[]): void {
    this.pagosCliente = pagos;
}

  ngOnInit() {
  }

}
