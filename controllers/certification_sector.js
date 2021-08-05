"use strict";
const CertificationSector = require("../models/certification_sector");

exports.findAll = function (req, res) {
  CertificationSector.findAll(function (err, csector) {
    if (err) res.send(err);
    console.log("res", csector);
    res.send(csector);
  });
};

exports.create = function (req, res) {
  const certification_sector = new CertificationSector(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    CertificationSector.create(certification_sector, function (err, csector) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "business added successfully!",
        data: csector,
      });
    });
  }
};

exports.findById = function (req, res) {
  CertificationSector.findById(req.params.idcertification_sector_map, function (
    err,
    csector
  ) {
    if (err) res.send(err);
    res.json(csector);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    CertificationSector.update(
      req.params.idcertification_sector_map,
      new CertificationSector(req.body),
      function (err, csector) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "csector successfully updated",
        });
      }
    );
  }
};

exports.delete = function (req, res) {
  CertificationSector.delete(req.params.idcertification_sector_map, function (
    err,
    csector
  ) {
    if (err) res.send(err);
    res.json({ error: false, message: "csector successfully deleted" });
  });
};
