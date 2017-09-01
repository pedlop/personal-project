import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PerfilUsuarioService } from './../../perfil-usuario/shared/perfil-usuario.service';
import { ToastService } from './../../toast/toast.service';

@Component({
  selector: 'ufg-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  registrarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private perfilUsuarioService: PerfilUsuarioService,
              private toastService: ToastService) { }

  ngOnInit() {
    this.registrarForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      username: ['', Validators.required],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  onClickRegistrar() {
    this.perfilUsuarioService.criar(
      this.registrarForm.controls.nome.value,
      this.registrarForm.controls.sobrenome.value,
      this.registrarForm.controls.username.value,
      this.registrarForm.controls.senha.value
    ).subscribe(
      data => {
        this.toastService.sucesso('Sucesso', 'Você foi registrado');
      },
      err => {
        this.toastService.erro('', err);
        console.log(err);
      }
    );
  }

}
