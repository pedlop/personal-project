import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaComponent } from './tarefa/tarefa.component';
import { TarefaCadastrarComponent } from './tarefa-cadastrar/tarefa-cadastrar.component';

const routes: Routes = [
    {
        path: 'tarefa/:id',
        component: TarefaComponent
    },
    {
        path: 'cadastrar/tarefa',
        component: TarefaCadastrarComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TarefaRoutingModule { }