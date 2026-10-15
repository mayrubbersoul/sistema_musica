const express = require("express");
const cors = require("cors");
const conexao = require("./db.js");

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.status({mensagem: "API Sistema de musicas funcionando"})
});

app.get("/artistas", (req, res) =>{
    const sql = "SELECT * FROM artistas";

    conexao.query(sql, (erro , resultado) =>{
        if (erro){
            return res.status(500).json({
                erro: "Error ao listar artistas"
            });
        }
        res.status(200).json(resultado);
    });
});

app.get("/artistas/:id", (req, res)=>{
    const id = req.params.id;
    const sql = `SELECT * FROM artistas WHERE id = ${id}`;

    conexao.query(sql, (erro, resultado)=>{
        if (erro){
            return res.status(500).json({
                erro: "Error ao listar artistas"
            });
        }
        if(resultado.length === 0){
            return res.status(400).json({
                erro: "Artista não encontrado"
            });
        }
        res.status(200).json(resultado[0]);
    });
});
app.post("/artista", (req, res) =>{
    const {nome, genero, pais} = req.body;
    const sql = `INSERT INTO artistas (nome, genero, pais) VALUES(?, ?, ?)`;
});

app.get("/artistas", (req, res) =>{
    const sql = "SELECT * FROM artistas";

    conexao.query(sql,[nome, genero, pais] , (erro, resultado) =>{
        if (erro){
            return res.status(500).json({
                erro: "Error ao listar artistas"
            });
        }

        res.status(201).json({
            mensagem: "Artista cadastrado com sucesso",
            id: resultado,insertId
        });
    });
});

app.delete("/artistas/:id", (req, res) =>{});

app.listen(PORTA, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});






