"use strict";
const StudentAddr = require("../models/student_addr");

exports.findAll = function (req, res) {
    StudentAddr.findAll(function (err, saddress) {
    if (err) res.send(err);
    console.log("res", saddress);
    res.send(saddress);
  });
};

exports.create = function (req, res) {
  const business_sector = new StudentAddr(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudentAddr.create(business_sector, function (err, saddress) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "StudentAddr added successfully!",
        data: saddress,
      });
    });
  }
};

exports.findById = function (req, res) {
    StudentAddr.findById(req.params.idstudent_address_map, function (
    err,
    saddress
  ) {
    if (err) res.send(err);
    res.json(saddress);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    StudentAddr.update(
      req.params.idstudent_address_map,
      new StudentAddr(req.body),
      function (err, saddress) {
        if (err) res.send(err);
        res.json({ error: false, message: "StudentAddr successfully updated" });
      }
    );
  }
};

exports.delete = function (req, res) {
    StudentAddr.delete(req.params.idstudent_address_map, function (err, saddress) {
    if (err) res.send(err);
    res.json({ error: false, message: "StudentAddr successfully deleted" });
  });
};
