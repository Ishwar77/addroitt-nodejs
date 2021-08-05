const express = require("express");
const router = express.Router();
const idocController = require("../controllers/identification_doc");

router.get("/", idocController.findAll);

router.post("/", idocController.create);

router.get("/:ididetification_doc_type", idocController.findById);

router.put("/:ididetification_doc_type", idocController.update);

router.delete("/:ididetification_doc_type", idocController.delete);

module.exports = router;
