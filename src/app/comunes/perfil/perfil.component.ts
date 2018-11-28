import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ClientePropuestasListComponent } from 'src/app/cliente/cliente-propuestas/cliente-propuestas.component';
import { ClientePagosComponent } from 'src/app/cliente/cliente-pagos/cliente-pagos.component';
import { ClienteAddTarjetaDeCreditoComponent } from 'src/app/cliente/cliente-add-tarjeta-de-credito/cliente-add-tarjeta-de-credito.component';
import { ClienteTarjetasComponent } from 'src/app/cliente/cliente-tarjetas/cliente-tarjetas.component';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ClienteInvitacionesComponent } from 'src/app/cliente/cliente-invitaciones/cliente-invitaciones.component';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {


  /**
    * The constructor of the component
    * @param clienteService The client service which communicates with the API
    * @param route The route which helps to retrieves the id of the client to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    * @param authService The service which saves the curret User
  */
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService
  ) {
    //This is added so we can refresh the view when one of the clients in
    //the "Other clients" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  //Ocultar o mostrar el modulo de invitaciones del cliente.
  mostrarInvitacion = false;

  /**
  * The suscription which helps to know when a new client
  * needs to be loaded
  */
  navigationSubscription;

  @ViewChild(ClienteTarjetasComponent) tarjetaListComponent: ClienteTarjetasComponent;

  @ViewChild(ClienteAddTarjetaDeCreditoComponent) tarjetaAddComponent: ClienteAddTarjetaDeCreditoComponent;

  @ViewChild(ClientePagosComponent) pagosListComponent: ClientePagosComponent;

  @ViewChild(ClientePropuestasListComponent) propuestaListComponent: ClientePropuestasListComponent;

  @ViewChild(ClienteInvitacionesComponent) invitacionesListComponent: ClienteInvitacionesComponent;

  toggleTarjetas(): void {
    if (this.tarjetaAddComponent.isCollapsed == false) {
      this.tarjetaAddComponent.isCollapsed = true;

    }
    this.tarjetaListComponent.isCollapsed = !this.tarjetaListComponent.isCollapsed;

  }

  togglePropuestas(): void {

    this.propuestaListComponent.isCollapsed = !this.propuestaListComponent.isCollapsed;
    console.log(this.authService.getUser().propuestas);

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

  toggleInvitaciones(): void {
    console.log("[Cliente Detail - toggleInvitaciones] Se procede a colapsar la sección de invitaciones");
    console.log("[Cliente Detail - toggleInvitaciones] Valor inicial del colapse de invitacionComponent" + this.mostrarInvitacion);
    this.mostrarInvitacion = !this.mostrarInvitacion;
    console.log("[Cliente Detail - toggleInvitaciones] Valor final del colapse de invitacionComponent" + this.mostrarInvitacion);
  }


  updateTarjetas(): void {
    this.getCliente();
    this.tarjetaListComponent.updateTarjetas(this.authService.getUser().tarjetas);
    this.tarjetaListComponent.isCollapsed = false;
    this.tarjetaAddComponent.isCollapsed = true;
  }

  updatePagos(): void {
    this.getCliente();
    this.pagosListComponent.updatePagos(this.authService.getUser().pagos);
    this.pagosListComponent.isCollapsed = false;
    this.pagosListComponent.isCollapsed = true;
  }

  /**
  * The method which retrieves the details of the client that
  * we want to show
  * @returns The client with its information (details)
  */
  getCliente(): void {
    this.clienteService.getCliente(this.authService.getUser().id)
      .subscribe(cliente => {
        this.authService.saveUser(cliente);
        //this.cliente = cliente;
      }, err => {
        this.toastrService.error(err, "Error");
      });
  }

  /**
  * The method which initilizes the component
  * We need to initialize the clients so that
  * they are never considered undefined
  */
  ngOnInit() {
    this.mostrarInvitacion = false;
    this.getCliente();
    //this.getAllClientes();    
  }

  /**
  * This method helps to refresh the view when we need to load another client into it
  * when one of the other clients in the list is clicked
  */
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
