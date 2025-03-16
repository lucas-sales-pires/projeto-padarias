import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonGrid, IonRow, IonCol, IonText, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { camera } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AlertaComponent } from 'src/app/components/buttons/alerta/alerta.component';
import { MensagensComponent } from "../../components/inputs/mensagens/mensagens.component";
import { CameraComponent } from 'src/app/components/inputs/camera/camera.component';
import { FotoComponent } from "../../components/buttons/foto/foto.component";
import { AdicionarCardapioComponent } from "../../components/functions/adicionar-cardapio/adicionar-cardapio.component";
import { routes } from '../../app.routes'

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.page.html',
  styleUrls: ['./administrativo.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonContent, CommonModule, FormsModule, NavbarComponent, AlertaComponent, MensagensComponent, CameraComponent, FotoComponent, AdicionarCardapioComponent]
})
export class AdministrativoPage implements OnInit {
  
  navRoutes = routes.filter(route => route.path && route.path !== '');

  constructor() {
    
    addIcons({camera});
  }


  ngOnInit() {
  }

}
