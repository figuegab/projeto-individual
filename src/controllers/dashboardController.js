var dashboardModel = require("../models/dashboardModel");

function buscarDadosGraficoBarra(req, res) {

  dashboardModel.buscarDadosGraficoBarra().then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os dados para dashboard: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarDadosGraficoBarra,
}