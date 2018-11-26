import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitacionListComponent } from './invitacion-list/invitacion-list.component';
import {InvitacionService} from './invitacion.service';
import { InvitacionDetailComponent } from './invitacion-detail/invitacion-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InvitacionListComponent, InvitacionDetailComponent],
  providers: [InvitacionService],
  exports: [InvitacionListComponent,InvitacionDetailComponent]
})
export class InvitacionModule { }
