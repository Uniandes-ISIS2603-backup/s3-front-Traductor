import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { PagosListComponent } from '../pagos/pagos-list/pagos-list.component';
import { PropuestaListComponent } from '../propuesta/propuesta-list/propuesta-list.component';
import { TarjetasListComponent } from '../tarjeta-de-credito/tarjetas-list/tarjetas-list.component';
import {IdiomasListComponent} from '../idiomas/idiomas-list/idiomas-list.component';
import {AreasListComponent} from '../areas/areas-list/areas-list.component';
import {CalificacionesListComponent} from '../calificaciones/calificaciones-list/calificaciones-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import {InvitacionListComponent} from '../invitacion/invitacion-list/invitacion-list.component';

const routes: Routes = [

    {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
                path: ':id',
                component: ClienteDetailComponent
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
		path: 'invitaciones',
		children:[
			{
				path: 'list',
				component: InvitacionListComponent				
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
    },
    {
        path:'idiomas',
        children:[
            {
                path:'list',
                component:IdiomasListComponent
            }
        ]
    },
    {
        path:'areas',
        children:[
            {
                path:'list',
                component: AreasListComponent
            }
        ]
    },
    {
        path:'calificaciones',
        children:[
            {
                path:'list',
                component: CalificacionesListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
