import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonHeader, IonContent, IonLabel, IonInput, IonItem, IonTitle, IonToolbar, IonSelectOption, IonButton, IonSelect } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    IonButton, IonToolbar, IonTitle, IonItem, IonHeader, IonContent, IonLabel, IonInput, IonSelectOption, IonSelect, 
    FormsModule,
    HttpClientModule 
  ]
})
export class CadastroPage {
  nome: string = '';
  email: string = '';
  senha: string = '';
  tipoUsuario: string = '';

  constructor(private alertController: AlertController, private http: HttpClient) {}

  async cadastrar() {
    if (!this.nome || !this.email || !this.senha || !this.tipoUsuario) {
      await this.mostrarAlerta('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      tipoUsuario: this.tipoUsuario
    };

    this.http.post('http://localhost:8010/cadastrar-usuario', usuario)
      .subscribe({
        next: (response: any) => {
          this.mostrarAlerta('Sucesso', response.mensagem);
          this.limparFormulario();
        },
        error: (error) => {
          this.mostrarAlerta('Erro', error.error.erro || 'Erro ao cadastrar usuário');
        }
      });
  }

  async mostrarAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

  limparFormulario() {
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.tipoUsuario = '';
  }
}
