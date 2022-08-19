const express = require("express");
const { admin_login } = require("../controllers/admin_login.controller");
const router = express.Router();

router.post("/auth/admin-login", admin_login);

module.exports = router;