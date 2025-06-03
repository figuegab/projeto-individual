var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.get("/buscarComentarios", function (req, res) {
    comentariosController.buscarComentarios(req, res);
});

router.post("/criarComentarios/:fkUsuario/:fkJogo", function (req, res) {
    comentariosController.criarComentarios(req, res);
});

module.exports = router;