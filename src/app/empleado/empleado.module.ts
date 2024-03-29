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
import { NgxPermissionsModule } from 'ngx-permissions';

/**
 * Imports de invitacion para el empleado
 */
import {EmpleadoInvitacionesComponent} from './empleado-invitaciones/empleado-invitaciones.component';
import {EmpleadoInvitacionDetailComponent} from './empleado-invitacion-detail/empleado-invitacion-detail.component';
import { CalificacionesListComponent } from '../calificaciones/calificaciones-list/calificaciones-list.component';
import { EmpleadoEditComponent } from './empleado-edit/empleado-edit.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule,
    CalificacionesModule,
    NgxPermissionsModule
  ],
  declarations: [
    EmpleadoListComponent,
    EmpleadoDetailComponent, 
    EmpleadoCreateComponent,
    EmpleadoPropuestasListComponent,
    PropuestaCreateComponent, 
    EmpleadoEditPropuestaComponent,
    EmpleadoInvitacionesComponent,
    EmpleadoInvitacionDetailComponent, 
    EmpleadoEditComponent
  ],
  providers: [EmpleadoService],
  exports: [
    EmpleadoListComponent, 
    EmpleadoDetailComponent, 
    EmpleadoCreateComponent,
    EmpleadoPropuestasListComponent,
    EmpleadoEditPropuestaComponent,
    PropuestaCreateComponent,
    EmpleadoInvitacionesComponent,
    EmpleadoInvitacionDetailComponent,
    EmpleadoEditComponent
  ]
})
export class EmpleadoModule { }
