import cors from 'cors';
import { config } from 'dotenv';
import { conectarAoBanco } from './models/banco';
import { routerUsuario } from './rotas/usuario_rota';
import express from 'express';
config();
const porta = process.env.PORTA;

const main = async () => {

conectarAoBanco()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routerUsuario);

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
}
main()
