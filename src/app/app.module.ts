import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import {PropuestaModule} from './propuesta/propuesta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClienteModule,
	PropuestaModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
