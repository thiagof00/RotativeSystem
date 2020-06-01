const SQL = require('sequelize')

const sequelize = new SQL('RS', 'root', 'thiago1117',{
    host: 'localhost',
    dialect: 'mysql'
})


sequelize.authenticate().then(() =>{
    console.log("conectado ao banco")
}).catch(()=>{
    console.log("não conectado")
})

module.exports = {
    SQL: SQL,
    sequelize: sequelize
}