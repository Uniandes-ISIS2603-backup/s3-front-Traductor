import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from './empleado.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { EmpleadoCreateComponent } from './empleado-create/empleado-create.component';
import { EmpleadoPropuestasListComponent } from './empleado-propuestas/empleado-propuestas.component';
import { PropuestaCreateComponent } from './empleado-add-propuesta/empleado-add-propuesta.component';
import { EmpleadoEditPropuestaComponent } from './empleado-edit-propuesta/empleado-edit-propuesta.component';
import {CalificacionesModule} from 'src/app/calificaciones/calificaciones.module';

/**
 * Imports de invitacion para el empleado
 */
import {EmpleadoInvitacionesComponent} from './empleado-invitaciones/empleado-invitaciones.component';
import {EmpleadoInvitacionDetailComponent} from './empleado-invitacion-detail/empleado-invitacion-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule,
    CalificacionesModule
  ],
  declarations: [EmpleadoListComponent, EmpleadoDetailComponent, EmpleadoCreateComponent,EmpleadoPropuestasListComponent,PropuestaCreateComponent, EmpleadoEditPropuestaComponent,EmpleadoInvitacionesComponent,EmpleadoInvitacionDetailComponent],
  providers: [EmpleadoService],
  exports: [EmpleadoListComponent, EmpleadoDetailComponent, EmpleadoCreateComponent]
})
export class EmpleadoModule { }
