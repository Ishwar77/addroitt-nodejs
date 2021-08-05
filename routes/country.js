const express = require("express");
const router = express.Router();
const countryController = require("../controllers/country");

router.get("/", countryController.findAll);

router.post("/", countryController.create);

router.get("/:idcountry", countryController.findById);

router.put("/:idcountry", countryController.update);

router.delete("/:idcountry", countryController.delete);

module.exports = router;
