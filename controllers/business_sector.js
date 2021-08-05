"use strict";
const BusinessSector = require("../models/business_sector");

exports.findAll = function (req, res) {
  BusinessSector.findAll(function (err, business) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", business);
    res.send(business);
  });
};

exports.create = function (req, res) {
  const business_sector = new BusinessSector(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    BusinessSector.create(business_sector, function (err, business) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "business added successfully!",
        data: business,
      });
    });
  }
};

exports.findById = function (req, res) {
  BusinessSector.findById(req.params.idbusiness_sector, function (
    err,
    business
  ) {
    if (err) res.send(err);
    res.json(business);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    BusinessSector.update(
      req.params.idbusiness_sector,
      new BusinessSector(req.body),
      function (err, business) {
        if (err) res.send(err);
        res.json({ error: false, message: "business successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
  BusinessSector.delete(req.params.idbusiness_sector, function (err, business) {
    if (err) res.send(err);
    res.json({ error: false, message: "business successfully deleted" });
  });
};
