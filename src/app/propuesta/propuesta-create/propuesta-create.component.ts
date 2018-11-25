import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import {Propuesta} from '../propuesta'; //Importa la interfaz propuesta con los tipos basicos.
import {PropuestaService} from '../propuesta.service';

@Component({
  selector: 'app-propuesta-create',
  templateUrl: './propuesta-create.component.html',
  styleUrls: ['./propuesta-create.component.css'],
  providers : [DatePipe]
})
export class PropuestaCreateComponent implements OnInit {

  constructor(
  private dp : DatePipe,
  private propuestaService: PropuestaService,
  private toastrService: ToastrService
  )
  {}
  
/**
  * The output which tells the parent component
  * that the user no longer wants to create an author
*/
@Output() cancel = new EventEmitter();

/**
  * The output which tells the parent component
  * that the user created a new author
*/
@Output() create = new EventEmitter();

 /**
  * Nueva propuesta que se desea crear.
 */

propuesta: Propuesta;

//Terminar de escribir.
/**
createPropuesta(): Propuesta
{
	console.log(this.propuesta); //Mostrar en consola para verificar que no hayan errores
    let dateB: Date = new Date(this.propuesta.tiempoEstimado.year, this.propuesta.tiempoEstimado.month -1, this.propuesta.tiempoEstimado.day);
    this.propuesta.tiempoEstimado = this.dp.transform(dateB, 'MM-dd-yyyy'); //Formato mes-dia-año
    console.log(this.propuesta)
    
	this.propuestaService.createPropuesta(this.propuesta)
            .subscribe((pPropuesta) => {
                this.propuesta = pPropuesta;
                this.create.emit();
                this.toastrService.success("La nueva propuesta fue creada satisfactoriamente", "Nueva propuesta");                
            });
           
	return this.propuesta;
}
*/
/**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create an user
*/
cancelCreation(): void {
    this.cancel.emit();
}

  ngOnInit() {
	this.propuesta = new Propuesta();
  }
}
