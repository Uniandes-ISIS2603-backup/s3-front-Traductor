import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { PagosListComponent } from '../pagos/pagos-list/pagos-list.component';
import { PropuestaListComponent } from '../propuesta/propuesta-list/propuesta-list.component';
import { TarjetasListComponent } from '../tarjeta-de-credito/tarjetas-list/tarjetas-list.component';

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
    },
    {
        path: 'tarjetasDeCredito',
        children: [
            {
                path: 'list',
                component: TarjetasListComponent
            }
        ]
    },
    {
        path: 'pagos',
        children: [
            {
                path: 'list',
                component: PagosListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
