import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';

import { HeaderModule } from './shared/header/header.module';
import { FooterModule } from './shared/footer/footer.module';
import { TarefaModule } from './tarefas/tarefa.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PaginaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HeaderModule,
    FooterModule,
    TarefaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
