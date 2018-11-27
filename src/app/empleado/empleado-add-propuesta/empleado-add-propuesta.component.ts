import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr'
import {Propuesta} from '../propuesta'; //Importa la interfaz propuesta con los tipos basicos.
import {Empleado} from '../empleado';
import { NgForm } from '@angular/forms';
import { EmpleadoService } from '../empleado.service';

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
  private empleadoService:EmpleadoService
  )
  {}

@Input() empleado: Empleado;

/**
* The Event Emitter which sends the signal when a review has just been posted
* so that the list of reviews refreshes
*/
@Output() updateTarjetas = new EventEmitter();

 /**
  * Nueva propuesta que se desea crear.
 */

propuesta: Propuesta;

isCollapsed=true;

createPropuesta(propuestaForm: NgForm): Propuesta {
  this.empleadoService.createPropuesta(this.empleado.id,this.propuesta)
      .subscribe(() => {
        propuestaForm.resetForm();
          this.updateTarjetas.emit();
          this.toastrService.success("La propuesta se agrego correctamente", 'Propuesta Agregada');
      }, err => {
          this.toastrService.error(err, 'Error');
      });
      
  return this.propuesta;
  
}


  ngOnInit() {
	this.propuesta = new Propuesta();
  }
}
