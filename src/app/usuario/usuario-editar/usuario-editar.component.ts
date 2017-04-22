import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.baseclass';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private userService: UsuarioService
  ) {
    this.createFormControls();
  }

  ngOnInit() {
    let idUrl = this.actRoute.snapshot.params['id'];
    if (!idUrl) return;

    this.userService.getUsuarioById(idUrl).subscribe(
      res => this.usuario = res,
      error => console.log(error),
      () => {
      }
    );

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

  actualizar() {
    this.userService.putUsuario(this.usuario)
      .subscribe(
        res => console.log(res),
        error => console.log(error),
        () => console.log('finish')
      );
  }
}
