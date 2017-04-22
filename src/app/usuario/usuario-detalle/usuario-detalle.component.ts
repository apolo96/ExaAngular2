import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.baseclass';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {

  usuario: Usuario;

  constructor(
     private userService: UsuarioService,
     private actRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.params['id'];
    if (!id) return;

    this.userService.getUsuarioById(id).subscribe(
      res => this.usuario = res,
      error => console.log(error),
      () => console.log('Success Detalle')
    );
    console.log(id);
  }

  irActualizar(id:number){
    this.router.navigate(['/usuario/editar/',id]);
  }

}
