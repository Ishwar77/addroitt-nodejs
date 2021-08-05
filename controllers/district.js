"use strict";
const District = require("../models/district");

exports.findAll = function (req, res) {
    District.findAll(function (err, district) {
    if (err) res.send(err);
    console.log("res", district);
    res.send(district);
  });
};

exports.create = function (req, res) {
  const new_district = new District(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    District.create(new_district, function (err, district) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "District added successfully!",
        data: district,
      });
    });
  }
};

exports.findById = function (req, res) {
    District.findById(req.params.iddistrict, function (
    err,
    district
  ) {
    if (err) res.send(err);
    res.json(district);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    District.update(
      req.params.iddistrict,
      new District(req.body),
      function (err, district) {
        if (err) res.send(err);
        res.json({ error: false, message: "District successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    District.delete(req.params.iddistrict, function (err, district) {
    if (err) res.send(err);
    res.json({ error: false, message: "District successfully deleted" });
  });
};
