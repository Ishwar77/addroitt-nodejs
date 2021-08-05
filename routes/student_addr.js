const express = require("express");
const router = express.Router();
const sAddressController = require("../controllers/student_addr");

router.get("/", sAddressController.findAll);

router.post("/", sAddressController.create);

router.get("/:idstudent_address_map", sAddressController.findById);

router.put("/:idstudent_address_map", sAddressController.update);

router.delete("/:idstudent_address_map", sAddressController.delete);

module.exports = router;
