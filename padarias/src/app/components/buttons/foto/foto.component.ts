import { Component, OnInit } from '@angular/core';
import {  IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonIcon, } from "@ionic/angular/standalone";
import { MensagemFotoComponent } from "../mensagem-foto/mensagem-foto.component";
import { imageOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss'],
  standalone: true,
  imports: [IonIcon, IonCardTitle, IonCardHeader, IonCard, IonCardContent, MensagemFotoComponent]
})
export class FotoComponent  implements OnInit {

enviarMensagemComFoto() {
throw new Error('Method not implemented.');
}


  constructor() { 
    addIcons({
      'image-outline': imageOutline
    });
  }

  ngOnInit() {}

}
