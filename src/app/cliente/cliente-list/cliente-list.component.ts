import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

/**
 * EL componente para listar los clientes en traductor
 */
@Component({
  selector: 'list-cliente',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  /**
   * la lista de clientes de la aplicacion
   */
  clientes: Cliente[];

  /**
   * Asks the service to update the list of clientes
   */
  getClientes(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
  }
  
  /**
   * Iniclializa el componente pidiendo la lista de clientes del servicio
   * Se llama cuando se crea el componente
   */
  ngOnInit() {
    this.getClientes();
    // for (let cliente of this.clientes) 
    // {
    //   cliente.tipoCliente.includes('EMP') ? cliente.tipoCliente = 'Empresa' : cliente.tipoCliente = 'Persona';
    // }
  }

}
