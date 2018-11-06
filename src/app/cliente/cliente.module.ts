import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ClienteAddTarjetaDeCreditoComponent } from './cliente-add-tarjeta-de-credito/cliente-add-tarjeta-de-credito.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent, ClienteAddTarjetaDeCreditoComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent, ClienteDetailComponent]
})
export class ClienteModule { }
