"use strict";
const UserInternal = require("../models/user_internal");

exports.findAll = function (req, res) {
    UserInternal.findAll(function (err, uinternal) {
    if (err) res.send(err);
    console.log("res", uinternal);
    res.send(uinternal);
  });
};

exports.create = function (req, res) {
  const new_uinternal = new UserInternal(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    UserInternal.create(new_uinternal, function (err, uinternal) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "UserInternal added successfully!",
        data: uinternal,
      });
    });
  }
};

exports.findById = function (req, res) {
    UserInternal.findById(req.params.iduser_internal, function (
    err,
    uinternal
  ) {
    if (err) res.send(err);
    res.json(uinternal);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    UserInternal.update(
      req.params.iduser_internal,
      new UserInternal(req.body),
      function (err, uinternal) {
        if (err) res.send(err);
        res.json({ error: false, message: "UserInternal successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    UserInternal.delete(req.params.iduser_internal, function (err, uinternal) {
    if (err) res.send(err);
    res.json({ error: false, message: "UserInternal successfully deleted" });
  });
};
