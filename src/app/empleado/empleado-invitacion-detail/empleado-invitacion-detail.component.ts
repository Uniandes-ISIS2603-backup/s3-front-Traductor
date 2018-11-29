import { Component, Input, OnInit, OnDestroy, ViewChild, Output,EventEmitter} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Invitacion } from 'src/app/cliente/invitacion';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { PropuestaListComponent } from 'src/app/propuesta/propuesta-list/propuesta-list.component';

@Component({
  selector: 'app-empleado-invitacion-detail',
  templateUrl: './empleado-invitacion-detail.component.html',
  styleUrls: ['./empleado-invitacion-detail.component.css']
})
export class EmpleadoInvitacionDetailComponent implements OnInit {

  /**
    * The constructor of the component
    * @param empleadoService The invitacion service which communicates with the API
    * @param route The route which helps to retrieves the id of the client to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
  */
 constructor(
  private empleadoService: EmpleadoService,
  private route: ActivatedRoute,
  private router: Router,
  private toastrService: ToastrService
  ) { }  

  /**
   * Identificador del empleado
   */

  @Input() empleadoId : number;

  /**
  * La invitacion de entrada
  */

  @Input() invitacion: Invitacion;

  //Empleado
  @Input() empleado: Empleado; 

  /**
  * The invitacion id retrieved from the address
  */

  invitacion_id: number;

  /**
   * Mostrar la sección para crear la invitación
   */

  mostrarCreatePropuesta = false;

  /**
  * The method which retrieves the details of the client that
  * we want to show
  * @returns The client with its information (details)
  */
  getInvitacion(): void {
    this.empleadoService.getInvitacion(this.empleadoId, this.invitacion_id)
      .subscribe(invitacion => {
        this.invitacion = invitacion;
      }, err => {
        this.toastrService.error(err, "Error");
      });
  }

  toogleCreatePropuesta(): void{
    console.log("[EmpleadoInvitacionDetail] Entre a mostrar el componente")
    this.mostrarCreatePropuesta = !this.mostrarCreatePropuesta;           
  }

  /**
  * The method which initilizes the component
  * We need to initialize the book and its editorial so that
  * they are never considered undefined
  */
  ngOnInit() {
    if (this.invitacion_id) {
      this.invitacion_id = +this.route.snapshot.paramMap.get('id');
      this.invitacion = new Invitacion();
      this.mostrarCreatePropuesta = false;
      this.getInvitacion();
    }
  }
}