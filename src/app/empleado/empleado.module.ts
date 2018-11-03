import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from './empleado.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [EmpleadoListComponent, EmpleadoDetailComponent],
  providers: [EmpleadoService],
  exports: [EmpleadoListComponent, EmpleadoDetailComponent]
})
export class EmpleadoModule { }
