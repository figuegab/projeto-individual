var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscarDadosGraficoBarra", function (req, res) {
    dashboardController.buscarDadosGraficoBarra(req, res);
});

module.exports = router;