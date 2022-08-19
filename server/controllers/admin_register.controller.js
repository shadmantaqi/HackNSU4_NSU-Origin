const DB = require("../database");
const bcrypt = require("bcryptjs");

exports.admin_register = (req, res) => {
  const { username, email, password, confirm_password } = req.body;
  if (password === confirm_password && password.length >= 8) {
    DB.query(
      `select email from admins where email = ?`,
      [email],
      async (err, result) => {
        if (!err) {
          // we are checking whether this email is in use or not
          if (result.length > 0) {
            return res.status(400).send({
              message: "Email already in use!",
            });
          } else {
            // here we have to create new user

            //hashing password
            let hashedPassword = await bcrypt.hash(password, 8);

            // inserting value in database
            DB.query(
              `insert into admins set ?`,
              {
                username,
                email,
                password: hashedPassword,
                phone,
                address,
                birthday,
                nid,
                social_link,
                created_at: new Date(),
                user_privilege: "admin"
              },
              (err1, result1) => {
                // insertion status checking
                if (!err1) {
                  console.log(result1);
                  return res.status(200).send({
                    message: "User registered successfully!",
                  });
                } else {
                  return res.status(500).send({
                    message: "Something went wrong!",
                  });
                }
              }
            );
          }
        } else {
          return res.status(500).send({
            message: "Something went wrong!",
          });
        }
      }
    );
  } else {
    res.status(401).send({
      message: "Bad request!",
    });
  }
};
