let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");

const Usuario = con.define("Usuario",
    {

        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nome: {
            type: DataTypes.STRING,
            allowNull: false

        },

        pontuacao: {
            type: DataTypes.INTEGER

        },

        email: {
            type: DataTypes.STRING,
            allowNull: false

        },

        senha: {
            type: DataTypes.STRING,
            allowNull: false

        }
    }
);

module.exports = Usuario;