const DB = require("../database");


exports.events_create = (req, res) => {
  const {title, deadline, targeted_amount, raised_amount, description} = req.body;
  DB.query(
    `insert into events set ?`,
    {
        title,
        deadline,
        targeted_amount,
        raised_amount,
        created_at: new Date(),
        description
    },
    (err1, result1) => {
      // insertion status checking
      if (!err1) {
        console.log(result1);
        return res.status(200).send({
          message: "New events info added to list successfully!",
        });
      } else {
        console.log("Error", err1 );
        return res.status(500).send({
          message: "Something went wrong!",
        });
      }
    }
  );
};

exports.events = (req, res) => {
  DB.query("select * from events", async (err, result) => {
    if (!err) {
      if (result.length) {
        return res.status(200).send({
          message: "events fetched Successfully!",
          result,
        });
      } else {
        return res.status(404).send({
          message: "No events found!",
        });
      }
    } else {
      return res.status(500).send({
        message: "Something went wrong!",
      });
    }
  });
};



exports.events_update = (req, res) => {
  const {id, updated_data} = req.body;
  DB.query(
    `update events set ? where id="${id}"`,
    {
      ...updated_data
    },
    (err1, result1) => {
      // insertion status checking
      if (!err1) {
        console.log(result1);
        return res.status(200).send({
          message: `events info updated successfully of ! ${id}`,
        });
      } else {
        console.log("Error", err1 );
        return res.status(500).send({
          message: "Something went wrong!",
        });
      }
    }
  );
};

exports.events_delete = (req, res) => {
  const {id} = req.body;
  DB.query(
    `delete from events where id="${id}"`,
    (err1, result1) => {
      // insertion status checking
      if (!err1) {
        console.log(result1);
        return res.status(200).send({
          message: `events info deleted successfully of ! ${id}`,
        });
      } else {
        console.log("Error", err1 );
        return res.status(500).send({
          message: "Something went wrong!",
        });
      }
    }
  );
};
