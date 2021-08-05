var dbConn = require("./../config/db.config");

var User = function (user) {
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
  };

  User.create = function (newUSer, result) {
    dbConn.query("INSERT INTO user set ?", newUSer, function (
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
  

  User.getUserByUserEmail = (email, callBack) => {
    dbConn.query(
      `select * from user where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  module.exports = User;
