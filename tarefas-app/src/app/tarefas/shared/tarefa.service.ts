import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Tarefa } from './tarefa.model';

@Injectable()
export class TarefaService {

  constructor(private http: Http) { }

  mostrarTarefas() {
    return this.http.get('/api/tarefas')
    .map((response: Response) => response.json());
  }

  cadastrar(tarefa: Tarefa) {
    return this.http.post('/api/tarefas', tarefa)
    .map((response: Response) => response.json());
  }
  
  alterar(titulo: string, descricao: string, id: number) {
    return this.http.put('/api/tarefas/' + id, {titulo: titulo, descricao: descricao})
    .map((response: Response) => response.json());
  }

  deletar(id: number) {
    return this.http.delete('/api/tarefas/' + id)
    .map((response: Response) => response.json());
  }
}
