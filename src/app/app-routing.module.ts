import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListaComponent} from './usuario/usuario-lista/usuario-lista.component';
import { UsuarioDetalleComponent} from './usuario/usuario-detalle/usuario-detalle.component';
import { UsuarioNuevoComponent} from './usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent} from './usuario/usuario-editar/usuario-editar.component';


const appRoutes: Routes = [
    {
        path: 'usuario',
        component: UsuarioComponent,
        children: [
            {
                path: '',
                redirectTo: 'lista',
                pathMatch: 'full'
            },
            {
                path:'lista',
                component: UsuarioListaComponent
            },
            {
                path:'nuevo',
                component:UsuarioNuevoComponent
            },
            {
                path:'detalle/:id',
                component: UsuarioDetalleComponent
            },
            {
                path:'editar/:id',
                component: UsuarioEditarComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}