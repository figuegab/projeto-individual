var perfilModel = require("../models/perfilModel");

function buscarComentariosUsuario(req, res) {
    var fkUsuario = req.params.fkUsuario;
    perfilModel.buscarComentariosUsuario(fkUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o perfil: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarQuantidadeComentarios(req, res) {
    var fkUsuario = req.params.fkUsuario;
    perfilModel.buscarQuantidadeComentarios(fkUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o perfil: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarJogoMaisComentado(req, res) {
    var fkUsuario = req.params.fkUsuario;
    perfilModel.buscarJogoMaisComentado(fkUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o perfil: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarComentariosUsuario, buscarQuantidadeComentarios, buscarJogoMaisComentado,
}