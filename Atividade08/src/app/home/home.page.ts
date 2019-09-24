import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  statusBluetooth = false;
  msg : string;
  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) {}
  ligaBluetooth(status : boolean){
    this.statusBluetooth = status;
    this.exibeToast(); 
    if(!this.statusBluetooth)
  {
  this.exibeAlert();
  }
  }
 async exibeToast(){
   
  if(!this.statusBluetooth)
  {
  this.msg = "Bluetooth ligado";
  }
  else
  {
    this.msg = "Bluetooth desligado";
  }
  const toast = await this.toastCtrl.create({
    message: this.msg,
    duration: 2000
  });toast.present();
 }
 async exibeAlert(){
  const alert = await this.alertCtrl.create({
    header: 'Confirmação',
    message: 'Deseja ligar o Bluetooth do aparelho?',
    buttons: [{
      text: 'Cancel',
      handler: () => {this.statusBluetooth}
    }, {
      text: 'Okay',
      handler: () => {!this.statusBluetooth}
    }]
 }); 
 await alert.present();
 }
}
