const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let comentarios = [

{
id:1,
usuario:"user1",
avatar:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Lionel_Messi_WC2022.jpg",
texto:"teste"
}

];

app.get("/comentarios",(req,res)=>{

res.json(comentarios);

});

app.post("/comentarios",(req,res)=>{

const {usuario,texto,avatar}=req.body;

if(!usuario || !texto){

return res.status(400).json({erro:"Usuario e texto são obrigatórios"});

}

const novoComentario={

id:comentarios.length+1,
usuario,
avatar: avatar || "https://ui-avatars.com/api/?name="+encodeURIComponent(usuario),
texto

};

comentarios.push(novoComentario);

res.status(201).json(novoComentario);

});

app.listen(PORT,()=>{

console.log(`Servidor rodando em http://localhost:${PORT}`);

});
