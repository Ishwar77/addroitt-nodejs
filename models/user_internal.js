"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var UserInternal = function (uinternal) {
  this.iduser_internal = uinternal.iduser_internal;
  this.first_name = uinternal.first_name;
  this.middle_name = uinternal.middle_name;
  this.last_name = uinternal.last_name;
  this.designation = uinternal.designation;
  this.idrole = uinternal.idrole;
  this.user_name = uinternal.user_name;
  this.password = uinternal.password;
  this.address_1 = uinternal.address_1;
  this.address_2 = uinternal.address_2;
  this.idcountry = uinternal.idcountry;
  this.idstate = uinternal.idstate;
  this.iddistrict = uinternal.iddistrict;
  this.idcity = uinternal.idcity;
  this.mobile_1 = uinternal.mobile_1;
  this.mobile_2 = uinternal.mobile_2;
  this.email_work = uinternal.email_work;
  this.email_official = uinternal.email_official;
  this.date_joining = uinternal.date_joining;
  this.date_retired = uinternal.date_retired;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

UserInternal.create = function (newUinternal, result) {
  dbConn.query("INSERT INTO user_internal set ?", newUinternal, function (
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

UserInternal.findById = function (iduser_internal, result) {
  dbConn.query(
    "Select * from user_internal where iduser_internal = ? ",
    iduser_internal,
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

UserInternal.findAll = function (result) {
  dbConn.query("Select * from user_internal", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("UserInternal : ", res);
      result(null, res);
    }
  });
};

UserInternal.update = function (iduser_internal, uinternal, result) {
  dbConn.query(
    "UPDATE user_internal SET first_name=?, middle_name=?, last_name=?, designation=?, user_name=?, password=?, address_1=?, address_2=?, mobile_1=?, mobile_2=?, email_work=?, email_official=?, date_joining=?, date_retired=?",
    [uinternal.first_name, uinternal.middle_name, uinternal.last_name, uinternal.designation, uinternal.user_name,
        uinternal.password, uinternal.address_1, uinternal.address_2, uinternal.mobile_1, uinternal.mobile_2,
        uinternal.email_work, uinternal.email_official, uinternal.date_joining, uinternal.date_retired, iduser_internal],
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

UserInternal.delete = function (iduser_internal, result) {
  dbConn.query(
    "DELETE FROM user_internal WHERE iduser_internal = ?",
    [iduser_internal],
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

module.exports = UserInternal;
