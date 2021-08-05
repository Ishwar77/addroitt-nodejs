const express = require("express");
const router = express.Router();
const userInternalController = require("../controllers/user_internal");

router.get("/", userInternalController.findAll);

router.post("/", userInternalController.create);

router.get("/:idbusiness_sector", userInternalController.findById);

router.put("/:idbusiness_sector", userInternalController.update);

router.delete("/:idbusiness_sector", userInternalController.delete);

module.exports = router;
