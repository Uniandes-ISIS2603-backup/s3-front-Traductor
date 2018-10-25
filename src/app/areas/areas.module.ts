import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasListComponent } from './areas-list/areas-list.component';
import { AreasService } from './areas.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AreasListComponent],
  providers: [AreasService],
  exports: [AreasListComponent]
})

export class AreasModule { }
