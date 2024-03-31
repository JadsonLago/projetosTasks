const Sequelize = require("sequelize");
const connection = require("./database");

//Criando o Model -> Tabela no Banco de Dados
const Pergunta = connection.define("pergunta",
    {
        // Model attributes are defined here
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    }
);

// Sincronizar e gravar a tabela no banco de dados

/*Pergunta.sync({force:false}).then(() => {
    console.log("Tabela criada com sucesso");
})
.catch((erro) => {
    console.log(erro);
});*/

 /* {force:false} informa que não deve forçar a criação,
caso já haja uma tabela com o mesmo nome no banco de dados.*/
module.exports = Pergunta;