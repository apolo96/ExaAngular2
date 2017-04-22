import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.baseclass';


@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuario:Usuario;

  constructor(private userService:UsuarioService, private router:Router) { }

  ngOnInit() {
    this.userService.getUsuario().subscribe(
      res => this.usuario = res,
      err => console.log(err),
      () => console.log('Success')
    );
  }

  verDetalle(id:number){
    this.router.navigate(['/usuario/detalle/',id]);
  }
}
