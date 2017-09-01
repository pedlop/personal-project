import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistrarComponent } from './registrar/registrar.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
    {
        path: 'login',
        component: EntrarComponent
    },
    {
        path: 'registrar',
        component: RegistrarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AutenticarRoutingModule { }