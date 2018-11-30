import { Component, OnInit,Input,Output,EventEmitter, OnChanges } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { ToastrService } from 'ngx-toastr';
import { Propuesta } from '../propuesta';
import { Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-empleado-edit-propuesta',
  templateUrl: './empleado-edit-propuesta.component.html',
  styleUrls: ['./empleado-edit-propuesta.component.css'],
  providers: [DatePipe]
})
export class EmpleadoEditPropuestaComponent implements OnInit,OnChanges {

  constructor( private empleadoService: EmpleadoService,
    private dp: DatePipe,
    private toastrService: ToastrService,
    private router: Router
    ) { }

/**
    * The cliente id as received from the parent component
    */
   @Input() idEmpleado: number;

   /**
    * The cliente id as received from the parent component
    */
   @Input() propuesta: Propuesta;


   /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new author
   */
   @Output() update = new EventEmitter();

   public isCollapsed = false;

 /**
    * Updates the information of the client
    */
   editPropuesta(): void {
    let dateB: Date = new Date(this.propuesta.tiempoEstimado.year, this.propuesta.tiempoEstimado.month - 1, this.propuesta.tiempoEstimado.day);
    //this.propuesta.tiempoEstimado = this.dp.transform(dateB, 'dd/MM/yyyy');
    console.log("[EditPropuesta] El id del empleado es: " + this.idEmpleado);
    let idEmpleadoComponent = this.idEmpleado; //La guardo aqui porque parece que el servidor no responde el id
    this.empleadoService.updatePropuesta(this.idEmpleado,this.propuesta)
        .subscribe(() => {
            this.toastrService.success("La info de la propuesta se actualizo", "Actualizacion de la propuesta");
            this.router.navigate(['empleados/'+ idEmpleadoComponent]);
        });
    this.update.emit();
    this.isCollapsed=true;
    
}


  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelEdition(): void {
       
    this.cancel.emit();
    this.isCollapsed = true;
}

    /**
    * This function will initialize the component
    */
   ngOnInit() {
}

/**
* This function will be called when the user chooses another author to edit
*/
ngOnChanges() {
    this.ngOnInit();
}
}
