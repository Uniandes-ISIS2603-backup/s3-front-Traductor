import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaService } from './area.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AreaListComponent],
  providers: [AreaService],
  exports: [AreaListComponent]
})
export class AreaModule { }
