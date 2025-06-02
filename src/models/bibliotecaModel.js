var database = require("../database/config");

function buscarCards() {
    console.log(
        "ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarCards()"
    );
    var instrucaoSql = `
        SELECT 
            j.nome,
            j.genero,
            j.descricao,
            j.urlImagem,
            COUNT(c.idComentario) AS qtdComentarios
        FROM 
            Jogos j
        LEFT JOIN 
            Comentario c ON j.idJogo = c.fkJogo
        GROUP BY 
            j.idJogo, j.nome, j.genero, j.descricao
        ORDER BY 
            qtdComentarios DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarCards,
}