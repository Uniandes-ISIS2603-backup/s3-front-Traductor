import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { FormsModule}  from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteAddTarjetaDeCreditoComponent } from './cliente-add-tarjeta-de-credito/cliente-add-tarjeta-de-credito.component';
import { ClienteTarjetasComponent } from './cliente-tarjetas/cliente-tarjetas.component';
import { ClientePagosComponent } from './cliente-pagos/cliente-pagos.component';
import { ClientePropuestasListComponent } from './cliente-propuestas/cliente-propuestas.component';
import { ClienteEditTarjetaDeCreditoComponent } from './cliente-edit-tarjeta-de-credito/cliente-edit-tarjeta-de-credito.component';
import { ClienteInvitacionesComponent } from './cliente-invitaciones/cliente-invitaciones.component';
import { ClienteAddInvitacionComponent } from './cliente-add-invitacion/cliente-add-invitacion.component';
import { ClienteEditInvitacionComponent } from './cliente-edit-invitacion/cliente-edit-invitacion.component';
import { ClienteInvitacionDetailComponent } from './cliente-invitacion-detail/cliente-invitacion-detail.component';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgxPermissionsModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent, ClienteAddTarjetaDeCreditoComponent, ClienteTarjetasComponent, ClientePagosComponent,ClientePropuestasListComponent, ClienteEditTarjetaDeCreditoComponent, ClienteInvitacionesComponent, ClienteAddInvitacionComponent, ClienteEditInvitacionComponent, ClienteInvitacionDetailComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent, ClienteDetailComponent]
})
export class ClienteModule { }
