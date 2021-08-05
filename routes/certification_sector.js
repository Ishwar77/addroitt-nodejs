const express = require("express");
const router = express.Router();
const CertificationSectorController = require("../controllers/certification_sector");

router.get("/", CertificationSectorController.findAll);

router.post("/", CertificationSectorController.create);

router.get(
  "/:idcertification_sector_map",
  CertificationSectorController.findById
);

router.put(
  "/:idcertification_sector_map",
  CertificationSectorController.update
);

router.delete(
  "/:idcertification_sector_map",
  CertificationSectorController.delete
);

module.exports = router;
