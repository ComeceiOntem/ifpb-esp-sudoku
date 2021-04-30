require("dotenv").config();
const Route = require("./routes/RouteGeneric");
const Service = require("./service/ServiceGeneric");
const express = require("express");
const cors = require("cors");
const Usuario = require("./model/Usuario");
const Tabuleiro = require("./model/Tabuleiro");
const { Op } = require("sequelize");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.json({ message: "SUDOKU" });
});

Route("/usuario", app, new Service(Usuario));
Route("/tabuleiro", app, new Service(Tabuleiro));

app.post("/cadastrar", async (req, res) => {
  const { nome, email, senha } = req.body;
  const usu = Usuario.create({ nome, email, senha });
  usu.senha = undefined;
  res.send(usu);
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
});
