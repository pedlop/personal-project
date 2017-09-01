import { Component, OnInit } from '@angular/core';

import { Usuario } from './../shared/perfil-usuario/shared/usuario.model';
import { PerfilUsuarioService } from './../shared/perfil-usuario/shared/perfil-usuario.service';
import { ToastService } from './../shared/toast/toast.service';
import { AutenticarService } from './../shared/autenticar/shared/autenticar.service';

@Component({
  selector: 'ufg-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {

  usuarioAtual: Usuario;
  usuarios: any[];

  constructor(private perfilUsuarioService: PerfilUsuarioService, private toast: ToastService,
              private autenticarService: AutenticarService) {
    this.usuarios = [];
    this.usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'));
  }

  ngOnInit() {
    this.carregarTodosUsuarios();
  }

  deletarUsuario(id: number) {
    this.perfilUsuarioService.deletar(id).subscribe(
      () => {
        this.toast.sucesso('Sucesso!', 'Usuário excluído.');
        this.carregarTodosUsuarios();
      }
    )
  }

  logout() {
    this.autenticarService.logout();
    this.toast.info('', 'Até logo!');
  }

  private carregarTodosUsuarios() {
    this.perfilUsuarioService.getTodosUsuarios()
    .subscribe(data => { this.usuarios = data; });
  }

}
