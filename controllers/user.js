"use strict";
const User = require("../models/user");

const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

exports.create = function (req, res) {
    const new_user = new User(req.body);
    const salt = genSaltSync(10);
    new_user.password = hashSync(new_user.password, salt);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res
        .status(400)
        .send({ error: true, message: "Please provide all required field" });
    } else {
        User.create(new_user, function (err, user) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "user added successfully!",
          data: user,
        });
      });
    }
  };

  exports.login = function (req, res) { 
    const body = req.body;
    User.getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "please enter email and password"
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password"
        });
      }
    });
  }
  

