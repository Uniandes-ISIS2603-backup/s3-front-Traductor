import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import {PropuestaModule} from './propuesta/propuesta.module';
import {PagosModule} from './pagos/pagos.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TarjetaDeCreditoModule } from './tarjeta-de-credito/tarjeta-de-credito.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClienteModule,
    PropuestaModule,
    PagosModule,
    TarjetaDeCreditoModule,
	  AppRoutingModule	
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
