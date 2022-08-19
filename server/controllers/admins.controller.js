const DB = require("../database");

exports.admins = (req, res) => {
  DB.query("select * from admins", async (err, result) => {
    if (!err) {
      if (result.length) {
        return res.status(200).send({
          message: "admins fetched Successfully!",
          result,
        });
      } else {
        return res.status(404).send({
          message: "No admin found!",
        });
      }
    } else {
      return res.status(500).send({
        message: "Something went wrong!",
      });
    }
  });
};

exports.admin = (req, res) => {
  const {id} = req.query;
  DB.query(`select * from admins where id="${id}"`, async (err, result) => {
    if (!err) {
      if (result.length) {
        return res.status(200).send({
          message: "admin data fetched Successfully!",
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

exports.admins_update = (req, res) => {
  const { id, updated_data } = req.body;
  DB.query(
    `update admins set ? where id="${id}"`,
    {
      ...updated_data,
    },
    (err1, result1) => {
      // insertion status checking
      if (!err1) {
        console.log(result1);
        return res.status(200).send({
          message: `admins info updated successfully of ! ${id}`,
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

exports.admins_delete = (req, res) => {
  const { id } = req.query;

  DB.query(`select * from admins where id="${id}"`, (er, re) => {
    if (!er) {
      console.log(re);
      if (re.length) {
        DB.query(`delete from admins where id="${id}"`, (err1, result1) => {
          // insertion status checking
          if (!err1) {
            console.log(result1);
            return res.status(200).send({
              message: `admins info deleted successfully of ! ${id}`,
            });
          } else {
            return res.status(500).send({
              message: "Something went wrong!",
            });
          }
        });
      } else {
        return res.status(404).send({
          message: "No admin found!",
        });
      }
    } else {
      return res.status(404).send({
        message: "No admin found!",
      });
    }
  });
};
