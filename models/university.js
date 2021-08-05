"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var University = function (university) {
  this.iduniversity = university.iduniversity;
  this.university_name = university.university_name;
  this.university_status = university.university_status;
  this.notes = university.notes;
  this.idcountry = university.idcountry;
  this.idstate = university.idstate;
  this.iddistrict = university.iddistrict;
  this.idcity = university.idcity;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

University.create = function (newUniversity, result) {
  dbConn.query("INSERT INTO university set ?", newUniversity, function (
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

University.findById = function (iduniversity, result) {
  dbConn.query(
    "Select * from university where iduniversity = ? ",
    iduniversity,
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

University.findAll = function (result) {
  dbConn.query("Select * from university", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("university : ", res);
      result(null, res);
    }
  });
};

University.update = function (iduniversity, university, result) {
  dbConn.query(
    "UPDATE university SET university_name=? university_status=?",
    [university.university_name, university.university_status, iduniversity],
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

University.delete = function (iduniversity, result) {
  dbConn.query(
    "DELETE FROM university WHERE iduniversity = ?",
    [iduniversity],
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
module.exports = University;
