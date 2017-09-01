import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Usuario } from './usuario.model';

@Injectable()
export class PerfilUsuarioService {

  constructor(private http: Http) { }

  getTodosUsuarios() {
    return this.http.get('/api/usuarios', this.jwt())
    .map((res: Response) => res.json());
  }

  getUsuarioPeloId(id: number) {
    return this.http.get('/api/usuarios/' + id, this.jwt())
    .map((res: Response)=> res.json());
  }

  criar(nome: string, sobrenome: string, username: string, senha: string) {
    return this.http.post('/api/usuarios',
    {
      nome: nome,
      sobrenome: sobrenome,
      username: username,
      senha: senha
    }, this.jwt())
    .map((res: Response) => res.json());
  }

  alterar(usuario: Usuario) {
    return this.http.put('/api/usuarios', usuario, this.jwt())
    .map((res: Response) => res.json());
  }

  deletar(id: number) {
    return this.http.delete('/api/usuarios/' + id, this.jwt())
    .map((res: Response) => res.json());
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
