import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Usuario } from './usuario.model';

@Injectable()
export class PerfilUsuarioService {

  constructor(private http: Http) { }

  getTodosUsuarios() {
    return this.http.get('/api/usuarios', this.jwt())
    .map((response: Response) => response.json());
  }

  getUsuarioPeloId(id: number) {
    return this.http.get('/api/usuarios/' + id, this.jwt())
    .map((response: Response) => response.json());
  }

  criar(usuario: Usuario) {
    return this.http.post('/api/usuarios', usuario, this.jwt())
    .map((response: Response) => response.json());
  }

  alterar(usuario: Usuario) {
    return this.http.put('/api/usuarios', usuario, this.jwt())
    .map((response: Response) => response.json());
  }

  deletar(id: number) {
    return this.http.delete('/api/usuarios/' + id, this.jwt())
    .map((response: Response) => response.json());
  }

  private jwt() {
    // cria a autorização no 'header' com 'jwt token'
    let usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'));
    if (usuarioAtual && usuarioAtual.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + usuarioAtual.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
