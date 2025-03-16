import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { alertCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton]
})
export class AlertaComponent  implements OnInit {

  constructor() {
    addIcons({
      'alert-circle-outline': alertCircleOutline
    });
   }
  enviarAlerta() {
    throw new Error('Method not implemented.');
    }

  ngOnInit() {}

}
