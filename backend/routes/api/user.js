const e = require("express");
const express = require("express");
const router = express.Router();
const userService = require("../../config/firebase");

//need user email as key
/*
Return given user info by email
*/
router.post("/update", async (req, res) => {
  try {
    const userData = req.body;
    const email = userData.email;
    await userService.updateUser(email, userData);
    res.status(200).json({ message: "Success" });
  } catch (err) {
    res.status(404).json({ error: err.message || err });
  }
});

router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const notExist = await userService.checkEmail(email);
    if (notExist) {
      throw { message: "email not associated with any users" };
    } else {
      const userData = await userService.getUserInfo(email);
      res.status(200).json({ userData });
    }
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

module.exports = router;
