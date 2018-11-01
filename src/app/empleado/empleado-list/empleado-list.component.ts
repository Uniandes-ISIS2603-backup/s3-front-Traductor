import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ToastrService } from 'ngx-toastr';

/**
 * EL componente para listar los empleados en traductor
 */
@Component({
  selector: 'list-empleado',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  /**
  * Constructor of the component
  * @param EmpleadoService The employed's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(private empleadoService: EmpleadoService, private toastrService: ToastrService) { }

  /**
   * la lista de clientes de la aplicacion
   */
  empleados: Empleado[];

  /**
   * Asks the service to update the list of empleados
   */
  getEmpleados(): void {
    this.empleadoService.getEmpleados()
      .subscribe(empleados => {
        this.empleados = empleados;
      }, err => {
          this.toastrService.error(err, 'Error');
      });
  }

  /**
   * Iniclializa el componente pidiendo la lista de Empleados del servicio
   * Se llama cuando se crea el componente
   */
  ngOnInit() {
    this.getEmpleados();
  }

}
