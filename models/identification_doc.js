"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var IdentificationDoc = function (idoc) {
  this.ididetification_doc_type = idoc.ididetification_doc_type;
  this.identification_doc_name = idoc.identification_doc_name;
};

IdentificationDoc.create = function (newIdoc, result) {
  dbConn.query("INSERT INTO identification_doc_type set ?", newIdoc, function (
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

IdentificationDoc.findById = function (ididetification_doc_type, result) {
  dbConn.query(
    "Select * from identification_doc_type where ididetification_doc_type = ? ",
    ididetification_doc_type,
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

IdentificationDoc.findAll = function (result) {
  dbConn.query("Select * from identification_doc_type", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("idoc : ", res);
      result(null, res);
    }
  });
};

IdentificationDoc.update = function (ididetification_doc_type, idoc, result) {
  dbConn.query(
    "UPDATE identification_doc_type SET identification_doc_name=?",
    [idoc.identification_doc_name, ididetification_doc_type],
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

IdentificationDoc.delete = function (ididetification_doc_type, result) {
  dbConn.query(
    "DELETE FROM identification_doc_type WHERE ididetification_doc_type = ?",
    [ididetification_doc_type],
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
module.exports = IdentificationDoc;
