import { Injectable } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService { 
  constructor(private camera: Camera) {}
  }  
 

