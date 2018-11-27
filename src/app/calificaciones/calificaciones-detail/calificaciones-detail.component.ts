import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Calificacion } from '../calificaciones';
import { CalificacionesService } from '../calificaciones.service';

@Component({
  selector: 'app-calificaciones-detail',
  templateUrl: './calificaciones-detail.component.html',
  styleUrls: ['./calificaciones-detail.component.css']
})
export class CalificacionesDetailComponent implements OnInit {

  /**
     * The constructor of the component
     * @param calificacionService The calificacion service which communicates with the API
     * @param route The route which helps to retrieves the id of the client to be shown
     * @param router The router which is needed to know when the component needs to reload
     * @param toastrService The toastr to show messages to the user
   */
  constructor(
    private calificacionService: CalificacionesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  /**
   * Identificador del empleado
   */

  @Input() empleadoId: number;

  /**
  * La calificacion de entrada
  */

  @Input() calificacion: Calificacion;

  /**
  * The calificacion id retrieved from the address
  */

  calificacion_id: number;

  /**
  * The method which retrieves the details of the empleado that
  * we want to show
  * @returns The empleado calificacion with its information (details)
  */
  getCalificacion(): void {
    this.calificacionService.getCalificacion(this.empleadoId, this.calificacion_id)
      .subscribe(calificacion => {
        this.calificacion = calificacion;
      }, err => {
        this.toastrService.error(err, "Error");
      });
  }

  /**
  * The method which initilizes the component
  * We need to initialize the book and its editorial so that
  * they are never considered undefined
  */
  ngOnInit() {
    if (this.calificacion_id) {
      this.calificacion_id = +this.route.snapshot.paramMap.get('id');
      this.calificacion = new Calificacion();
      this.getCalificacion();
    }
  }
}
