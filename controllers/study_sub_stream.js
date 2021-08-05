"use strict";
const StudySubStream = require("../models/study_sub_stream");

exports.findAll = function (req, res) {
    StudySubStream.findAll(function (err, studysubstream) {
    if (err) res.send(err);
    console.log("res", studysubstream);
    res.send(studysubstream);
  });
};

exports.create = function (req, res) {
  const new_studysubstream = new StudySubStream(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudySubStream.create(new_studysubstream, function (err, studysubstream) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "StudySubStream added successfully!",
        data: studysubstream,
      });
    });
  }
};

exports.findById = function (req, res) {
    StudySubStream.findById(req.params.idstudy_sub_stream, function (
    err,
    studysubstream
  ) {
    if (err) res.send(err);
    res.json(studysubstream);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudySubStream.update(
      req.params.idstudy_sub_stream,
      new StudySubStream(req.body),
      function (err, studysubstream) {
        if (err) res.send(err);
        res.json({ error: false, message: "StudySubStream successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    StudySubStream.delete(req.params.idstudy_sub_stream, function (err, studysubstream) {
    if (err) res.send(err);
    res.json({ error: false, message: "StudySubStream successfully deleted" });
  });
};
