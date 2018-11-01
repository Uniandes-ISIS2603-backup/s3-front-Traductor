import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from './empleado.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [],
  providers: [EmpleadoService],
  exports: []
})
export class EmpleadoeModule { }
