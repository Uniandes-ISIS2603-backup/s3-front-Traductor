import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionesListComponent } from './calificaciones-list/calificaciones-list.component';
import { CalificacionesService } from './calificaciones.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalificacionesListComponent],
  providers: [CalificacionesService],
  exports: [CalificacionesListComponent]
})
export class CalificacionesModule { }
