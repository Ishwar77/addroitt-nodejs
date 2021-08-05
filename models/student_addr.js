"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var StudentAddr = function (saddress) {
  this.idstudent_address_map = saddress.idstudent_address_map;
  this.idstudent_details = saddress.idstudent_details;
  this.permenant_address_1 = saddress.permenant_address_1;
  this.permanant_address_2 = saddress.permanant_address_2;
  this.idcountry_permanant = saddress.idcountry_permanant;
  this.idstate_permanant = saddress.idstate_permanant;
  this.iddistrict_permanant = saddress.iddistrict_permanant;
  this.idcity_permanant = saddress.idcity_permanant;
  this.pincode_permanant = saddress.pincode_permanant;
  this.address_current_location = saddress.address_current_location;
  this.address_current_location_2 = saddress.address_current_location_2;
  this.idcountry_cl = saddress.idcountry_cl;
  this.idstate_cl = saddress.idstate_cl;
  this.iddistrict_cl = saddress.iddistrict_cl;
  this.idcity_cl = saddress.idcity_cl;
  this.pincode_cl = saddress.pincode_cl;
};

StudentAddr.create = function (newSaddress, result) {
  dbConn.query("INSERT INTO student_address_map set ?", newSaddress, function (
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

StudentAddr.findById = function (idstudent_address_map, result) {
  dbConn.query(
    "Select * from student_address_map where idstudent_address_map = ? ",
    idstudent_address_map,
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

StudentAddr.findAll = function (result) {
  dbConn.query("Select * from student_address_map", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("student_address_map : ", res);
      result(null, res);
    }
  });
};

StudentAddr.update = function (idstudent_address_map, saddress, result) {
  dbConn.query(
    "UPDATE student_address_map SET permenant_address_1=?, permanant_address_2=?, pincode_permanant=?, address_current_location=?, address_current_location_2=?, pincode_cl=?",
    [saddress.permenant_address_1, saddress.permanant_address_2, saddress.pincode_permanant, saddress.address_current_location,
        saddress.address_current_location_2, saddress.pincode_cl, idstudent_address_map],
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

StudentAddr.delete = function (idstudent_address_map, result) {
  dbConn.query(
    "DELETE FROM student_address_map WHERE idstudent_address_map = ?",
    [idstudent_address_map],
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
module.exports = StudentAddr;
