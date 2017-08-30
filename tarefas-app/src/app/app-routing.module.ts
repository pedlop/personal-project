import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
    { 
        path: '',   
        component: PaginaInicialComponent
    },
    { 
        path: '**', 
        component: PaginaNaoEncontradaComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }