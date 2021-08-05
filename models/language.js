"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var Language = function (language) {
  this.idlanguage = language.idlanguage;
  this.language = language.language;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

Language.create = function (newLanguage, result) {
  dbConn.query("INSERT INTO language set ?", newLanguage, function (
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

Language.findById = function (idlanguage, result) {
  dbConn.query(
    "Select * from language where idlanguage = ? ",
    idlanguage,
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

Language.findAll = function (result) {
  dbConn.query("Select * from language", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("language : ", res);
      result(null, res);
    }
  });
};

Language.update = function (idlanguage, language, result) {
  dbConn.query(
    "UPDATE language SET language=?",
    [language.language, idlanguage],
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

Language.delete = function (idlanguage, result) {
  dbConn.query(
    "DELETE FROM language WHERE idlanguage = ?",
    [idlanguage],
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
module.exports = Language;
