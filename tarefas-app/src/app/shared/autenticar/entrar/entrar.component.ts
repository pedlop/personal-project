import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { AutenticarService } from './../shared/autenticar.service';
import { ToastService } from './../../toast/toast.service';

@Component({
  selector: 'ufg-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

  entrarForm: FormGroup;
  loading: boolean;

  constructor(private formBuilder: FormBuilder, private autenticarService: AutenticarService,
              private router: Router, private toast: ToastService) { }

  ngOnInit() {
    this.entrarForm = this.formBuilder.group({
      username: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  onClickEntrar() {
    this.mostrarLoading();
    console.log(this.entrarForm.controls.username.value);
    console.log(this.entrarForm.controls.senha.value);
    this.autenticarService.login(
      this.entrarForm.controls.username.value,
      this.entrarForm.controls.senha.value
    ).subscribe(
      data => {
        this.toast.sucesso('Sucesso', 'Você esta logado!');
        this.router.navigate(['/']);
      },
      err => {
        this.toast.erro('', err);
      }
    )
    
    
  }

  private mostrarLoading() {
    this.loading = true;
  }

  private esconderLoading() {
    this.loading = false;
  }
}
