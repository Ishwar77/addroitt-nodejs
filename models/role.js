"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var Role = function (role) {
  this.idrole = role.idrole;
  this.role = role.role;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

Role.create = function (newRole, result) {
  dbConn.query("INSERT INTO role set ?", newRole, function (
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

Role.findById = function (idrole, result) {
  dbConn.query(
    "Select * from role where idrole = ? ",
    idrole,
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

Role.findAll = function (result) {
  dbConn.query("Select * from role", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("role : ", res);
      result(null, res);
    }
  });
};

Role.update = function (idrole, role, result) {
  dbConn.query(
    "UPDATE role SET role=?",
    [role.role, idrole],
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

Role.delete = function (idrole, result) {
  dbConn.query(
    "DELETE FROM role WHERE idrole = ?",
    [idrole],
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
module.exports = Role;
