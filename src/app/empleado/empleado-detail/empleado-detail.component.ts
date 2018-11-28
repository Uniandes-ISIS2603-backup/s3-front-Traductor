import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Propuesta } from '../propuesta';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { EmpleadoDetail } from '../empleado-detail';
import { EmpleadoPropuestasListComponent } from '../empleado-propuestas/empleado-propuestas.component';
import { PropuestaCreateComponent } from '../empleado-add-propuesta/empleado-add-propuesta.component';


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

  //Mostrar la seccion de calificaciones
  mostrarCalificacion = false;

  //Mostrar la seccion de invitaciones
  mostrarInvitacion = false;

  /**
  * The client's id retrieved from the address
  */
  empleado_id: number;

  /**
 * The empleados whose details are shown
 */
  empleado: EmpleadoDetail;

  /**
 * The other empleados shown in the sidebar
 */
  other_empleados: Empleado[];

  /**
 * The suscription which helps to know when a new client
 * needs to be loaded
 */
  navigationSubscription;

  @ViewChild(EmpleadoPropuestasListComponent) propuestaListComponent: EmpleadoPropuestasListComponent;

  @ViewChild(PropuestaCreateComponent) propuestaCreateComponent: PropuestaCreateComponent;

  
  togglePropuestas(): void {
    
    if (this.propuestaCreateComponent.isCollapsed == false) 
    {
        this.propuestaCreateComponent.isCollapsed = true;
       
    }
  this.propuestaListComponent.isCollapsed = !this.propuestaListComponent.isCollapsed;
  
  console.log(this.empleado.propuestas);
  }
  
  
  toggleCreatePropuesta(): void {
    if (this.propuestaListComponent.isCollapsed == false) 
    {
        this.propuestaListComponent.isCollapsed = true;
       
    }
    this.propuestaCreateComponent.isCollapsed = !this.propuestaCreateComponent.isCollapsed;
    
  }
  

  toggleCalificaciones(): void {
    this.mostrarCalificacion = !this.mostrarCalificacion;        
  }

  toggleInvitaciones(): void {
    this.mostrarInvitacion = !this.mostrarInvitacion;        
  }
  

  updatePropuestas(): void {
    this.getEmpleado();
    this.propuestaListComponent.updatePropuestas(this.empleado.propuestas);
    this.propuestaListComponent.isCollapsed = false;
    this.propuestaListComponent.isCollapsed = true;
  }

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
    this.empleado = new EmpleadoDetail();
    this.getEmpleado();
    this.mostrarCalificacion = false;
    this.mostrarInvitacion = false;
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
