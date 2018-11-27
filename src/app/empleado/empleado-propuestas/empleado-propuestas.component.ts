/*
 *  Mi primer componente en TypeScript
 *  Andres Manrique
 *  El componente se encuentra asociado a la función de mostrar toda la lista de propuestas
 *  existentes para un empleado.
*/

import { Component, OnInit,Input } from '@angular/core';
import {Propuesta} from '../propuesta';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  //Declaración del selector para llamarlo en el archivo html y que pueda mostrar el contenido.
  selector: 'app-empleado-propuestas',
  templateUrl: './empleado-propuestas.component.html',
  styleUrls: ['./empleado-propuestas.component.css']
})

export class PropuestaListComponent implements OnInit {

  /**
 * Arreglo de propuestas
 */

  @Input() propuestasEmpleado : Propuesta [];
  
  public isCollapsed = true;

  /**
     * The function called when a propuesta is posted to update the reviews
     */
    updatePropuestas(propuestas:Propuesta[]): void {
      this.propuestasEmpleado = propuestas;
  }

/**
 * Inicializa el componente, recuperando en primer lugar las propuestas del servicio suscrito.
*/

  ngOnInit() {
  }

}
