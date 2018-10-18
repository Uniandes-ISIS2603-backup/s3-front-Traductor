import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropuestaListComponent } from './propuesta-list/propuesta-list.component';

//Importar el servicio
import {PropuestaService} from './propuesta.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PropuestaListComponent],
  providers: [PropuestaService],
  exports: [PropuestaListComponent]
})
export class PropuestaModule { }
