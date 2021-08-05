"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var City = function (city) {
  this.idcity = city.idcity;
  this.idcountry = city.idcountry;
  this.idstate = city.idstate;
  this.iddistrict = city.iddistrict;
  this.city = city.city;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};
City.create = function (newCity, result) {
  dbConn.query("INSERT INTO city set ?", newCity, function (
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

City.findById = function (idcity, result) {
  dbConn.query(
    "Select * from city where idcity = ? ",
    idcity,
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

City.findAll = function (result) {
  dbConn.query("Select * from city", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("city : ", res);
      result(null, res);
    }
  });
};

City.update = function (idcity, city, result) {
  dbConn.query(
    "UPDATE city SET city=?",
    [city.city, idcity],
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

City.delete = function (idcity, result) {
  dbConn.query(
    "DELETE FROM city WHERE idcity = ?",
    [idcity],
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
module.exports = City;
