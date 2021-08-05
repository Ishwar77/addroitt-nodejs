"use strict";
const Role = require("../models/role");

exports.findAll = function (req, res) {
    Role.findAll(function (err, role) {
    if (err) res.send(err);
    console.log("res", role);
    res.send(role);
  });
};

exports.create = function (req, res) {
  const new_role = new Role(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Role.create(new_role, function (err, role) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Role added successfully!",
        data: role,
      });
    });
  }
};

exports.findById = function (req, res) {
    Role.findById(req.params.idrole, function (
    err,
    role
  ) {
    if (err) res.send(err);
    res.json(role);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Role.update(
      req.params.idrole,
      new Role(req.body),
      function (err, role) {
        if (err) res.send(err);
        res.json({ error: false, message: "Role successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    Role.delete(req.params.idrole, function (err, role) {
    if (err) res.send(err);
    res.json({ error: false, message: "Role successfully deleted" });
  });
};
