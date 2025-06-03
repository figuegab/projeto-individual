var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.get("/buscarComentariosUsuario/:fkUsuario", function (req, res) {
    perfilController.buscarComentariosUsuario(req, res);
});

router.get("/buscarQuantidadeComentarios/:fkUsuario", function (req, res) {
    perfilController.buscarQuantidadeComentarios(req, res);
});

router.get("/buscarJogoMaisComentado/:fkUsuario", function (req, res) {
    perfilController.buscarJogoMaisComentado(req, res);
});

module.exports = router;