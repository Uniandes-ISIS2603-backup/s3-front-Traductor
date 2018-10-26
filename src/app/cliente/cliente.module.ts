import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteService } from './cliente.service';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent, ClienteDetailComponent]
})
export class ClienteModule { }
