import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Usuario } from './usuario.baseclass';
import 'rxjs/Rx';

@Injectable()
export class UsuarioService {

  private options;
  private url = 'http://api.servdesk.makersi.com.co/api/usuario';

  constructor(private http: Http) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.options = new RequestOptions({ headers: headers });
  }

  getUsuario(): Observable<Usuario> {
    let url = `${this.url}/listarUsuarios`;
    return this.http.get(url,this.options).map(res => res.json()).catch(this.handleError);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    let url = `${this.url}/obtenerUsuarioPorId/${id}`;
    console.log(url);
    return this.http.get(url,this.options).first().map(res => res.json()).catch(this.handleError);
  }

  addUsuario(usuario: Usuario){
    let url = `${this.url}/guardarUsuario/g`;
    let data = JSON.stringify(usuario);
    console.log(data);
    return this.http.post(url, data,this.options).map(res => res.json()).catch(this.handleError);
  }

  putUsuario(usuario: Usuario) {
    let url = `${this.url}/guardarUsuario/d`;
    let data = JSON.stringify(usuario);
    console.log(data);    
    return this.http.post(url, data,this.options).map(res => res.json()).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errorMs: string;
    if (error instanceof Response) {
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errorMs = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMs = error.message ? error.message : error.toString();
    }
    return Observable.throw(errorMs);
  }
}