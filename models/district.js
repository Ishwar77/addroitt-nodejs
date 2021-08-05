"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var District = function (district) {
  this.iddistrict = district.iddistrict;
  this.idcountry = district.idcountry;
  this.idstate = district.idstate;
  this.district = district.district;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};
District.create = function (newDistrict, result) {
  dbConn.query("INSERT INTO district set ?", newDistrict, function (
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

District.findById = function (iddistrict, result) {
  dbConn.query(
    "Select * from district where iddistrict = ? ",
    iddistrict,
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

District.findAll = function (result) {
  dbConn.query("Select * from district", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("district : ", res);
      result(null, res);
    }
  });
};

District.update = function (iddistrict, district, result) {
  dbConn.query(
    "UPDATE district SET business_sector=?",
    [district.district, iddistrict],
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

District.delete = function (iddistrict, result) {
  dbConn.query(
    "DELETE FROM district WHERE iddistrict = ?",
    [iddistrict],
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
module.exports = District;
