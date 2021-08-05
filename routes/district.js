const express = require("express");
const router = express.Router();
const districtController = require("../controllers/district");

router.get("/", districtController.findAll);

router.post("/", districtController.create);

router.get("/:iddistrict", districtController.findById);

router.put("/:iddistrict", districtController.update);

router.delete("/:iddistrict", districtController.delete);

module.exports = router;
