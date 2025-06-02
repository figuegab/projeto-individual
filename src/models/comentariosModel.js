var database = require("../database/config");

function buscarComentarios() {
    console.log(
        "ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarComentarios()"
    );
    var instrucaoSql = `
        SELECT 
            j.nome AS nomeJogo,
            c.descricao AS comentario,
            u.nome AS autor
        FROM Comentario c
        JOIN Usuario u ON c.fkUsuario = u.idUsuario
        JOIN Jogos j ON c.fkJogo = j.idJogo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarComentarios,
}