import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { IonButton, IonToolbar, IonTitle, IonItem, IonHeader, IonContent, IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:true,
  imports: [IonButton, IonToolbar, IonTitle, IonItem, IonHeader, IonContent, IonInput, FormsModule, HttpClientModule]})
export class LoginPage {
login() {
this.fazerLogin();
}
  email: string = '';
  senha: string = '';

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private http: HttpClient
  ) {
    addIcons({
      'eye': eye,
      'lock-closed': lockClosed,
    });
  }

  async fazerLogin() {
    if (!this.email || !this.senha) {
      await this.mostrarAlerta('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    this.http.post('http://localhost:8010/login', { email: this.email, senha: this.senha })
      

    await this.mostrarAlerta('Sucesso', 'Login realizado com sucesso!');
    this.navCtrl.navigateForward('/home'); 
  }

  async recuperarSenha() {
    const alert = await this.alertController.create({
      header: 'Recuperar Senha',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Digite seu email',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Enviar',
          handler: (data) => {
            if (data.email) {
              console.log('Email para recuperação:', data.email);
              this.mostrarAlerta('Sucesso', 'Um email de recuperação foi enviado.');
            } else {
              this.mostrarAlerta('Erro', 'Por favor, insira um email válido.');
            }
          },
        },
      ],
    });

    await alert.present();
  }

  async mostrarAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
