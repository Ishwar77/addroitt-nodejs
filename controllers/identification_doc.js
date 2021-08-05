"use strict";
const IdentificationDoc = require("../models/identification_doc");

exports.findAll = function (req, res) {
    IdentificationDoc.findAll(function (err, idoc) {
    if (err) res.send(err);
    console.log("res", idoc);
    res.send(idoc);
  });
};

exports.create = function (req, res) {
  const new_idoc = new IdentificationDoc(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    IdentificationDoc.create(new_idoc, function (err, idoc) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "IdentificationDoc added successfully!",
        data: idoc,
      });
    });
  }
};

exports.findById = function (req, res) {
    IdentificationDoc.findById(req.params.ididetification_doc_type, function (
    err,
    idoc
  ) {
    if (err) res.send(err);
    res.json(idoc);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    IdentificationDoc.update(
      req.params.ididetification_doc_type,
      new IdentificationDoc(req.body),
      function (err, idoc) {
        if (err) res.send(err);
        res.json({ error: false, message: "IdentificationDoc successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    IdentificationDoc.delete(req.params.ididetification_doc_type, function (err, idoc) {
    if (err) res.send(err);
    res.json({ error: false, message: "IdentificationDoc successfully deleted" });
  });
};
