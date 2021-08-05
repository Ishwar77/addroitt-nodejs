"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var Country = function (country) {
  this.idcountry = country.idcountry;
  this.country = country.country;
  this.country_code = country.country_code;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

Country.create = function (newCountry, result) {
  dbConn.query("INSERT INTO country set ?", newCountry, function (
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

Country.findById = function (idcountry, result) {
  dbConn.query(
    "Select * from country where idcountry = ? ",
    idcountry,
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

Country.findAll = function (result) {
  dbConn.query("Select * from country", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("country : ", res);
      result(null, res);
    }
  });
};

Country.update = function (idcountry, country, result) {
  dbConn.query(
    "UPDATE country SET country=?, country_code=?",
    [country.country, country.country_code, idcountry],
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

Country.delete = function (idcountry, result) {
  dbConn.query(
    "DELETE FROM country WHERE idcountry = ?",
    [idcountry],
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
module.exports = Country;
