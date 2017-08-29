import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';

const routes: Routes = [
    { 
        path: '',   
        component: PaginaInicialComponent
    },
    { 
        path: '**', 
        component: PaginaNotFoundComponent 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }