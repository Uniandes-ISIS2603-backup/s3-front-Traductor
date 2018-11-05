import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from './empleado.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { EmpleadoCreateComponent } from './empleado-create/empleado-create.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [EmpleadoListComponent, EmpleadoDetailComponent, EmpleadoCreateComponent],
  providers: [EmpleadoService],
  exports: [EmpleadoListComponent, EmpleadoDetailComponent, EmpleadoCreateComponent]
})
export class EmpleadoModule { }
