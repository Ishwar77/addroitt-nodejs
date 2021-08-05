"use strict";
const StudentDetails = require("../models/student_details");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

exports.findAll = function (req, res) {
    StudentDetails.findAll(function (err, sdetails) {
    if (err) res.send(err);
    console.log("res", sdetails);
    res.send(sdetails);
  });
};

exports.create = function (req, res) {
  const new_sdetails = new StudentDetails(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudentDetails.create(new_sdetails, function (err, sdetails) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "StudentDetails added successfully!",
        studentid: sdetails,
      });
    });
  }
};


exports.findById = function (req, res) {
    StudentDetails.findById(req.params.idstudent_details, function (
    err,
    sdetails
  ) {
    if (err) res.send(err);
    res.json(sdetails);
  });
};

exports.findStudent = function (req, res) {
  StudentDetails.findStudent(req.params.idstudent_details, function (
  err,
  sdetails
) {
  if (err) res.send(err);
  res.json(sdetails);
});
};

exports.update = function (req, res) {
  const new_student = new StudentDetails(req.body);
  const salt = genSaltSync(10);
  new_student.password = hashSync(new_student.password, salt);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudentDetails.update(
      req.params.idstudent_details,
      new_student,
      function (err, sdetails) {
        if (err) res.send(err);
        res.json({ error: false, message: "StudentDetails successfully updated" });
      }
    );
  }
};

exports.updateOtp = function (req, res) {
  const new_student = new StudentDetails(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudentDetails.updateOtp(
      req.params.idstudent_details,
      new_student,
      function (err, sdetails) {
        if (err) res.send(err);
        res.json({ error: false, message: "StudentDetails successfully updated" });
      }
    );
  }
};

exports.updateProfile = function (req, res) {
  const new_student = new StudentDetails(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudentDetails.updateProfile(
      req.params.idstudent_details,
      new_student,
      function (err, sdetails) {
        if (err) res.send(err);
        res.json({ error: false, message: "StudentDetails successfully updated" });
      }
    );
  }
};

exports.updateProfileThird = function (req, res) {
  const new_student = new StudentDetails(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudentDetails.updateProfileThird(
      req.params.idstudent_details,
      new_student,
      function (err, sdetails) {
        if (err) res.send(err);
        res.json({ error: false, message: "StudentDetails successfully updated" });
      }
    );
  }
};



exports.delete = function (req, res) {
    StudentDetails.delete(req.params.idstudent_details, function (err, sdetails) {
    if (err) res.send(err);
    res.json({ error: false, message: "StudentDetails successfully deleted" });
  });
};

exports.login = function (req, res) { 
  let fetched_user;
  const body = req.body;
  StudentDetails.getUserByUserEmail(body.email, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.json({
        success: 0,
        data: "please enter email and password"
      });
    }
    fetched_user = results;
    const result = compareSync(body.password, results.password);
    if (result) {
      results.password = undefined;
      const jsontoken = sign({ result: results,
        email: fetched_user.email,
        userid: fetched_user.idstudent_details,
      }, "qwe1234", {
        expiresIn: "1h"
      });
      return res.json({
        success: 1,
        message: "login successfully",
        token: jsontoken,
        expiresIn:3600,
        userid: fetched_user.idstudent_details
      });
    } else {
      return res.json({
        success: 0,
        data: "Invalid email or password"
      });
    }
  });
}
