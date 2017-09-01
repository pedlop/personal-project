import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PerfilUsuarioRoutingModule } from './perfil-usuario-routing.module';
import { PerfilUsuarioService } from './shared/perfil-usuario.service';

@NgModule({
  declarations: [PerfilUsuarioComponent],  
  imports: [
    CommonModule,
    PerfilUsuarioRoutingModule
  ],
  exports: [PerfilUsuarioComponent],
  providers: [PerfilUsuarioService]
})
export class PerfilUsuarioModule { }
