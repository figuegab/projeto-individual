var database = require("../database/config");

function buscarDadosGraficoBarra() {
  console.log(
    "ACESSEI O DASH  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosGraficoBarra()"
  );
  var instrucaoSql = `
      SELECT 
          j.nome,
          COUNT(c.idComentario) AS qtdComentarios
      FROM 
          Jogos j
      LEFT JOIN 
          Comentario c ON j.idJogo = c.fkJogo
      GROUP BY 
          j.idJogo, j.nome, j.genero, j.descricao
      ORDER BY 
          qtdComentarios DESC
      LIMIT 8;
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarDadosGraficoBarra,
}