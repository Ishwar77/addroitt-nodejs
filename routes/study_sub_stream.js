const express = require("express");
const router = express.Router();
const studySubStreamController = require("../controllers/study_sub_stream");

router.get("/", studySubStreamController.findAll);

router.post("/", studySubStreamController.create);

router.get("/:idstudy_sub_stream", studySubStreamController.findById);

router.put("/:idstudy_sub_stream", studySubStreamController.update);

router.delete("/:idstudy_sub_stream", studySubStreamController.delete);

module.exports = router;
