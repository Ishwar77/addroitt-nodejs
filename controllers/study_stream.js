"use strict";
const StudyStream = require("../models/study_stream");

exports.findAll = function (req, res) {
    StudyStream.findAll(function (err, sstream) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", sstream);
    res.send(sstream);
  });
};

exports.create = function (req, res) {
  const new_sstream = new StudyStream(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudyStream.create(new_sstream, function (err, sstream) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "StudyStream added successfully!",
        data: sstream,
      });
    });
  }
};

exports.findById = function (req, res) {
    StudyStream.findById(req.params.idstudy_stream, function (
    err,
    sstream
  ) {
    if (err) res.send(err);
    res.json(sstream);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudyStream.update(
      req.params.idstudy_stream,
      new StudyStream(req.body),
      function (err, sstream) {
        if (err) res.send(err);
        res.json({ error: false, message: "StudyStream successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    StudyStream.delete(req.params.idstudy_stream, function (err, sstream) {
    if (err) res.send(err);
    res.json({ error: false, message: "StudyStream successfully deleted" });
  });
};
