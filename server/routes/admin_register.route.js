const express = require("express");
const { admin_register } = require("../controllers/admin_register.controller");
const router = express.Router();

router.post("/auth/admin-register", admin_register);

module.exports = router;