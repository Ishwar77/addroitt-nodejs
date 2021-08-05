"use strict";
const Language = require("../models/language");

exports.findAll = function (req, res) {
    Language.findAll(function (err, language) {
    if (err) res.send(err);
    console.log("res", language);
    res.send(language);
  });
};

exports.create = function (req, res) {
  const new_language = new Language(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Language.create(new_language, function (err, language) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Language added successfully!",
        data: language,
      });
    });
  }
};

exports.findById = function (req, res) {
    Language.findById(req.params.idlanguage, function (
    err,
    language
  ) {
    if (err) res.send(err);
    res.json(language);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Language.update(
      req.params.idlanguage,
      new Language(req.body),
      function (err, language) {
        if (err) res.send(err);
        res.json({ error: false, message: "Language successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    Language.delete(req.params.idlanguage, function (err, language) {
    if (err) res.send(err);
    res.json({ error: false, message: "Language successfully deleted" });
  });
};
