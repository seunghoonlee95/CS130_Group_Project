const express = require("express");
const router = express.Router();
const sendGrid = require("../../config/sendMail.js");

router.post("/notifyTaskTaken", async (req, res) => {
  const msg_customer = {
    to: req.body.customeremail,
    from: "bruinpal.ucla@gmail.com",
    subject: "Tasker Found",
    text: "A tasker has selected your task. Please log in and make contact!",
    html: "<strong>A tasker has selected your task. Please log in and make contact!</strong>",
  };
  const msg_tasker = {
    to: req.body.taskeremail,
    from: "bruinpal.ucla@gmail.com",
    subject: "Task Selected",
    text: "Please contact the purschaser!",
    html: "<strong>Please contact the purschaser</strong>",
  };
  try {
    await sendGrid.notifyTaskTaken(msg_customer, msg_tasker);
    res.status(200).json({ msg: "Success" });
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

module.exports = router;
