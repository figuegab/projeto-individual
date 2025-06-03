var comentariosModel = require("../models/comentariosModel");

function buscarComentarios(req, res) {

    comentariosModel.buscarComentarios().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os comentarios: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function criarComentarios(req, res) {
    let fkJogo = req.params.fkJogo;
    let fkUsuario = req.params.fkUsuario;
    let descricao = req.body.descricao;

    comentariosModel.criarComentarios(descricao, fkUsuario, fkJogo).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os comentarios: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarComentarios, criarComentarios
}