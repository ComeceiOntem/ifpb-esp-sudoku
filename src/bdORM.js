const con = require("./orm");

const Usuario = require("./model/Usuario");
const Tabuleiro = require("./model/Tabuleiro");

async function resetarBanco() {
    await con.sync({force: true});
}

async function sincronizarBanco() {
    await con.sync();
}

async function inserir() {
    await Usuario.create({nome:"Usuario1", email: "usu1@email.com", senha: "usu1usu1"});
    await Usuario.create({nome:"Usuario2", email: "usu2@email.com", senha: "usu2usu2"});
    await Usuario.create({nome:"Usuario3", email: "usu3@email.com", senha: "usu3usu3"});
    
    await Tabuleiro.create({dificuldade:"Fácil"});
    await Tabuleiro.create({dificuldade:"Média"});
    await Tabuleiro.create({dificuldade:"Difícil"});
  
}

async function consultar() {
    let res = await Usuario.findAll();
    console.log(res);
}


 resetarBanco();
// sincronizarBanco();
// inserir();
// consultar();