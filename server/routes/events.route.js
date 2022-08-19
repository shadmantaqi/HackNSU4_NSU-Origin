const express = require("express");
const {
  events_create,
  events_update,
  events_delete,
  events,
} = require("../controllers/events.controller");
const router = express.Router();

router.get("/events/", events);
router.post("/events/create", events_create);
router.put("/events/update", events_update);
router.delete("/events/delete", events_delete)

module.exports = router;
