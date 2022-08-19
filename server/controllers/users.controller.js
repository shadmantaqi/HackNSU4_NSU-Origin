const e = require("cors");
const DB = require("../database");

exports.users = (req, res) => {
  DB.query("select * from users", async (err, result) => {
    if (!err) {
      if (result.length) {
        return res.status(200).send({
          message: "Users fetched Successfully!",
          result,
        });
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
  });
};

exports.user = (req, res) => {
  const {id} = req.query;
  DB.query(`select * from users where id=${id}`, async (err, result) => {
    if (!err) {
      if (result.length) {
        return res.status(200).send({
          message: "User data fetched Successfully!",
          result,
        });
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
  });
};

// id, username, email, password, fullname, member_type, phone

exports.users_update = (req, res) => {
  const { id, updated_data } = req.body;
  DB.query(
    `update users set ? where id="${id}"`,
    {
      ...updated_data,
    },
    (err1, result1) => {
      // insertion status checking
      if (!err1) {
        console.log(result1);
        return res.status(200).send({
          message: `users info updated successfully of ! ${id}`,
        });
      } else {
        console.log("Error", err1);
        return res.status(500).send({
          message: "Something went wrong!",
        });
      }
    }
  );
};

exports.users_delete = (req, res) => {
  const { id } = req.query;
  DB.query(`select * from users where id="${id}"`, (err, re) => {
    if (!err) {
      if (re.length) {
        DB.query(`delete from users where id="${id}"`, (err1, result1) => {
          // insertion status checking
          if (!err1) {
            console.log(result1);
            return res.status(200).send({
              message: `users info deleted successfully of ! ${id}`,
            });
          } else {
            console.log("Error", err1);
            return res.status(500).send({
              message: "Something went wrong!",
            });
          }
        });
      } else {
        console.log("Error", err);
        return res.status(404).send({
          message: `No user found to delete with this id: ${id}`,
        });
      }
    } else {
      console.log("Error", err);
      return res.status(500).send({
        message: "Something went wrong!",
      });
    }
  });
};
