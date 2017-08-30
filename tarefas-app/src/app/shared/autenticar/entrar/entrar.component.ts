import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ufg-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

  usuario: any = {};

  constructor() {
    this.usuario = {
      nome: null,
      email: null
    }
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
    
  }
}
