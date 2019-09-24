import { CameraService } from './../camera.service';
import { Camera } from '@ionic-native/camera/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private camera: CameraService) {}
  imagemCapturada;
  capturar(){
    this.imagemCapturada;
    CameraService.tirarFoto();
  }
}
