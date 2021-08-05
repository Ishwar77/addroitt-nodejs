"use strict";
const State = require("../models/state");

exports.findAll = function (req, res) {
    State.findAll(function (err, state) {
    if (err) res.send(err);
    console.log("res", state);
    res.send(state);
  });
};

exports.create = function (req, res) {
  const new_state = new State(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    State.create(new_state, function (err, business) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "State added successfully!",
        data: business,
      });
    });
  }
};

exports.findById = function (req, res) {
    State.findById(req.params.idstate, function (
    err,
    state
  ) {
    if (err) res.send(err);
    res.json(state);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    State.update(
      req.params.idstate,
      new State(req.body),
      function (err, state) {
        if (err) res.send(err);
        res.json({ error: false, message: "State successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    State.delete(req.params.idstate, function (err, state) {
    if (err) res.send(err);
    res.json({ error: false, message: "State successfully deleted" });
  });
};
