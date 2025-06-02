var express = require("express");
var router = express.Router();

var bibliotecaController = require("../controllers/bibliotecaController");

router.get("/buscarCards", function (req, res) {
    bibliotecaController.buscarCards(req, res);
});

module.exports = router;