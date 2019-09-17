import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  formulario: FormGroup;

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
      nome: new FormControl(null),
      email: new FormControl(null),
    });
  }

}
