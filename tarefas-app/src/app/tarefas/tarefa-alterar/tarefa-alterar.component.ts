import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TarefaService } from './../shared/tarefa.service';
import { ToastService } from './../../shared/toast/toast.service';

@Component({
  selector: 'plop-tarefa-alterar',
  templateUrl: './tarefa-alterar.component.html',
  styleUrls: ['./tarefa-alterar.component.scss']
})
export class TarefaAlterarComponent implements OnInit {

  alteraForm: FormGroup;
  @Input() tarefas: any[];

  constructor(private tarefaService: TarefaService, private toast:ToastService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.alteraForm = this.formBuilder.group({
      titulo: ['', Validators],
      descricao: ['', Validators]
    });
  }

 /* alterarTarefa(id: number) {
    this.dadosTarefa();
    this.tarefaService.alterar(id).subscribe(
      data => {
        this.toast.sucesso('', 'Tarefa Alterada com sucesso.');
        console.log(data);
        
      },
      err => {
        this.toast.erro('', err);
      }
    )
  } */

  private dadosTarefa() {

  }
}
