import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonButton, IonApp, IonList, IonItem, IonRouterOutlet,IonMenu,IonButtons, IonMenuButton, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { arrowUndoOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, IonButtons, IonRouterOutlet, IonItem, IonList, IonApp, IonButton, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenu, IonMenuButton, NavbarComponent]
})
export class ChatPage implements OnInit {


  users = [
    { id: 1, name: 'Usuário 1' },
    { id: 2, name: 'Usuário 2' },
    { id: 3, name: 'Usuário 3' }
  ];

  messages = [
    { text: 'Olá!', timestamp: '10:00 AM' },
    { text: 'Como você está?', timestamp: '10:05 AM' }
  ];

  newMessage = '';

  constructor() {
    addIcons({ 'arrow-undo-outline' : arrowUndoOutline });
  }

  selectUser(user: any) {
    // Implemente a lógica para carregar as mensagens do usuário selecionado
    console.log('Usuário selecionado:', user);
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, timestamp: new Date().toLocaleTimeString() });
      this.newMessage = '';
    }
  }


  ngOnInit() {
  }

}
