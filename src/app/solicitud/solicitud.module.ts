import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudListComponent } from './solicitud-list/solicitud-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SolicitudListComponent],
  exports: [SolicitudListComponent]
})
export class SolicitudModule { }
  