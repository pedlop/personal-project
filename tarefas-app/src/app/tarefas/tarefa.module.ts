import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { TarefaCadastrarComponent } from './tarefa-cadastrar/tarefa-cadastrar.component';
import { TarefaRoutingModule } from './tarefa-routing.module';
import { TarefaService } from './shared/tarefa.service';
import { AutenticarGuard } from './../shared/autenticar/shared/autenticar.guard';
import { TarefaAlterarComponent } from './tarefa-alterar/tarefa-alterar.component';

@NgModule({
    declarations: [TarefaCadastrarComponent, TarefaAlterarComponent],
    imports: [
        CommonModule, 
        TarefaRoutingModule,
        ReactiveFormsModule,
        ModalModule.forRoot()
    ],
    exports: [TarefaCadastrarComponent],
    providers: [TarefaService, AutenticarGuard]
})
export class TarefaModule { }