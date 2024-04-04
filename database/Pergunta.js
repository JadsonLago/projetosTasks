const Sequelize = require("sequelize");
const connection = require("./database");

//Criando o Model -> Tabela no Banco de Dados

const Pergunta = connection.define("pergunta", {
    // Model attributes are defined here
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});


/*Pergunta.sync({force:false}).then(() => {
    console.log("Tabela criada com sucesso");
}).catch((erro) => {
    console.log(erro);
});*/

/**
 * @function Pergunta.sync() 
 * Sincroniza o model com db para criação da tabela. 
 * @param {force:false}
 *  Informa que não deve forçar a criação da tabela, caso já haja uma tabela com o mesmo nome no banco de dados.
 */

module.exports = Pergunta;
