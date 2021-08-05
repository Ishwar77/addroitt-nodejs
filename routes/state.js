const express = require("express");
const router = express.Router();
const stateController = require("../controllers/state");

router.get("/", stateController.findAll);

router.post("/", stateController.create);

router.get("/:idstate", stateController.findById);

router.put("/:idstate", stateController.update);

router.delete("/:idstate", stateController.delete);

module.exports = router;
