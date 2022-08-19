require("dotenv").config();

const express = require("express");
const register = require("./routes/register.route");
const admin_register = require("./routes/admin_register.route");
const login = require("./routes/login.route");
const admin_login = require("./routes/admin_login.route");
const users = require("./routes/users.route");
const test = require("./routes/test.route");
const admins = require("./routes/admins.route");
const events = require("./routes/events.route");
const app = express();
const DB = require("./database");
const PORT = process.env.PORT;
const cors = require("cors");
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST", "PUT", "DELETE"],

  allowedHeaders: ["Content-Type"],
};

// connecting database
DB.connect((err) => {
  if (!err) {
    console.log("MySQL Connected...");
  } else {
    console.log(err);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOpts));
//routes
app.use(register);
app.use(admin_register);
app.use(login);
app.use(admin_login);
app.use(users);
app.use(test);
app.use(admins);
app.use(events);

app.get(test);

app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
