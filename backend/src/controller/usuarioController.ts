import { conectarAoBanco } from '../models/banco';

// LOGIN 

export async function fazerLogin(req:any, res:any){
    const {nome, email, senha, tipoUsuario } = req.body;
    const client = await conectarAoBanco();
    const db = client.db('padarias');
    const collection = db.collection('usuarios');
  
    const usuario = await collection.findOne
    ({email: email, senha: senha});
  
    if(!usuario){
      return res.status(404).json({erro: 'Usuário não encontrado'});
    }
    return res.status(200).json(usuario);
  
  }
  
  // CADASTRO
  
  export async function cadastrarUsuario(req:any, res:any){
    const {nome, email, senha, tipoUsuario } = req.body;
    const client = await conectarAoBanco();
    const db = client.db('padarias');
    const collection = db.collection('usuarios');
  
    const usuario = await collection.findOne
    ({email: email});
  
    if(usuario){
      return res.status(400).json({erro: 'Usuário já cadastrado'});
    }
  
    await collection.insertOne({nome, email, senha});
    return res.status(201).json({mensagem: 'Usuário cadastrado com sucesso'});
  }
  
  