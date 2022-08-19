const DB = require("../database");
const bcrypt = require("bcryptjs");

exports.admin_login = (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    DB.query(
      "select * from admins where email = ?",
      [email],
      async (err, result) => {
        if (!err) {
          if (result.length) {
            const verified = bcrypt.compareSync(password, result[0].password);
            if (verified) {
              return res.status(200).send({
                message: "Login Successfully!",
                result: result[0],
              });
            } else {
              return res.status(401).send({
                message: "User and password not matched!",
              });
            }
          } else {
            return res.status(404).send({
              message: "No user found!",
            });
          }
        } else {
          return res.status(500).send({
            message: "Something went wrong!",
          });
        }
      }
    );
  } else {
    return res.status(401).send({
      message: "Bad request!",
    });
  }
};
