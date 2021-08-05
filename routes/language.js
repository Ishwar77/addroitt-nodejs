const express = require("express");
const router = express.Router();
const languageController = require("../controllers/language");

router.get("/", languageController.findAll);

router.post("/", languageController.create);

router.get("/:idlanguage", languageController.findById);

router.put("/:idlanguage", languageController.update);

router.delete("/:idlanguage", languageController.delete);

module.exports = router;
