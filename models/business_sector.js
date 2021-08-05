"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var BusinessSector = function (business) {
  this.idbusiness_sector = business.idbusiness_sector;
  this.business_sector = business.business_sector;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

BusinessSector.create = function (newBusiness, result) {
  dbConn.query("INSERT INTO business_sector set ?", newBusiness, function (
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

BusinessSector.findById = function (idbusiness_sector, result) {
  dbConn.query(
    "Select * from business_sector where idbusiness_sector = ? ",
    idbusiness_sector,
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

BusinessSector.findAll = function (result) {
  dbConn.query("Select * from business_sector", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

BusinessSector.update = function (idbusiness_sector, business, result) {
  dbConn.query(
    "UPDATE business_sector SET business_sector=?",
    [business.business_sector, idbusiness_sector],
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

BusinessSector.delete = function (idbusiness_sector, result) {
  dbConn.query(
    "DELETE FROM business_sector WHERE idbusiness_sector = ?",
    [idbusiness_sector],
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
module.exports = BusinessSector;
