const db = require ('./db')

const dataUser = db.sequelize.define('dataUSer', {
    nome: {
        type: db.SQL.STRING,
        require: true
    },
    sobrenome: {
        type: db.SQL.STRING,
        require: true
    },
    dataNasc:{
            type: db.SQL.DATE,
            require:true
    },
    email:{
        type: db.SQL.STRING,
        require:true
    },
    placa:{
        type: db.SQL.STRING,
        require:true
    },
    modelo:{
        type: db.SQL.STRING,
        require: true
    },
    cor:{
        type: db.SQL.STRING,
        require: true
    }
})

module.exports = dataUser

//dataUser.sync({force: true})