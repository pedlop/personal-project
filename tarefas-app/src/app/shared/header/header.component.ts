import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logado: boolean;

  constructor() {
    this.logado = false;
  }

  ngOnInit() {
    if (localStorage.getItem('usuarioAtual')) {
      this.logado = true;
    } else {
      this.logado = false;
    }
  }

}
