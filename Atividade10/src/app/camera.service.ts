import { Injectable } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  static tirarFoto() {
    throw new Error("Method not implemented.");
  }
  

  constructor(private camera: Camera) { }
  tirarFoto() {
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
