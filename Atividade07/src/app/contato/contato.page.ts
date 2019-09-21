import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  formulario: FormGroup;
  mensagens_validacao = {
    'nome_required': 'Nome é obrigatório.',
    'nome_minlength': 'Nome deve conter no mínimo 5 caracteres',
    'email_required': 'Email é obrigatório.',
    'email_pattern': 'Email com formato inválido.',
    'telefone_required': 'Telefone é obrigatório.',
  }

  constructor(public alertController: AlertController) { }

  async salvar() {
    const alert = await this.alertController.create({
      message: 'Contato salvo!',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      telefone: new FormControl(null, Validators.required),
    });

  }

}
