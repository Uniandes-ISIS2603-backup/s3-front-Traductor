import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClienteListComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent]
})
export class ClienteModule { }
