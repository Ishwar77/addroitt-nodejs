"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var State = function (state) {
  this.idstate = state.idstate;
  this.idcountry = state.idcountry;
  this.state = state.state;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

State.create = function (newState, result) {
  dbConn.query("INSERT INTO state set ?", newState, function (
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

State.findById = function (idstate, result) {
  dbConn.query(
    "Select * from state where idstate = ? ",
    idstate,
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

State.findAll = function (result) {
  dbConn.query("Select * from state", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("state : ", res);
      result(null, res);
    }
  });
};

State.update = function (idstate, state, result) {
  dbConn.query(
    "UPDATE state SET state=?",
    [state.state, idstate],
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

State.delete = function (idstate, result) {
  dbConn.query(
    "DELETE FROM state WHERE idstate = ?",
    [idstate],
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
module.exports = State;
