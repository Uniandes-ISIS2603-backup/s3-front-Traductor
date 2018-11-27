import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Calificacion} from '../calificaciones';
import {CalificacionesService} from '../calificaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calificaciones-create',
  templateUrl: './calificaciones-create.component.html',
  styleUrls: ['./calificaciones-create.component.css']
})
export class CalificacionesCreateComponent implements OnInit {

  /**
  * Constructor for the component of cliente-create
  * @param calificacionService The calificacion services provider
  * @param toastrService The toastr to show messages to the user
  */

 constructor(
  private calificacionService: CalificacionesService,
  private toastrService: ToastrService,
  private router: Router
  ) {}

  //Identificador del empleado
  @Input() empleadoId : number;

  /**
   * Nueva invitación a crear
   */

  calificacion : Calificacion;

  /**
   * Evento para informar al componente List que se cancelo la creación de una nueva invitación
   */
  
  @Output() cancel = new EventEmitter();

  /**
   * Evento para informar al componente Listo que se creó satisfactoriamente la nueva invitación
   */

  @Output() create = new EventEmitter();

  /**
   * Crear una nueva invitación
   */

  createCalificacion() : Calificacion {
    console.log("El comentario de la calificacion es:" + this.calificacion.comentario);
    this.calificacionService.createCalificacion(this.empleadoId, this.calificacion).subscribe((calificacion) =>
    {
      this.calificacion = calificacion
      this.create.emit();
      this.toastrService.success("La calificacion ha sido creada satisfactoriamente", "Crear calificacion");
    });
    return this.calificacion;
  }

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelCreation(): void {
    this.cancel.emit();
}

  ngOnInit() {
    this.calificacion = new Calificacion();
  }
}