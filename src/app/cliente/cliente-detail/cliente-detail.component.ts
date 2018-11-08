import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import {ClienteTarjetasComponent} from '../cliente-tarjetas/cliente-tarjetas.component';
import {ClienteAddTarjetaDeCreditoComponent} from '../cliente-add-tarjeta-de-credito/cliente-add-tarjeta-de-credito.component';
import { ClienteDetail } from '../cliente-detail';
import { ClientePagosComponent } from '../cliente-pagos/cliente-pagos.component';
import { PagosListComponent } from 'src/app/pagos/pagos-list/pagos-list.component';



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
 * The client whose details are shown
 */
  cliente: Cliente;



  clienteDetail:ClienteDetail;



  /**
 * The suscription which helps to know when a new client
 * needs to be loaded
 */
  navigationSubscription;

  @ViewChild(ClienteTarjetasComponent) tarjetaListComponent: ClienteTarjetasComponent;


  @ViewChild(ClienteAddTarjetaDeCreditoComponent) tarjetaAddComponent: ClienteAddTarjetaDeCreditoComponent;

  @ViewChild(ClientePagosComponent) pagosListComponent: ClientePagosComponent;

  
  toggleTarjetas(): void {
    if (this.tarjetaAddComponent.isCollapsed == false) {
        this.tarjetaAddComponent.isCollapsed = true;
    }
    this.tarjetaListComponent.isCollapsed = !this.tarjetaListComponent.isCollapsed;
}

togglePagos(): void {
 
  this.pagosListComponent.isCollapsed = !this.pagosListComponent.isCollapsed;
}

toggleCreateTarjeta(): void {
    if (this.tarjetaListComponent.isCollapsed == false) {
        this.tarjetaListComponent.isCollapsed = true;
    }
    this.tarjetaAddComponent.isCollapsed = !this.tarjetaAddComponent.isCollapsed;
}
  

    updateTarjetas(): void {
      this.getClienteDetail();
      this.tarjetaListComponent.updateTarjetas(this.clienteDetail.tarjetas);
      this.tarjetaListComponent.isCollapsed = false;
      this.tarjetaAddComponent.isCollapsed = true;
  }

  updatePagos(): void {
    this.getClienteDetail();
    this.pagosListComponent.updatePagos(this.clienteDetail.pagos);
    this.pagosListComponent.isCollapsed = false;
    this.pagosListComponent.isCollapsed = true;
}
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
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
   getClienteDetail(): void {
    this.clienteService.getClienteDetail(this.cliente_id)
        .subscribe(clienteDetail => {
            this.clienteDetail = clienteDetail;
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
    //this.getAllClientes();
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
