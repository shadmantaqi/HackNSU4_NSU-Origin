const express = require("express");
const { test } = require("../controllers/test.controller");
const router = express.Router();

router.get("/", test)
router.get("/test", test);

module.exports = router;