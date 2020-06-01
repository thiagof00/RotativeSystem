const express = require('express')
const app = express()
const supervisor = require("./routes/supervisor")
const public = require("./routes/public")
const handlebars = require("express-handlebars")
const bodyparser = require("body-parser")
const path = require ("path")
const dataUser = require("./models/model")

//config
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
///////////////////////
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

///////////////////////
app.use(express.static(path.join(__dirname, "public")))


/////////////////////////
app.get("/", (req, res)=>{
    res.send("principal")
})

// rotas ///////
app.use('/supervisor', supervisor)
app.use("/public", public)

const PORT =8081
app.listen(PORT, () => {
console.log("servidor rodando")
})