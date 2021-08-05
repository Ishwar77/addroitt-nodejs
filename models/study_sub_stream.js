"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var StudySubStream = function (studysubstream) {
  this.idstudy_sub_stream = studysubstream.idstudy_sub_stream;
  this.idstudy_stream = studysubstream.idstudy_stream;
  this.study_sub_stream = studysubstream.study_sub_stream;
  this.notes = studysubstream.notes;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

StudySubStream.create = function (newStudySubStream, result) {
  dbConn.query("INSERT INTO study_sub_stream set ?", newStudySubStream, function (
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

StudySubStream.findById = function (idstudy_sub_stream, result) {
  dbConn.query(
    "Select * from study_sub_stream where idstudy_sub_stream = ? ",
    idstudy_sub_stream,
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

StudySubStream.findAll = function (result) {
  dbConn.query("Select * from study_sub_stream", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("StudySubStream : ", res);
      result(null, res);
    }
  });
};

StudySubStream.update = function (idstudy_sub_stream, studysubstream, result) {
  dbConn.query(
    "UPDATE study_sub_stream SET study_sub_stream=?",
    [studysubstream.study_sub_stream, idstudy_sub_stream],
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

StudySubStream.delete = function (idstudy_sub_stream, result) {
  dbConn.query(
    "DELETE FROM study_sub_stream WHERE idstudy_sub_stream = ?",
    [idstudy_sub_stream],
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
module.exports = StudySubStream;
