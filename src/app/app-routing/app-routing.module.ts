import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { PagosListComponent } from '../pagos/pagos-list/pagos-list.component';
import { PropuestaListComponent } from '../propuesta/propuesta-list/propuesta-list.component';
import { TarjetasListComponent } from '../tarjeta-de-credito/tarjetas-list/tarjetas-list.component';
import {IdiomasListComponent} from '../idiomas/idiomas-list/idiomas-list.component';
import {AreasListComponent} from '../areas/areas-list/areas-list.component';
import {CalificacionesListComponent} from '../calificaciones/calificaciones-list/calificaciones-list.component';
import {InvitacionListComponent} from '../invitacion/invitacion-list/invitacion-list.component';
import { EmpleadoListComponent } from '../empleado/empleado-list/empleado-list.component';
import {PropuestaDetailComponent} from '../propuesta/propuesta-detail/propuesta-detail.component';
import { EmpleadoDetailComponent } from '../empleado/empleado-detail/empleado-detail.component';
import { EmpleadoCreateComponent } from '../empleado/empleado-create/empleado-create.component';
import {PropuestaCreateComponent} from '../propuesta/propuesta-create/propuesta-create.component';
import { SolicitudesListComponent } from '../solicitudes/solicitudes-list/solicitudes-list.component';

const routes: Routes = [

    {
        path: 'clientes',
        children: [
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
                path: 'add',
                component: ClienteCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: ClienteDetailComponent
            },
        ]
    },
    {
        path: 'propuestas',
        children: [
            {
                path: 'list',
                component: PropuestaListComponent
            },
			{
                path: 'add',
				component: PropuestaCreateComponent,
                runGuardsAndResolvers: 'always'
            },
			{
                path: ':id',
				component: PropuestaDetailComponent
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
    },
    {
        path:'empleados',
        children:[
            {
                path:'list',
                component: EmpleadoListComponent
            },
            {
                path: 'add',
                component: EmpleadoCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: EmpleadoDetailComponent
            }
        ]
    },
    {
        path: 'solicitudes',
        children: [
            {
                path: 'list',
                component: SolicitudesListComponent
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