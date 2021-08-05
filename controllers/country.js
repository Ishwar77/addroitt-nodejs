"use strict";
const Country = require("../models/country");

exports.findAll = function (req, res) {
    Country.findAll(function (err, country) {
    if (err) res.send(err);
    console.log("res", country);
    res.send(country);
  });
};

exports.create = function (req, res) {
  const new_country = new Country(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Country.create(new_country, function (err, country) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Country added successfully!",
        data: country,
      });
    });
  }
};

exports.findById = function (req, res) {
    Country.findById(req.params.idcountry, function (
    err,
    country
  ) {
    if (err) res.send(err);
    res.json(country);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Country.update(
      req.params.idcountry,
      new Country(req.body),
      function (err, country) {
        if (err) res.send(err);
        res.json({ error: false, message: "Country successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    Country.delete(req.params.idcountry, function (err, country) {
    if (err) res.send(err);
    res.json({ error: false, message: "Country successfully deleted" });
  });
};
