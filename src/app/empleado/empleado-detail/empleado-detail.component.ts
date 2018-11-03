import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { TarjetaDeCredito } from '../../tarjeta-de-credito/tarjetaDeCredito';
import { Pagos } from '../../pagos/pagos';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';


@Component({
  selector: 'app-empleado-detail',
  templateUrl: './empleado-detail.component.html',
  styleUrls: ['./empleado-detail.component.css']
})
export class EmpleadoDetailComponent implements OnInit, OnDestroy {


  /**
    * The constructor of the component
    * @param empleadoService The client service which communicates with the API
    * @param route The route which helps to retrieves the id of the client to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {
        // This is added so we can refresh the view when one of the empleados in
        // the "Other empleados" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
          if (e instanceof NavigationEnd) {
              this.ngOnInit();
        }
      });
  }

  /**
  * The client's id retrieved from the address
  */
  empleado_id: number;

  /**
 * The empleados whose details are shown
 */
  empleado: Empleado;

  /**
 * The other empleados shown in the sidebar
 */
  other_empleados: Empleado[];

  /**
 * The suscription which helps to know when a new client
 * needs to be loaded
 */
  navigationSubscription;

  /**
  * The method which retrieves the details of the empleado that
  * we want to show
  */
  getEmpleado(): void {
    this.empleadoService.getEmpleado(this.empleado_id)
      .subscribe(empleado => {
          this.empleado = empleado;
      }, err => {
          this.toastrService.error(err, 'Error');
    });
  }

  /**
  * This method retrieves all the empleados in the Prometeus to show them in the list
  */
  getAllEmpleados(): void {
    this.empleadoService.getEmpleado(this.empleado_id);
    this.empleadoService.getEmpleados()
          .subscribe(empleados => {
              this.other_empleados = empleados;
              this.other_empleados = this.other_empleados.filter(empleado => empleado.id !== this.empleado_id);
          }, err => {
              this.toastrService.error(err, 'Error');
          });
  }

  /**
  * The method which initilizes the component
  * We need to initialize the book and its editorial so that
  * they are never considered undefined
  */
  ngOnInit() {
    this.empleado_id = +this.route.snapshot.paramMap.get('id')
    this.empleado = new Empleado();
    this.getEmpleado();
    // this.getAllEmpleados();
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
