const express = require("express");
const router = express.Router();
const businessSectorController = require("../controllers/business_sector");

router.get("/", businessSectorController.findAll);

router.post("/", businessSectorController.create);

router.get("/:idbusiness_sector", businessSectorController.findById);

router.put("/:idbusiness_sector", businessSectorController.update);

router.delete("/:idbusiness_sector", businessSectorController.delete);

module.exports = router;
