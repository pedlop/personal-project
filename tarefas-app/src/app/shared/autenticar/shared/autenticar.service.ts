import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class AutenticarService {

  constructor(private http: Http, private router: Router) { }

  login(username: string, senha: string) {
    return this.http.post('/api/autenticar', 
    JSON.stringify(
      {
        username: username,
        senha: senha
      }
    )).map((response: Response) => {
      // login bem-sucedido se houver um token jwt na resposta
      let usuario = response.json();
      if (usuario && usuario.token) {
        localStorage.setItem('usuarioAtual', JSON.stringify(usuario));
      }
      // armazene detalhes do usuário e token jwt no 'local storage' para manter o usuário logado entre as atualizações de página
      return usuario;
    });
  }

  logout() {
    // remove usuario do 'local storage' para ele sair da aplicação
    localStorage.removeItem('usuarioAtual');
    this.router.navigate(['/login']);
  }
}
