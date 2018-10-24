import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomasListComponent } from './idiomas-list/idiomas-list.component';
import { IdiomasService } from './idiomas.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IdiomasListComponent],
  providers: [IdiomasService],
  exports: [IdiomasListComponent]
})
export class IdiomasModule { }
