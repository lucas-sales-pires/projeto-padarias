import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonIcon, IonCardContent, IonCardHeader, IonCard, IonCardTitle } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { cameraOutline,cloudCircleOutline,cloudUploadOutline } from 'ionicons/icons';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCard, IonCardHeader, IonCardContent, IonIcon, IonLabel, IonItem, ]
})
export class CameraComponent  implements OnInit {
onFileChange($event: Event) {
throw new Error('Method not implemented.');
}

  constructor() {
    addIcons({
      'camera-outline': cameraOutline,
      'cloud-circle-outline': cloudCircleOutline,
      'cloud-upload-outline': cloudUploadOutline
    });
   }

  ngOnInit() {}

}
