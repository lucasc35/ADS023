import { CameraService } from './../camera.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private camera : Camera){}
imagemCapturada : string = '';
 tirarFoto(){
   this.imagemCapturada = '';
   const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  this.camera.getPicture(options).then((imageData) => {
    return 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   console.log("Camera issue: " + err);
  });
   
  }
 }
