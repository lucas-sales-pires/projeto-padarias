import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonCardContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../components/navbar/navbar.component";


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonGrid, IonCardContent, CommonModule, FormsModule, IonContent, NavbarComponent]
})
export class CardapioPage implements OnInit {

  constructor() { 
    
  }

  produtos = [
    { nome: 'Pão Francês', preco: 1.50, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9' },
    { nome: 'Croissant', preco: 5.00, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9' },
    { nome: 'Bolo de Cenoura', preco: 12.00, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9' },
    { nome: 'Rosquinha', preco: 3.00, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9' },
    { nome: 'Pão de Queijo', preco: 2.50, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9' }
  ];

  ngOnInit() {
  }

}
