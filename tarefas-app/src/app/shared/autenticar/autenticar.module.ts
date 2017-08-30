import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EntrarComponent } from './entrar/entrar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AutenticarRoutingModule } from './autenticar-routing.module';
import { AutenticarService } from './shared/autenticar.service';

@NgModule({
  declarations: [EntrarComponent, RegistrarComponent],
  imports: [
    CommonModule,
    FormsModule,
    AutenticarRoutingModule
  ],
  exports: [EntrarComponent, RegistrarComponent],
  providers: [AutenticarService]
})
export class AutenticarModule { }
