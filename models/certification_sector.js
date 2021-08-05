"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var CertificationSector = function (csector) {
  this.idcertification_sector_map = csector.idcertification_sector_map;
  this.idcertification = csector.idcertification;
  this.idbusiness_sector = csector.idbusiness_sector;
};

CertificationSector.create = function (newCsector, result) {
  dbConn.query(
    "INSERT INTO certification_sector_map set ?",
    newCsector,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res.insertId);
      }
    }
  );
};

CertificationSector.findById = function (idcertification_sector_map, result) {
  dbConn.query(
    "Select * from certification_sector_map where idcertification_sector_map = ? ",
    idcertification_sector_map,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

CertificationSector.findAll = function (result) {
  dbConn.query("Select * from certification_sector_map", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("certification_sector_map : ", res);
      result(null, res);
    }
  });
};

// CertificationSector.update = function (
//   certification_sector_map,
//   csector,
//   result
// ) {
//   dbConn.query(
//     "UPDATE business_sector SET business_sector=?",
//     [csector.business_sector, idbusiness_sector],
//     function (err, res) {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//       } else {
//         result(null, res);
//       }
//     }
//   );
// };

CertificationSector.delete = function (idcertification_sector_map, result) {
  dbConn.query(
    "DELETE FROM certification_sector_map WHERE idcertification_sector_map = ?",
    [idcertification_sector_map],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = CertificationSector;
