const express = require("express");
const {
  users_update,
  users_delete,
  users,
  user,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/users/", users);
router.get("/users/user", user);
router.put("/users/update", users_update);
router.delete("/users/delete", users_delete)

module.exports = router;
