import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { MainMenuComponent } from '../comunes/main-menu/main-menu.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from '../cliente/cliente-create/cliente-create.component';
import { IdiomasListComponent } from '../idiomas/idiomas-list/idiomas-list.component';
import { AreasListComponent } from '../areas/areas-list/areas-list.component';
import { CalificacionesListComponent } from '../calificaciones/calificaciones-list/calificaciones-list.component';
import { EmpleadoListComponent } from '../empleado/empleado-list/empleado-list.component';
import { EmpleadoDetailComponent } from '../empleado/empleado-detail/empleado-detail.component';
import { EmpleadoCreateComponent } from '../empleado/empleado-create/empleado-create.component';
import { SolicitudesListComponent } from '../solicitudes/solicitudes-list/solicitudes-list.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegistroComponent } from '../auth/registro/registro.component';
import { PerfilComponent } from '../comunes/perfil/perfil.component';

const routes: Routes = [
    {
        path: '',
        component: MainMenuComponent
    },
    {
        path: 'clientes',
        children: [
            {
                path: 'miperfil',
                component: PerfilComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['CLIENTE']
                    }
                }
            },
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
            }
        ]
    },    
    {
        path: 'idiomas',
        children: [
            {
                path: 'list',
                component: IdiomasListComponent
            }
        ]
    },
    {
        path: 'areas',
        children: [
            {
                path: 'list',
                component: AreasListComponent
            }
        ]
    },
    {
        path: 'calificaciones',
        children: [
            {
                path: 'list',
                component: CalificacionesListComponent
            }
        ]
    },
    {
        path: 'empleados',
        children: [
            {
                path: 'miperfil',
                component: PerfilComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['EMPLEADO']
                    }
                }
            },
            {
                path: 'list',
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
    },
    {
        path: 'autenticacion',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['INVITADO']
                    }
                }
            },
            {
                path: ':registro',
                component: RegistroComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['INVITADO']
                    }
                }
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }