const express = require("express");
const router = express.Router();
const sendGrid = require("../../config/sendMail.js");

router.post("/notifyTaskTaken", async (req, res) => {
  let customer_html = `<p>Hi ${req.body.customername},</p>
    <p>We found a tasker for you! Find the task details below:</p>
    <p>Tasker name: ${req.body.tasker}<br>
    Tasker email: ${req.body.taskeremail}<br>
    Task Description: ${req.body.description}</p>
    <p>Please contact ${req.body.tasker} to organize a meet-up!</p>
    <p>BruinPal</p>`;
  let tasker_html = `<p>Hi ${req.body.tasker},</p>
    <p>You selected a task! Find the task details below:</p>
    <p>Customer name: ${req.body.customername}<br>
    Customer email: ${req.body.customeremail}<br>
    Task Description: ${req.body.description}</p>
    <p>Please contact ${req.body.customername} to organize a meet-up!</p>
    <p>BruinPal</p>`;

  const msg_customer = {
    to: req.body.customeremail,
    from: "bruinpal.ucla@gmail.com",
    subject: "Tasker Found",
    text: "A tasker has selected your task. Please log in and make contact!",
    html: customer_html,
  };

  const msg_tasker = {
    to: req.body.taskeremail,
    from: "bruinpal.ucla@gmail.com",
    subject: "Task Selected",
    text: "Please contact the purchaser!",
    html: tasker_html,
  };
  try {
    await sendGrid.notifyTaskTaken(msg_customer, msg_tasker);
    res.status(200).json({ msg: "Success" });
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

module.exports = router;
