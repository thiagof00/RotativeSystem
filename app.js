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








// routes supervisor/////////////
app.get("/supervisor", (req, res)=>{
    res.render("supervisor.html")
})


////////////////////
const PORT =8081
app.listen(PORT, () => {
console.log("servidor rodando")
})