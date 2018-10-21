import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasListComponent } from './tarjetas-list/tarjetas-list.component';
import {TarjetaDeCreditoService} from './tarjeta-de-credito.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TarjetasListComponent],
  providers: [TarjetaDeCreditoService],
  exports: [TarjetasListComponent]
})
export class TarjetaDeCreditoModule { }
