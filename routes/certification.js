const express = require("express");
const router = express.Router();
const certificationController = require("../controllers/certification");

router.get("/", certificationController.findAll);

router.post("/", certificationController.create);

router.get("/:idcertification", certificationController.findById);

router.put("/:idcertification", certificationController.update);

router.delete("/:idcertification", certificationController.delete);

module.exports = router;
