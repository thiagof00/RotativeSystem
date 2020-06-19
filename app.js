const express = require('express')
const app = express()
const dataUser = require("./models/model")


//config
///////////////////////
// template engine
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: app,
    noCache: true
})

//habilitando o req.body
app.use(express.urlencoded({extended:true}))



/////////////////////// pasta publica
 app.use(express.static("public"))



///// rotas
app.get("/", (req, res)=>{
    res.send("principal")
})

// routes users///////
app.get("/login", (req, res)=>{
    res.render("login.html")
})
app.get("/cadastro", (req, res)=>{
    res.render("cadastro.html")
})
app.post("/createuser", (req, res)=>{
    dataUser.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        dataNasc: req.body.dataNasc,
        senha: req.body.senha,
// veículo

        placa: req.body.placa,
        modelo: req.body.modelo,
        cor: req.body.cor,
        ano: req.body.ano,
        tipo: req.body.tipo

    }).then(function (){
        res.redirect("/login")
    }).catch(function(err){
        res.send("Houve um erro ao cadastrar você, nos desculpe. :( "+ err)
    })
})








// routes supervisor/////////////
app.get("/supervisor", (req, res)=>{
    res.render("supervisor.html")
})


////////////////////
const PORT =8081
app.listen(PORT, () => {
console.log("servidor rodando na porta 8081")
})