import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/httperrorinterceptor.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

import { ClienteModule } from './cliente/cliente.module';
import { PropuestaModule } from './propuesta/propuesta.module';
import { PagosModule } from './pagos/pagos.module';
import { TarjetaDeCreditoModule } from './tarjeta-de-credito/tarjeta-de-credito.module';
import { IdiomasModule } from './idiomas/idiomas.module';
import { AreasModule } from './areas/areas.module';
import { InvitacionModule } from './invitacion/invitacion.module';
import { CalificacionesModule } from './calificaciones/calificaciones.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { MainMenuComponent } from './comunes/main-menu/main-menu.component';
import { NavbarComponent } from './comunes/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClienteModule,
    PropuestaModule,
    PagosModule,
    TarjetaDeCreditoModule,
    IdiomasModule,
    EmpleadoModule,
    CalificacionesModule,
    InvitacionModule,
    AreasModule,
    SolicitudesModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 9600, preventDuplicates: true, positionClass: 'toast-bottom-right'}),
    NgxPermissionsModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }]
})
export class AppModule {}
