var database = require("../database/config");

function buscarComentariosUsuario(fkUsuario) {
    console.log(
        "ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarComentariosUsuario()"
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
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY c.idComentario DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarQuantidadeComentarios(fkUsuario) {
    console.log(
        "ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarQuantidadeComentarios()"
    );
    var instrucaoSql = `
        SELECT 
            COUNT(*) AS total_comentarios
        FROM Comentario
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarJogoMaisComentado(fkUsuario) {
    console.log(
        "ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarJogoMaisComentado()"
    );
    var instrucaoSql = `
        SELECT 
            COUNT(c.idComentario) AS total_comentarios,
            j.nome AS nome_jogo
        FROM Comentario c
        JOIN Jogos j ON c.fkJogo = j.idJogo
        WHERE c.fkUsuario = ${fkUsuario}
        GROUP BY j.nome
        ORDER BY total_comentarios DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarComentariosUsuario, buscarQuantidadeComentarios, buscarJogoMaisComentado,
}