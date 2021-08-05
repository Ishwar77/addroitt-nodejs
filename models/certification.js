"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var Certification = function (certification) {
  this.idcertification = certification.idcertification;
  this.certification = certification.certification;
  this.notes = certification.notes;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

Certification.create = function (newCertificate, result) {
  dbConn.query("INSERT INTO certification set ?", newCertificate, function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Certification.findById = function (idcertification, result) {
  dbConn.query(
    "Select * from certification where idcertification = ? ",
    idcertification,
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

Certification.findAll = function (result) {
  dbConn.query("Select * from certification", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("certificate : ", res);
      result(null, res);
    }
  });
};

Certification.update = function (idcertification, certificate, result) {
  dbConn.query(
    "UPDATE certification SET certification=?, notes=?",
    [certificate.certification, certificate.notes, idcertification],
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

Certification.delete = function (idcertification, result) {
  dbConn.query(
    "DELETE FROM certification WHERE idcertification = ?",
    [idcertification],
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
module.exports = Certification;
