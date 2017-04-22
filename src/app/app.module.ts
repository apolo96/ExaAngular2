import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsuarioService } from './usuario/usuario.service';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListaComponent } from './usuario/usuario-lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './usuario/usuario-detalle/usuario-detalle.component';
import { UsuarioNuevoComponent } from './usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario/usuario-editar/usuario-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioListaComponent,
    UsuarioDetalleComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
