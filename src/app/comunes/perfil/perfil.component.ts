import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ClientePropuestasListComponent } from 'src/app/cliente/cliente-propuestas/cliente-propuestas.component';
import { ClientePagosComponent } from 'src/app/cliente/cliente-pagos/cliente-pagos.component';
import { ClienteAddTarjetaDeCreditoComponent } from 'src/app/cliente/cliente-add-tarjeta-de-credito/cliente-add-tarjeta-de-credito.component';
import { ClienteTarjetasComponent } from 'src/app/cliente/cliente-tarjetas/cliente-tarjetas.component';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { EmpleadoPropuestasListComponent } from 'src/app/empleado/empleado-propuestas/empleado-propuestas.component';
import { PropuestaCreateComponent } from 'src/app/empleado/empleado-add-propuesta/empleado-add-propuesta.component';
import { EmpleadoService } from 'src/app/empleado/empleado.service';
import { EmpleadoEditComponent } from 'src/app/empleado/empleado-edit/empleado-edit.component';

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
    private empleadoService: EmpleadoService,
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
  mostrarInvitacion: boolean;

  //Mostrar la seccion de calificaciones
  mostrarCalificacion: boolean;

  rol: string;

  /**
   * El id del usuario actual
   */
  cliente_id: number;

  /**
  * The suscription which helps to know when a new client
  * needs to be loaded
  */
  navigationSubscription;

  @ViewChild(ClienteTarjetasComponent) tarjetaListComponent: ClienteTarjetasComponent;

  @ViewChild(ClienteAddTarjetaDeCreditoComponent) tarjetaAddComponent: ClienteAddTarjetaDeCreditoComponent;

  @ViewChild(ClientePagosComponent) pagosListComponent: ClientePagosComponent;

  @ViewChild(ClientePropuestasListComponent) propuestaListCliente: ClientePropuestasListComponent;

  @ViewChild(EmpleadoPropuestasListComponent) propuestaListEmpleado: EmpleadoPropuestasListComponent;

  @ViewChild(PropuestaCreateComponent) propuestaCreateComponent: PropuestaCreateComponent;

  @ViewChild(EmpleadoEditComponent) empleadoEditComponent: EmpleadoEditComponent;


  toggleTarjetas(): void {
    if (this.tarjetaAddComponent.isCollapsed == false) {
      this.tarjetaAddComponent.isCollapsed = true;
    }
    if (this.pagosListComponent.isCollapsed == false) {
      this.pagosListComponent.isCollapsed = true;
    }
    if (this.mostrarInvitacion) {
      this.mostrarInvitacion = !this.mostrarInvitacion;
    }
    if (this.propuestaListCliente.isCollapsed == false) {
      this.propuestaListCliente.isCollapsed = true;
    }
    this.tarjetaListComponent.isCollapsed = !this.tarjetaListComponent.isCollapsed;
  }

  togglePropuestas(): void {
    if (this.rol === 'CLIENTE') {
      if (this.tarjetaAddComponent.isCollapsed == false) {
        this.tarjetaAddComponent.isCollapsed = true;
      }
      if (this.tarjetaListComponent.isCollapsed == false) {
        this.tarjetaListComponent.isCollapsed = true;
      }
      if (this.pagosListComponent.isCollapsed == false) {
        this.pagosListComponent.isCollapsed = true;
      }
    }
    if (this.mostrarInvitacion) {
      this.mostrarInvitacion = !this.mostrarInvitacion;
    }
    if (this.mostrarCalificacion) {
      this.mostrarCalificacion = !this.mostrarCalificacion;
    }
    if (this.rol === 'CLIENTE') {
      this.propuestaListCliente.isCollapsed = !this.propuestaListCliente.isCollapsed;
    } else {
      this.propuestaListEmpleado.isCollapsed = !this.propuestaListEmpleado.isCollapsed;
    }
  }

  togglePagos(): void {
    if (this.tarjetaAddComponent.isCollapsed == false) {
      this.tarjetaAddComponent.isCollapsed = true;
    }
    if (this.tarjetaListComponent.isCollapsed == false) {
      this.tarjetaListComponent.isCollapsed = true;
    }
    if (this.mostrarInvitacion) {
      this.mostrarInvitacion = !this.mostrarInvitacion;
    }
    if (this.propuestaListCliente.isCollapsed == false) {
      this.propuestaListCliente.isCollapsed = true;
    }
    this.pagosListComponent.isCollapsed = !this.pagosListComponent.isCollapsed;
  }

  toggleCreateTarjeta(): void {
    if (this.mostrarInvitacion) {
      this.mostrarInvitacion = !this.mostrarInvitacion;
    }
    if (this.rol === 'CLIENTE') {
      if (this.tarjetaListComponent.isCollapsed == false) {
        this.tarjetaListComponent.isCollapsed = true;
      }
      if (this.propuestaListCliente.isCollapsed == false) {
        this.propuestaListCliente.isCollapsed = true;
      }
      if (this.pagosListComponent.isCollapsed == false) {
        this.pagosListComponent.isCollapsed = true;
      }
      this.tarjetaAddComponent.isCollapsed = !this.tarjetaAddComponent.isCollapsed;
    }
  }

  toggleInvitaciones(): void {
    if (this.rol === 'CLIENTE') {
      if (this.propuestaListCliente.isCollapsed == false) {
        this.propuestaListCliente.isCollapsed = true;
      }
    } else {
      if (this.propuestaListEmpleado.isCollapsed == false) {
        this.propuestaListEmpleado.isCollapsed = true;
      }
    }
    if (this.mostrarCalificacion) {
      this.mostrarCalificacion = !this.mostrarCalificacion;
    }
    if (this.rol === 'CLIENTE') {
      if (this.pagosListComponent.isCollapsed == false) {
        this.pagosListComponent.isCollapsed = true;
      }
      if (this.tarjetaListComponent.isCollapsed == false) {
        this.tarjetaListComponent.isCollapsed = true;
      }
      if (this.tarjetaAddComponent.isCollapsed == false) {
        this.tarjetaAddComponent.isCollapsed = true;
      }
    }
    this.mostrarInvitacion = !this.mostrarInvitacion;
  }

  // toggleCreatePropuesta(): void {
  //   if (this.rol === 'CLIENTE') {
  //     if (this.propuestaListCliente.isCollapsed == false) {
  //       this.propuestaListCliente.isCollapsed = true;
  //     }
  //   } else {
  //     if (this.propuestaListEmpleado.isCollapsed == false) {
  //       this.propuestaListEmpleado.isCollapsed = true;
  //     }
  //   }
  //   if (this.mostrarInvitacion) {
  //     this.mostrarInvitacion = !this.mostrarInvitacion;
  //   }
  //   if (this.mostrarCalificacion) {
  //     this.mostrarCalificacion = !this.mostrarCalificacion;
  //   }
  //   this.propuestaCreateComponent.isCollapsed = !this.propuestaCreateComponent.isCollapsed;

  // }

  toggleCalificaciones(): void {
    if (this.rol === 'CLIENTE') {
      if (this.propuestaListCliente.isCollapsed == false) {
        this.propuestaListCliente.isCollapsed = true;
      }
    } else {
      if (this.propuestaListEmpleado.isCollapsed == false) {
        this.propuestaListEmpleado.isCollapsed = true;
      }
    }
    if (this.mostrarInvitacion) {
      this.mostrarInvitacion = !this.mostrarInvitacion;
    }
    this.mostrarCalificacion = !this.mostrarCalificacion;
  }

  toggleEditarEmpleado():void
  {
    if (this.rol === 'CLIENTE') {
      if (this.propuestaListCliente.isCollapsed == false) {
        this.propuestaListCliente.isCollapsed = true;
      }
    } else {
      if (this.propuestaListEmpleado.isCollapsed == false) {
        this.propuestaListEmpleado.isCollapsed = true;
      }
    }
    if (this.mostrarCalificacion) {
      this.mostrarCalificacion = !this.mostrarCalificacion;
    }
    if (this.mostrarInvitacion) {
      this.mostrarInvitacion = !this.mostrarInvitacion;
    }
    this.empleadoEditComponent.isCollapsed = !this.empleadoEditComponent.isCollapsed ;  
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

  updatePropuestas(): void {
    this.getEmpleado();
    this.propuestaListEmpleado.updatePropuestas(this.authService.getUser().propuestas);
    this.propuestaListEmpleado.isCollapsed = false;
    this.propuestaCreateComponent.isCollapsed = true;
  }

  getEmpleado(): void {
    this.empleadoService.getEmpleado(this.cliente_id)
      .subscribe(empleado => {
        this.authService.saveUser(empleado);
      }, err => {
        this.toastrService.error(err, 'Error');
      });

  }

  /**
  * The method which retrieves the details of the client that
  * we want to show
  * @returns The client with its information (details)
  */
  getCliente(): void {
    this.clienteService.getCliente(this.cliente_id)
      .subscribe(cliente => {
        this.authService.saveUser(cliente);
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
    this.rol = localStorage.getItem('rol');
    console.log(this.authService.getUser());
    this.cliente_id = ((this.authService.getUser().id) as number);
    console.log(this.cliente_id);
    this.mostrarInvitacion = false;
    this.mostrarCalificacion = false;
    if (this.rol === 'CLIENTE') {
      this.getCliente();
    } else {
      this.getEmpleado();
    }
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
