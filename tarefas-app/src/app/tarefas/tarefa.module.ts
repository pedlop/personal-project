import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TarefaComponent } from './tarefa/tarefa.component';
import { TarefaCadastrarComponent } from './tarefa-cadastrar/tarefa-cadastrar.component';
import { TarefaRoutingModule } from './tarefa-routing.module';
import { TarefaService } from './shared/tarefa.service';
import { AutenticarGuard } from './../shared/autenticar/shared/autenticar.guard';

@NgModule({
    declarations: [TarefaComponent, TarefaCadastrarComponent],
    imports: [CommonModule, TarefaRoutingModule],
    exports: [TarefaComponent, TarefaCadastrarComponent],
    providers: [TarefaService, AutenticarGuard]
})
export class TarefaModule { }