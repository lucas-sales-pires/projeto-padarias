import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'administrativo',
    pathMatch: 'full',
  },
  {
    path: 'administrativo',
    loadComponent: () => import('./pages/administrativo/administrativo.page').then( m => m.AdministrativoPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'cardapio',
    loadComponent: () => import('./pages/cardapio/cardapio.page').then( m => m.CardapioPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat/chat.page').then( m => m.ChatPage)
  },
 
];
