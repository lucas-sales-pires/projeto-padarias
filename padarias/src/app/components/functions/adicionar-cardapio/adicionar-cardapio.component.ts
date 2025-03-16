import { Component, OnInit } from '@angular/core';
import { IonLabel, IonInput, IonItem, IonButton, IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonImg } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-adicionar-cardapio',
  templateUrl: './adicionar-cardapio.component.html',
  styleUrls: ['./adicionar-cardapio.component.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonItem, IonInput, IonLabel, CommonModule, FormsModule]
})
export class AdicionarCardapioComponent implements OnInit {
  
  produtos = [
    { nome: 'Pão Francês', preco: 1.50, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4' },
    { nome: 'Croissant', preco: 5.00, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4' },
    { nome: 'Bolo de Cenoura', preco: 12.00, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4' },
    { nome: 'Rosquinha', preco: 3.00, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4' },
    { nome: 'Pão de Queijo', preco: 2.50, imagem: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4' }
  ];
  
  produto = {
    nome: '',
    preco: null,
  };

  preview: string | ArrayBuffer | null = null;

  constructor() {}

  ngOnInit() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.preview = e.target?.result ?? null;
      };
      reader.readAsDataURL(file);
    }
  }

  adicionarProduto(_form: NgForm) {
    if (!this.produto.nome || !this.produto.preco || !this.preview) {
      alert('Por favor, preencha todos os campos e selecione uma imagem.');
      return;
    }

    this.produtos.push({
      nome: this.produto.nome,
      preco: this.produto.preco,
      imagem: this.preview as string,
    });

    // Limpar o formulário
    _form.resetForm();
    this.preview = null;
  }
}
