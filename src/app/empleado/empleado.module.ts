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
import { PropuestaListComponent } from './empleado-propuestas/empleado-propuestas.component';
import { PropuestaCreateComponent } from './empleado-add-propuesta/empleado-add-propuesta.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule
  ],
  declarations: [EmpleadoListComponent, EmpleadoDetailComponent, EmpleadoCreateComponent,PropuestaListComponent,PropuestaCreateComponent],
  providers: [EmpleadoService],
  exports: [EmpleadoListComponent, EmpleadoDetailComponent, EmpleadoCreateComponent]
})
export class EmpleadoModule { }
