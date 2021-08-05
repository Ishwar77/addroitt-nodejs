"use strict";
const University = require("../models/university");

exports.findAll = function (req, res) {
    University.findAll(function (err, university) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", university);
    res.send(university);
  });
};

exports.create = function (req, res) {
  const new_university = new University(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    University.create(new_university, function (err, university) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "University added successfully!",
        data: university,
      });
    });
  }
};

exports.findById = function (req, res) {
    University.findById(req.params.iduniversity, function (
    err,
    university
  ) {
    if (err) res.send(err);
    res.json(university);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    University.update(
      req.params.iduniversity,
      new University(req.body),
      function (err, university) {
        if (err) res.send(err);
        res.json({ error: false, message: "University successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    University.delete(req.params.iduniversity, function (err, business) {
    if (err) res.send(err);
    res.json({ error: false, message: "University successfully deleted" });
  });
};
