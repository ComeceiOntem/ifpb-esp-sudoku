let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");

const Tabuleiro = con.define("Tabuleiro",
    {

        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        dificuldade: {
            type: DataTypes.STRING,
            allowNull: false

        }

    }
);

module.exports = Tabuleiro;