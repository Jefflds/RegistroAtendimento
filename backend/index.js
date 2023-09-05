const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();

const ipAddress = "0.0.0.0";
const listenPort = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "RegistroDeAtendimentos",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conectado ao MySQL");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/salvarAtendimento", (req, res) => {
  const atendimento = req.body;
  const sql = "INSERT INTO Atendimento SET ?";
  db.query(sql, atendimento, (err, result) => {
    if (err) {
      console.error("Erro ao salvar atendimento:", err);
      res.status(500).json({ error: "Erro ao salvar atendimento" });
    } else {
      console.log("Atendimento salvo com sucesso!");
      res.status(200).json({ message: "Atendimento salvo com sucesso!" });
    }
  });
});

app.get("/categorias", (req, res) => {
  const sql = "SELECT * FROM CategoriaAtendimento";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Erro ao buscar categorias:", err);
      res.status(500).json({ error: "Erro ao buscar categorias" });
    } else {
      res.status(200).json(result);
    }
  });
});

app.delete("/deletarAtendimento/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM Atendimento WHERE IDAtendimento = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("Erro ao excluir atendimento:", err);
      res.status(500).json({ error: "Erro ao excluir atendimento" });
    } else {
      console.log("Atendimento excluído com sucesso!");
      res.status(200).json({ message: "Atendimento excluído com sucesso!" });
    }
  });
});


app.listen(listenPort, ipAddress, () => {
  console.log(`Servidor Express está ouvindo no endereço ${ipAddress}:${listenPort}`);
});
