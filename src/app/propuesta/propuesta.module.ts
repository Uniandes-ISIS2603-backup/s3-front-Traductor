import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { PropuestaListComponent } from './propuesta-list/propuesta-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Importar el servicio
import {PropuestaService} from './propuesta.service';
import { PropuestaDetailComponent } from './propuesta-detail/propuesta-detail.component';
import { PropuestaCreateComponent } from './propuesta-create/propuesta-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
	FormsModule,
    CommonModule,
	NgbModule	
  ],
  declarations: [PropuestaListComponent, PropuestaDetailComponent, PropuestaCreateComponent],
  providers: [PropuestaService],
  exports: [PropuestaListComponent, PropuestaDetailComponent, PropuestaCreateComponent]
})
export class PropuestaModule { }
