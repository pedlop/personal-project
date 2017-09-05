import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PerfilUsuarioService } from './../../perfil-usuario/shared/perfil-usuario.service';
import { ToastService } from './../../toast/toast.service';
import { Usuario } from './../../perfil-usuario/shared/usuario.model';

@Component({
  selector: 'plop-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  registrarForm: FormGroup;
  private usuario: Usuario;

  constructor(private formBuilder: FormBuilder, private perfilUsuarioService: PerfilUsuarioService,
              private toastService: ToastService, private router: Router) { }

  ngOnInit() {
    this.registrarForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      username: ['', Validators.required],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  onClickRegistrar() {
    this.dadosUsuario();
    this.perfilUsuarioService.criar(this.usuario).subscribe(
      data => {
        this.toastService.sucesso('Sucesso', 'Você foi registrado');
        this.router.navigate(['/login']);
      },
      err => {
        this.toastService.erro('', err);
        console.log(err);
      }
    );
  }

  private dadosUsuario() {
    this.usuario = {
      nome: this.registrarForm.controls.nome.value,
      sobrenome: this.registrarForm.controls.sobrenome.value,
      username: this.registrarForm.controls.username.value,
      senha: this.registrarForm.controls.senha.value
    }
  }

}
