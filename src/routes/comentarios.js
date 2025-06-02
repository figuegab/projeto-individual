var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.get("/buscarComentarios", function (req, res) {
    comentariosController.buscarComentarios(req, res);
});

module.exports = router;