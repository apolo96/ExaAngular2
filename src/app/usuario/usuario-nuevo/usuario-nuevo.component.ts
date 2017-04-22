import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.baseclass';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private userService: UsuarioService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.createFormControls();
  }

  ngOnInit() {

  }

  createFormControls() {
    this.usuario = {
      Id: 0,
      Documento: '',
      Nombre:'',
      Apellido: '',
      TipoUsuario: 0,
      NivelUsuario: 0,
      Telefono: '',
      Correo: '',
      UserName: '',
      Password: '',
      PasswordModificado: true,
      Estado: false
    }
  }

  guardarUsuario() {
    this.userService.addUsuario(this.usuario)
      .subscribe(
      res => console.log(res),
      error => console.log(error),
      () => console.log('finish-nuevo')
      );
  }

}

