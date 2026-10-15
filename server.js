const express = require("express");
const cors = require("cors");
const conexao = require("./db.js");

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

// ARTISTAS 
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

app.delete("/artistas/:id", (req, res) =>{
    const id = Number(req.params.id);
    
    const sql = `DELETE FROM artistas WHERE id = ?`;

    conexao.query(sql,[id],(erro, resultado) =>{
        if(erro){
            return res.status(500).json({
                erro: "Erro ao excluir artista."
            });
        }
        if(resultado.affectedRows === 0){
            return res.status(404).json({
                msg: "Artista não encontrado."
            });
        }
        res.status(200).json({msg: "Artista excluido com sucesso"})
    });
});

app.put("/artistas/:id", (req,res) =>{
    const id = Number(req.params.id);
    const {nome, genero, pais} = req.body;

    if (!nome || !genero || !pais) {
        return res.status(400).json({msg: "Insira nome, genero e pais com um ID valido."})
    }

    const sql = "UPDATE artistas SET nome =? ,genero = ?, pais = ? WHERE id = ?"

    conexao.query(sql,[nome, genero,pais, id], (erro, resultado) =>{
        if(erro){
            return res.status(500).json({erro: "Erro ao atualizar artista."});
        }
         if(resultado.affectedRows === 0){
            return res.status(404).json({erro: "Artista não encontrado."});
        }
        res.json({msg: "Artista atualizado com sucesso"});
    });

});

// ÁLBUNS 
app.get("/", (req, res)=>{
    res.status({mensagem: "API Sistema de albuns funcionando."})
});

app.get("/albuns", (req, res) =>{
    const sql = "SELECT * FROM albuns";

    conexao.query(sql, (erro, resultado) =>{
        if (erro){
            return res.status(500).json({
                erro: "Error ao listar albuns."
            });
        }
        res.status(200).json(resultado);
    });
});

app.get("/albuns/:id", (req, res)=>{
    const id = req.params.id;
    const sql = `SELECT * FROM albuns WHERE id = ${id}`;

    conexao.query(sql, (erro, resultado)=>{
        if (erro){
            return res.status(500).json({
                erro: "Error ao listar albuns."
            });
        }
        if(resultado.length === 0){
            return res.status(400).json({
                erro: "album não encontrado."
            });
        }
        res.status(200).json(resultado[0]);
    });
});
app.post("/albuns", (req, res) =>{
    const { nome, genero, pais } = req.body;

    const sql = `INSERT INTO albuns (nome, genero, pais) VALUES (?, ?, ?)`;
});

app.get("/albuns", (req, res) =>{
    const sql = "SELECT * FROM albuns";

    conexao.query(sql,[nome, genero, pais] , (erro, resultado) =>{
        if (erro){
            return res.status(500).json({
                erro: "Error ao listar albuns"
            });
        }

        res.status(201).json({
            mensagem: "Album cadastrado com sucesso",
            id: resultado,insertId
        });
    });
});

app.delete("/albuns/:id", (req, res) =>{
    const id = Number(req.params.id);
    
    const sql = `DELETE FROM albuns WHERE id = ?`;

    conexao.query(sql,[id],(erro, resultado) =>{
        if(erro){
            return res.status(500).json({
                erro: "Erro ao excluir album."
            });
        }
        if(resultado.affectedRows === 0){
            return res.status(404).json({
                msg: "Album não encontrado."
            });
        }
        res.status(200).json({msg: "Album excluido com sucesso"})
    });
});

app.put("/albuns/:id", (req,res) =>{
    const id = Number(req.params.id);
    const {nome, genero, pais} = req.body;

    if (!nome || !genero || !pais) {
        return res.status(400).json({msg: "Insira nome, genero e pais com um ID valido."})
    }

    const sql = "UPDATE artistas SET nome =? ,genero = ?,pais = ? WHERE id = ?"

    conexao.query(sql,[nome, genero,pais, id], (erro, resultado) =>{
        if(erro){
            return res.status(500).json({erro: "Erro ao atualizar album."});
        }
         if(resultado.affectedRows === 0){
            return res.status(404).json({erro: "Album não encontrado."});
        }
        res.json({msg: "Album atualizado com sucesso"});
    });

});

// MÚSICAS 
app.get("/", (req, res)=>{
    res.status({mensagem: "API Sistema de musicas funcionando"})
});

app.get("/musicas", (req, res) =>{
    const sql = "SELECT * FROM musicas";

    conexao.query(sql, (erro , resultado) =>{
        if (erro){
            return res.status(500).json({
                erro: "Error ao listar musicas"
            });
        }
        res.status(200).json(resultado);
    });
});

app.get("/musicas/:id", (req, res)=>{
    const id = req.params.id;
    const sql = `SELECT * FROM musicas WHERE id = ${id}`;

    conexao.query(sql, (erro, resultado)=>{
        if (erro){
            return res.status(500).json({
                erro: "Error ao listar musicas"
            });
        }
        if(resultado.length === 0){
            return res.status(400).json({
                erro: "Musica não encontrado"
            });
        }
        res.status(200).json(resultado[0]);
    });
});
app.post("/musicas", (req, res) =>{
    const {nome, genero, pais} = req.body;

    const sql = `INSERT INTO artistas (nome, genero, pais) VALUES(?, ?, ?)`;
});

app.get("/musicas", (req, res) =>{
    const sql = "SELECT * FROM artistas";

    conexao.query(sql,[nome, genero, pais] , (erro, resultado) =>{
        if (erro){
            return res.status(500).json({
                erro: "Error ao listar musicas"
            });
        }

        res.status(201).json({
            mensagem: "Musica cadastrado com sucesso",
            id: resultado,insertId
        });
    });
});

app.delete("/musicas/:id", (req, res) =>{
    const id = Number(req.params.id);
    
    const sql = `DELETE FROM musicas WHERE id = ?`;

    conexao.query(sql,[id],(erro, resultado) =>{
        if(erro){
            return res.status(500).json({
                erro: "Erro ao excluir musica."
            });
        }
        if(resultado.affectedRows === 0){
            return res.status(404).json({
                msg: "Musica não encontrado."
            });
        }
        res.status(200).json({msg: "Musica excluido com sucesso"})
    });
});

app.put("/musicas/:id", (req,res) =>{
    const id = Number(req.params.id);
    const {nome, genero, pais} = req.body;

    if (!nome || !genero || !pais) {
        return res.status(400).json({msg: "Insira nome, genero e pais com um ID valido."})
    }

    const sql = "UPDATE artistas SET nome =? ,genero = ?,pais = ? WHERE id = ?"

    conexao.query(sql,[nome, genero,pais, id], (erro, resultado) =>{
        if(erro){
            return res.status(500).json({erro: "Erro ao atualizar musica."});
        }
         if(resultado.affectedRows === 0){
            return res.status(404).json({erro: "musica não encontrado."});
        }
        res.json({msg: "musica atualizado com sucesso"});
    });

});

app.listen(PORTA, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
