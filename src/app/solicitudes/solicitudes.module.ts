import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesListComponent } from './solicitudes-list/solicitudes-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SolicitudesListComponent],
  exports : [SolicitudesListComponent]
})
export class SolicitudesModule { }
