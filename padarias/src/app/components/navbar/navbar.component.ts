import { Component, OnInit, signal } from '@angular/core';
import {IonHeader,IonMenu,IonToolbar,IonTitle,IonButtons,IonMenuButton,IonImg,IonIcon,IonItem,IonLabel,IonList,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {search,personCircleOutline,personAddOutline,tabletLandscapeOutline,homeOutline,trophyOutline,settingsOutline,helpOutline,personOutline,informationCircleOutline,arrowUndoOutline,peopleOutline,createOutline, pencilOutline, logInOutline,chatbubbleOutline,chatbubbleEllipsesOutline,listOutline,starOutline
} from 'ionicons/icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonList,IonLabel,IonItem,IonIcon,IonHeader,IonMenu,IonToolbar,IonTitle,IonButtons,IonMenuButton,IonImg],
    
  
})
export class NavbarComponent implements OnInit {
  autenticado =  signal(false);
  email:any;
  adm = signal(false);
  usuario:any;
  
  ngOnInit() {
  }

  constructor() {
   

    addIcons({
      search,
      personCircleOutline,
      personAddOutline,
      tabletLandscapeOutline,
      homeOutline,
      trophyOutline,
      settingsOutline,
      helpOutline,
      personOutline,
      informationCircleOutline,
      arrowUndoOutline,
      peopleOutline,
      createOutline,
      pencilOutline,
      logInOutline,
      chatbubbleOutline,
      chatbubbleEllipsesOutline,
      listOutline,
      starOutline
    });
  }



}
