import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaComponent } from './tarefa/tarefa.component';
import { TarefaCadastrarComponent } from './tarefa-cadastrar/tarefa-cadastrar.component';
import { AutenticarGuard } from './../shared/autenticar/shared/autenticar.guard';

const routes: Routes = [
    {
        path: 'tarefa/:id',
        component: TarefaComponent
    },
    {
        path: 'cadastrar/tarefa',
        component: TarefaCadastrarComponent,
        canActivate: [AutenticarGuard]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TarefaRoutingModule { }