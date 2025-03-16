import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { camera, chatbubblesOutline } from 'ionicons/icons';
import { IonItem, IonLabel, IonTextarea, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonIcon, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss'],
  standalone: true,
  imports: [ IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTextarea, IonLabel, IonItem, FormsModule]
})
export class MensagensComponent  implements OnInit {

enviarMensagemComFoto() {
throw new Error('Method not implemented.');
}
onFileChange($event: Event) {
throw new Error('Method not implemented.');
}
novaMensagem: any;

  constructor() {
    addIcons({chatbubblesOutline,camera});
   }

  ngOnInit() {}

}
