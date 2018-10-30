import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitacionListComponent } from './invitacion-list/invitacion-list.component';
import {InvitacionService} from './invitacion.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InvitacionListComponent],
  providers: [InvitacionService],
  exports: [InvitacionListComponent]
})
export class InvitacionModule { }
