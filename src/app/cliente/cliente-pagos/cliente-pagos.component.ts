import { Component, OnInit,Input } from '@angular/core';
import { Pagos } from 'src/app/pagos/pagos';

@Component({
  selector: 'app-cliente-pagos',
  templateUrl: './cliente-pagos.component.html',
  styleUrls: ['./cliente-pagos.component.css']
})
export class ClientePagosComponent implements OnInit {
  @Input() pagos : Pagos [];

  public isCollapsed = true;

  updatePagos(pagos:Pagos[]): void {
    this.pagos = pagos;
  }

  ngOnInit() {
    
  }

}
