import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesListComponent } from './solicitudes-list/solicitudes-list.component';
import { SolicitudService } from './solicitudes.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SolicitudesListComponent],
  exports : [SolicitudesListComponent],
  providers: [SolicitudService]
})
export class SolicitudesModule { }
