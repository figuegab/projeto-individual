var database = require("../database/config");

function buscarComentarios() {
    console.log(
        "ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarComentarios()"
    );
    var instrucaoSql = `
        SELECT 
            j.nome AS nome_jogo,
            c.descricao AS comentario,
            u.nome AS autor,
            u.gamertag AS gamertag
        FROM Comentario c
        JOIN Usuario u ON c.fkUsuario = u.idUsuario
        JOIN Jogos j ON c.fkJogo = j.idJogo
        ORDER BY c.idComentario DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarComentarios(descricao, fkUsuario, fkJogo) {
    console.log(
        "ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function criarComentarios()"
    );
    var instrucaoSql = `
        INSERT INTO Comentario (descricao, fkUsuario, fkJogo) VALUES
        ('${descricao}', ${fkUsuario}, ${fkJogo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarComentarios, criarComentarios
}