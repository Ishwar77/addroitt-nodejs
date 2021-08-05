const express = require("express");
const router = express.Router();
const universityController = require("../controllers/university");

router.get("/", universityController.findAll);

router.post("/", universityController.create);

router.get("/:iduniversity", universityController.findById);

router.put("/:iduniversity", universityController.update);

router.delete("/:iduniversity", universityController.delete);

module.exports = router;
