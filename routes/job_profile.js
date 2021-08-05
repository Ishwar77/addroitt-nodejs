const express = require("express");
const router = express.Router();
const jProfileController = require("../controllers/job_profile");

router.get("/", jProfileController.findAll);

router.post("/", jProfileController.create);

router.get("/:idjob_profile", jProfileController.findById);

router.put("/:idjob_profile", jProfileController.update);

router.delete("/:idjob_profile", jProfileController.delete);

module.exports = router;
