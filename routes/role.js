const express = require("express");
const router = express.Router();
const roleController = require("../controllers/role");

router.get("/", roleController.findAll);

router.post("/", roleController.create);

router.get("/:idrole", roleController.findById);

router.put("/:idrole", roleController.update);

router.delete("/:idrole", roleController.delete);

module.exports = router;
