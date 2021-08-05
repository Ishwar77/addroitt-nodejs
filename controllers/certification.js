"use strict";
const Certification = require("../models/certification");

exports.findAll = function (req, res) {
  Certification.findAll(function (err, certificate) {
    if (err) res.send(err);
    console.log("res", certificate);
    res.send(certificate);
  });
};

exports.create = function (req, res) {
  const new_certificate = new Certification(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Certification.create(new_certificate, function (err, certificate) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "certificate added successfully!",
        data: certificate,
      });
    });
  }
};

exports.findById = function (req, res) {
  Certification.findById(req.params.idcertification, function (
    err,
    certificate
  ) {
    if (err) res.send(err);
    res.json(certificate);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Certification.update(
      req.params.idcertification,
      new Certification(req.body),
      function (err, business) {
        if (err) res.send(err);
        res.json({ error: false, message: "certificate successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
  Certification.delete(req.params.idcertification, function (err, certificate) {
    if (err) res.send(err);
    res.json({ error: false, message: "certificate successfully deleted" });
  });
};
