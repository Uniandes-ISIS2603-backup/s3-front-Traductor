import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule}  from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvitacionListComponent } from './invitacion-list/invitacion-list.component';
import {InvitacionService} from './invitacion.service';
import { InvitacionDetailComponent } from './invitacion-detail/invitacion-detail.component';
import { InvitacionCreateComponent } from './invitacion-create/invitacion-create.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  declarations: [InvitacionListComponent, InvitacionDetailComponent, InvitacionCreateComponent],
  providers: [InvitacionService],
  exports: [InvitacionListComponent,InvitacionDetailComponent,InvitacionCreateComponent]
})
export class InvitacionModule { }
