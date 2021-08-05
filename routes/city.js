const express = require("express");
const router = express.Router();
const cityController = require("../controllers/city");

router.get("/", cityController.findAll);

router.post("/", cityController.create);

router.get("/:idcity", cityController.findById);

router.put("/:idcity", cityController.update);

router.delete("/:idcity", cityController.delete);

module.exports = router;
