import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { sendOutline } from 'ionicons/icons';

@Component({
  selector: 'app-mensagem-foto',
  templateUrl: './mensagem-foto.component.html',
  styleUrls: ['./mensagem-foto.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, ]
})
export class MensagemFotoComponent  implements OnInit {
enviarMensagemComFoto() {
throw new Error('Method not implemented.');
}

  constructor() {
    addIcons({
      'send-outline': sendOutline
    });
   }

  ngOnInit() {}

}
