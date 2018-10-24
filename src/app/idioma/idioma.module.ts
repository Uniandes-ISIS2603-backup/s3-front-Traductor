import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaListComponent } from './idioma-list/idioma-list.component';
import { IdiomaService } from './idioma.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IdiomaListComponent],
  providers: [IdiomaService],
  exports: [IdiomaListComponent]
})
export class IdiomaModule { }
