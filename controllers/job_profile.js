"use strict";
const JobProfile = require("../models/job_profile");

exports.findAll = function (req, res) {
    JobProfile.findAll(function (err, jprofile) {
    if (err) res.send(err);
    console.log("res", jprofile);
    res.send(jprofile);
  });
};

exports.create = function (req, res) {
  const new_jprofile = new JobProfile(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    JobProfile.create(new_jprofile, function (err, jprofile) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "JobProfile added successfully!",
        data: jprofile,
      });
    });
  }
};

exports.findById = function (req, res) {
    JobProfile.findById(req.params.idjob_profile, function (
    err,
    jprofile
  ) {
    if (err) res.send(err);
    res.json(jprofile);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    JobProfile.update(
      req.params.idjob_profile,
      new JobProfile(req.body),
      function (err, jprofile) {
        if (err) res.send(err);
        res.json({ error: false, message: "JobProfile successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    JobProfile.delete(req.params.idjob_profile, function (err, jprofile) {
    if (err) res.send(err);
    res.json({ error: false, message: "JobProfile successfully deleted" });
  });
};
