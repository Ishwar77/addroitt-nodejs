"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var StudyStream = function (stream) {
  this.idstudy_stream = stream.idstudy_stream;
  this.study_stream = stream.study_stream;
  this.notes = stream.notes;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

StudyStream.create = function (newSstream, result) {
  dbConn.query("INSERT INTO study_stream set ?", newSstream, function (
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

StudyStream.findById = function (idstudy_stream, result) {
  dbConn.query(
    "Select * from study_stream where idstudy_stream = ? ",
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

StudyStream.findAll = function (result) {
  dbConn.query("Select * from study_stream", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("study_stream : ", res);
      result(null, res);
    }
  });
};

StudyStream.update = function (idstudy_stream, sstream, result) {
  dbConn.query(
    "UPDATE study_stream SET study_stream=?",
    [sstream.study_stream, idstudy_stream],
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

StudyStream.delete = function (idstudy_stream, result) {
  dbConn.query(
    "DELETE FROM study_stream WHERE idstudy_stream = ?",
    [idbusiness_sector],
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
module.exports = StudyStream;
