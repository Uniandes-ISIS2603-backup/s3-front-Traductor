import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr'
import {Propuesta} from '../propuesta'; //Importa la interfaz propuesta con los tipos basicos.
import {Empleado} from '../empleado';
import { NgForm } from '@angular/forms';
import { EmpleadoService } from '../empleado.service';
import { Router} from '@angular/router';
import { Invitacion } from 'src/app/cliente/invitacion';

@Component({
  selector: 'app-propuesta-create',
  templateUrl: './empleado-add-propuesta.component.html',
  styleUrls: ['./empleado-add-propuesta.component.css'],
  providers : [DatePipe]
})
export class PropuestaCreateComponent implements OnInit {

  constructor(
  private dp : DatePipe,
  private toastrService: ToastrService,
  private empleadoService:EmpleadoService,
  private router: Router
  )
  {}

@Input() invitacionAsociada : Invitacion;

@Input() empleado: Empleado;

/**
* The Event Emitter which sends the signal when a review has just been posted
* so that the list of propuestas refreshes
*/
@Output() updatePropuestas = new EventEmitter();

 /**
  * Nueva propuesta que se desea crear.
 */

propuesta: Propuesta;

isCollapsed=true;

createPropuesta(propuestaForm: NgForm): Propuesta {
  //Anidar la invitacion en la propuesta, la invitacion se viene pasando por parametro
  //Geovanny
  this.propuesta.invitacion = this.invitacionAsociada;

  //Verificar
  console.log("Descripcion de la invitacion" + this.propuesta.invitacion.descripcion);
  console.log("Nueva propuesta, costo" + this.propuesta.costo);
  this.empleadoService.createPropuesta(this.empleado.id,this.propuesta)
      .subscribe(() => {
        propuestaForm.resetForm();
          this.updatePropuestas.emit();
          this.toastrService.success("La propuesta se agrego correctamente", 'Propuesta Agregada');
      }, err => {
          this.toastrService.error(err, 'Error');
      });
      
  return this.propuesta;  
}

cancel(): void {
  this.updatePropuestas.emit(); //Update propuesta solo lanza el evento de cerrar o abrir el componente
}

ngOnInit() {
	this.propuesta = new Propuesta();
  }
}
