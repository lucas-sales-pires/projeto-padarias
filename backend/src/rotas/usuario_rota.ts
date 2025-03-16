import express from 'express';
import { cadastrarUsuario } from '../controller/usuarioController';

export const routerUsuario = express();



routerUsuario.post('/cadastrar-usuario', cadastrarUsuario);

