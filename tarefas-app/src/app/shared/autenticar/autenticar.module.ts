import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EntrarComponent } from './entrar/entrar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AutenticarRoutingModule } from './autenticar-routing.module';
import { FormControlErrorModule } from './../form-control-error/form-control-error.module';
import { AutenticarService } from './shared/autenticar.service';

@NgModule({
  declarations: [EntrarComponent, RegistrarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutenticarRoutingModule,
    FormControlErrorModule
  ],
  exports: [EntrarComponent, RegistrarComponent],
  providers: [AutenticarService]
})
export class AutenticarModule { }
