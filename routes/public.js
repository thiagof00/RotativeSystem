const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    res.render("public")
})

router.get("/login", (req, res) =>{
    res.render("users/login")
})
router.get("/home", (req, res)=>{
    res.send("pagina home")
})
router.get("/cad", (req, res)=>{
    res.send("pagina de cadastro")
})

module.exports = router