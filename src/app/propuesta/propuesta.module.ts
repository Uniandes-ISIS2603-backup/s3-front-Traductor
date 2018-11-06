import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropuestaListComponent } from './propuesta-list/propuesta-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Importar el servicio
import {PropuestaService} from './propuesta.service';
import { PropuestaDetailComponent } from './propuesta-detail/propuesta-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule	
  ],
  declarations: [PropuestaListComponent, PropuestaDetailComponent],
  providers: [PropuestaService],
  exports: [PropuestaListComponent, PropuestaDetailComponent]
})
export class PropuestaModule { }
