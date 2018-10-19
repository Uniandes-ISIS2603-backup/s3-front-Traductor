import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { PropuestaListComponent } from '../propuesta/propuesta-list/propuesta-list.component';

const routes: Routes = [
    
  {
      path: 'clientes',
      children: [
          {
              path: 'list',
              component: ClienteListComponent
          }
      ]
  },
  {
      path: 'propuestas',
      children: [
          {
              path: 'list',
              component: PropuestaListComponent
          }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
