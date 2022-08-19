const express = require("express");
const {
  admins_update,
  admins_delete,
  admins,
  admin,
} = require("../controllers/admins.controller");
const router = express.Router();

router.get("/admins/", admins);
router.get("/admins/admin", admin);
router.put("/admins/update", admins_update);
router.delete("/admins/delete", admins_delete)

module.exports = router;