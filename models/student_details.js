"use strict";
var dbConn = require("./../config/db.config");
//Employee object create
var StudentDetails = function (sdetails) {
  this.idstudent_details = sdetails.idstudent_details;
  this.student_name = sdetails.student_name;
  this.profile_image = sdetails.profile_image;
  this.DOB = sdetails.DOB;
  this.gender = sdetails.gender;
  this.email = sdetails.email;
  this.mobile_1 = sdetails.mobile_1;
  this.mobile_2 = sdetails.mobile_2;
  this.password = sdetails.password;
  this.otp = sdetails.otp;
  this.otp_date = new Date();
  this.Preffered_location_1 = sdetails.Preffered_location_1;
  this.Preffered_location_2 = sdetails.Preffered_location_2;
  this.Preffered_location_3 = sdetails.Preffered_location_3;
  this.language_1 = sdetails.language_1;
  this.language_2 = sdetails.language_2;
  this.language_3 = sdetails.language_3;
  this.business_sector_1 = sdetails.business_sector_1;
  this.business_sector_2 = sdetails.business_sector_2;
  this.business_sector_3 = sdetails.business_sector_3;
  this.job_profile_1 = sdetails.job_profile_1;
  this.job_profile_2 = sdetails.job_profile_2;
  this.job_profile_3 = sdetails.job_profile_3;
  this.id_type_1 = sdetails.id_type_1;
  this.id_type_doc = sdetails.id_type_doc;
  this.id_type_2 = sdetails.id_type_2;
  this.id_type_doc_2 = sdetails.id_type_doc_2;
  this.deactivated_by = sdetails.deactivated_by;
  this.create_timestamp = new Date();
  this.update_timestamp = new Date();
};

StudentDetails.create = function (newSDetails, result) {
  dbConn.query("INSERT INTO student_details set ?", newSDetails, function (
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

StudentDetails.findById = function (idstudent_details, result) {
  dbConn.query(
    "Select * from student_details where idstudent_details = ? ",
    idstudent_details,
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

StudentDetails.findStudent = function(idstudent_details, result) {
  dbConn.query(
    "select student_name, mobile_1, state from student_details AS sd INNER JOIN student_address_map AS sam ON sd.idstudent_details = sam.idstudent_details INNER JOIN state AS s ON sam.idstate_cl = s.idstate where sd.idstudent_details= ?",
    idstudent_details,
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

StudentDetails.findAll = function (result) {
  dbConn.query("Select * from student_details", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("student_details : ", res);
      result(null, res);
    }
  });
};


// StudentDetails.update = function (idstudent_details, sdetails, result) {
//   dbConn.query(
//     "UPDATE student_details SET student_name=?, password=?, DOB=?, gender=?, email=?, mobile_1=?, mobile_2=?, Preffered_location_1=?, Preffered_location_2=?, Preffered_location_3=?, language_1=?, language_2=?, language_3=?, business_sector_1=?, business_sector_2=?, business_sector_3=?, job_profile_1=?, job_profile_2=?, job_profile_3=?, id_type_1=?, id_type_2=?, id_type_doc=?, id_type_doc_2=?, deactivated_by=?",
//     [ sdetails.student_name, sdetails.password, sdetails.DOB, sdetails.gender,
//         sdetails.email, sdetails.mobile_1, sdetails.mobile_2, sdetails.Preffered_location_1,
//         sdetails.Preffered_location_2, sdetails.Preffered_location_3, sdetails.language_1,
//         sdetails.language_2, sdetails.language_3, sdetails.business_sector_1, sdetails.business_sector_2,
//         sdetails.business_sector_3, sdetails.job_profile_1, sdetails.job_profile_2, sdetails.job_profile_3,
//         sdetails.id_type_1, sdetails.id_type_2, sdetails.id_type_doc, sdetails.id_type_doc_2, sdetails.deactivated_by, idstudent_details],
//     function (err, res) {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//       } else {
//         result(null, res);
//       }
//     }
//   );
// };

StudentDetails.update = function (idstudent_details, sdetails, result) {
  dbConn.query(
    "UPDATE student_details SET password=? WHERE idstudent_details = ?",
    [ sdetails.password, idstudent_details ],
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

StudentDetails.updateOtp = function (idstudent_details, sdetails, result) {
  dbConn.query(
    "UPDATE student_details SET otp=? WHERE idstudent_details = ?",
    [ sdetails.otp, idstudent_details ],
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

StudentDetails.updateProfile = function (idstudent_details, sdetails, result) {
  dbConn.query(
    "UPDATE student_details SET gender=?, DOB=?, profile_image=? WHERE idstudent_details = ?",
    [ sdetails.gender, sdetails.DOB, sdetails.profile_image, idstudent_details ],
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


StudentDetails.updateProfileThird = function (idstudent_details, sdetails, result) {
  dbConn.query(
    "UPDATE student_details SET Preffered_location_1=?, Preffered_location_2=?, Preffered_location_3=?, language_1=?, language_2=?, language_3=? WHERE idstudent_details = ?",
    [ sdetails.Preffered_location_1, sdetails.Preffered_location_2, sdetails.Preffered_location_3, sdetails.language_1,
      sdetails.language_2, sdetails.language_3, idstudent_details ],
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


StudentDetails.delete = function (idstudent_details, result) {
  dbConn.query(
    "DELETE FROM student_details WHERE idstudent_details = ?",
    [idstudent_details],
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

StudentDetails.getUserByUserEmail = (email, callBack) => {
  dbConn.query(
    "select * from student_details where email = ?",
    [email],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    }
  );
},

// StudentDetails.getUserByUserEmail = function (email, result) {
//   dbConn.query(
//     `Select * from student_details where email = ?`,
//     email,
//     function (err, res) {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//       } else {
//         result(null, res);
//       }
//     }
//   );
// };


module.exports = StudentDetails;
