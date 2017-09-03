import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaAlterarComponent } from './tarefa-alterar/tarefa-alterar.component';
import { TarefaCadastrarComponent } from './tarefa-cadastrar/tarefa-cadastrar.component';
import { AutenticarGuard } from './../shared/autenticar/shared/autenticar.guard';

const routes: Routes = [
    {
        path: 'tarefa/:id',
        component: TarefaAlterarComponent
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