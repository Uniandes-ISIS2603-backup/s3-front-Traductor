import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit 
{  
  /**
  * Constructor for the component of cliente-create
  * @param clienteService The client's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
  private clienteService: ClienteService,
  private toastrService: ToastrService,
  private router: Router
  ) { }

  /**
  * El nuevo cliente que sera creado
  */
  cliente: Cliente;

  /**
  * The output which tells the parent component
  * that the user no longer wants to create a client
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new client
  */
  @Output() create = new EventEmitter();

  /**
  * Creates an empleado
  */
  createCliente(): Cliente {
    console.log(this.cliente);
    this.clienteService.createCliente(this.cliente)
      .subscribe((cliente) => {
        this.cliente = cliente;
        this.create.emit();
        this.router.navigate(['/clientes/list']);
        this.toastrService.success('El cliente se creó exitosamente!', 'Creación cliente');
      });
    return this.cliente;
  }

  /**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create a client
  */
  cancelCreation(): void {
      this.cancel.emit();
      this.router.navigate(['/clientes/list']);
  }
  /**
  * This function will initialize the component
  */
  ngOnInit() {
      this.cliente = new Cliente();
  }

}
