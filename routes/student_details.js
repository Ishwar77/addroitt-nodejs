const express = require("express");
const router = express.Router();
const sDetailsController = require("../controllers/student_details");

router.get("/", sDetailsController.findAll);

router.post("/", sDetailsController.create);

router.get("/:idstudent_details", sDetailsController.findById);

router.get("/student/:idstudent_details", sDetailsController.findStudent);

router.put("/:idstudent_details", sDetailsController.update);

router.put("/otp/:idstudent_details", sDetailsController.updateOtp);

router.put("/profile/:idstudent_details", sDetailsController.updateProfile);

router.put("/pthird/:idstudent_details", sDetailsController.updateProfileThird);

router.delete("/:idstudent_details", sDetailsController.delete);

router.post("/login", sDetailsController.login);

module.exports = router;
