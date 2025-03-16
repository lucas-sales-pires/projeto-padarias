import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss'],
  standalone: true,
  imports: [IonButton,  ]
})
export class MensagensComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
