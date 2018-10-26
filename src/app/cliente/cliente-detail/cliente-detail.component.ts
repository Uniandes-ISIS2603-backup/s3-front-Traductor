import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { TarjetaDeCredito } from '../../tarjeta-de-credito/tarjetaDeCredito';
import { Pagos } from '../../pagos/pagos';


@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit, OnDestroy {
  
  
  /**
    * The constructor of the component
    * @param clienteService The client service which communicates with the API
    * @param route The route which helps to retrieves the id of the client to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {
        //This is added so we can refresh the view when one of the clients in
        //the "Other clients" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
          if (e instanceof NavigationEnd) {
              this.ngOnInit();
        }
      });
  }

  /**
  * The client's id retrieved from the address
  */
  cliente_id: number;

  /**
 * The book whose details are shown
 */
  cliente: Cliente;

  /**
 * The other books shown in the sidebar
 */
  other_clientes: Cliente[];

  /**
 * The suscription which helps to know when a new client
 * needs to be loaded
 */
  navigationSubscription;

  /**
  * The method which retrieves the details of the client that
  * we want to show
  */
  getCliente(): void {
    this.clienteService.getCliente(this.cliente_id)
      .subscribe(cliente => {
          this.cliente = cliente;
      }, err => {
          this.toastrService.error(err, "Error");
    });
  }

  /**
  * This method retrieves all the clients in the Prometeus to show them in the list
  */
  getAllClientes(): void {
    this.clienteService.getCliente(this.cliente_id)
    this.clienteService.getClientes()
          .subscribe(clientes => {
              this.other_clientes = clientes;
              this.other_clientes = this.other_clientes.filter(cliente => cliente.id !== this.cliente_id);
          }, err => {
              this.toastrService.error(err, "Error");
          });
  }

  /**
  * The method which initilizes the component
  * We need to initialize the book and its editorial so that
  * they are never considered undefined
  */
  ngOnInit() {
    this.cliente_id = +this.route.snapshot.paramMap.get('id');
    this.cliente = new Cliente();
    this.getCliente();
    this.getAllClientes();
  }
  
  /**
  * This method helps to refresh the view when we need to load another client into it
  * when one of the other books in the list is clicked
  */
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
