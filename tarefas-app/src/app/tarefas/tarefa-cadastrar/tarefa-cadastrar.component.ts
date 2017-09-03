import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TarefaService } from './../shared/tarefa.service';
import { Tarefa } from './../shared/tarefa.model';
import { ToastService } from './../../shared/toast/toast.service';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'ufg-tarefa-cadastrar',
  templateUrl: './tarefa-cadastrar.component.html',
  styleUrls: ['./tarefa-cadastrar.component.scss'],
  animations: [
    trigger('criandoTarefaVisibilidade', [
      transition(
        ':enter', [
          style({ 'opacity': 0 }),
          animate('250ms', style({ 'opacity': 1 }))
        ]
      ),
      transition(
        ':leave', [
          style({ 'opacity': 1 }),
          animate('250ms', style({ 'opacity': 0 }))
        ]
      )])
  ]
})
export class TarefaCadastrarComponent implements OnInit {

  tarefaForm: FormGroup;
  tarefas: any[];
  private tarefa: Tarefa;

  public modalRef: BsModalRef;
  alteraForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private tarefaService: TarefaService,
              private toast: ToastService, private modalService: BsModalService) {
    this.tarefas = [];
  }

  ngOnInit() {
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
    this.alteraForm = this.tarefaForm;
    this.carregaTodasTarefas();
  }

  onSubmit() {
    this.dadosTarefa();
    this.tarefaService.cadastrar(this.tarefa).subscribe(
      data => {
        this.toast.sucesso('', 'Tarefa Cadastrada com Sucesso.');
        this.alteraForm.reset();
      },
      err => {
        this.toast.erro('', err);
      }
    )
  }

  removerTarefa(id: number) {
    this.tarefaService.deletar(id).subscribe(
      () => {
        this.toast.sucesso('', 'Tarefa Removida com sucesso.')
        this.carregaTodasTarefas();
    });
  }

  alterarTarefa(id: number) {
    this.dadosTarefa();
    this.tarefaService.alterar(this.alteraForm.controls.titulo.value, this.alteraForm.controls.descricao.value, id).subscribe(
      data => {
        this.toast.sucesso('', 'Tarefa Alterada com sucesso.');
        this.alteraForm.reset();
        this.esconderModal();
      },
      err => {
        this.toast.erro('', err);
      }
    )
  }

  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  esconderModal() {
    this.modalRef.hide();
  }

  private dadosTarefa() {
    this.tarefa = {
      titulo: this.tarefaForm.controls.titulo.value,
      descricao: this.tarefaForm.controls.descricao.value
    }
  }

  private carregaTodasTarefas() {
    this.tarefaService.mostrarTarefas()
    .subscribe(data => { this.tarefas = data; });
  }

}
