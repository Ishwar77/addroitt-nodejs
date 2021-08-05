"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var JobProfile = function (jprofile) {
  this.idjob_profile = jprofile.idjob_profile;
  this.job_profilecol = jprofile.job_profilecol;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};
JobProfile.create = function (newJprofile, result) {
  dbConn.query("INSERT INTO job_profile set ?", newJprofile, function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

JobProfile.findById = function (idjob_profile, result) {
  dbConn.query(
    "Select * from job_profile where idjob_profile = ? ",
    idbusiness_sector,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

JobProfile.findAll = function (result) {
  dbConn.query("Select * from job_profile", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("job_profile : ", res);
      result(null, res);
    }
  });
};

JobProfile.update = function (idjob_profile, jprofile, result) {
  dbConn.query(
    "UPDATE job_profile SET job_profilecol=?",
    [jprofile.job_profilecol, idjob_profile],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

JobProfile.delete = function (idjob_profile, result) {
  dbConn.query(
    "DELETE FROM job_profile WHERE idjob_profile = ?",
    [idjob_profile],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = JobProfile;
