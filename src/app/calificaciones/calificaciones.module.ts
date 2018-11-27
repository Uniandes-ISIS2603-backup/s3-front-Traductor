import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule}  from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalificacionesService } from './calificaciones.service';
import {CalificacionesListComponent} from './calificaciones-list/calificaciones-list.component';
import {NgxPermissionsModule} from 'ngx-permissions';
import { CalificacionesDetailComponent } from './calificaciones-detail/calificaciones-detail.component';
import { CalificacionesCreateComponent } from './calificaciones-create/calificaciones-create.component';

@NgModule({
  imports: [
    CommonModule,    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPermissionsModule
  ],
  declarations: [CalificacionesListComponent, CalificacionesDetailComponent, CalificacionesCreateComponent],
  providers: [CalificacionesService],
  exports: [CalificacionesListComponent, CalificacionesCreateComponent, CalificacionesDetailComponent]
})
export class CalificacionesModule { }
