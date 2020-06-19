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
    cpf:{
        type: db.SQL.STRING,
        require:true
    },
    email:{
        type: db.SQL.STRING,
        require:true
    },
    senha:{
        type: db.SQL.STRING,
        require:true
    }
    ,
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
    },
    ano:{
        type:db.SQL.STRING,
        require: true
    },
    tipo:{
        type:db.SQL.STRING,
        require:true
    }
})

module.exports = dataUser

//dataUser.sync({force: true})