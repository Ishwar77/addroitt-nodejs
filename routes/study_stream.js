const express = require("express");
const router = express.Router();
const studyStreamController = require("../controllers/study_stream");

router.get("/", studyStreamController.findAll);

router.post("/", studyStreamController.create);

router.get("/:idstudy_stream", studyStreamController.findById);

router.put("/:idstudy_stream", studyStreamController.update);

router.delete("/:idstudy_stream", studyStreamController.delete);

module.exports = router;
