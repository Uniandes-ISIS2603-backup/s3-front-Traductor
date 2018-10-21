import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagosListComponent } from './pagos-list/pagos-list.component';
import { PagosService } from './pagos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagosListComponent],
  providers: [PagosService],
  exports: [PagosListComponent]
})
export class PagosModule { }
