const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
//router.use(bodyParser.json());

const userService = require('../../config/firebase')

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.addUser(email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

router.post('/signin', async (req, res) => {
  
  const { email, password } = req.body;
  try {
    const user = await userService.authenticate(email, password);
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }

});

router.post('/signout', async (req, res) => {
  userService.logOut().then(() => {
    res.status(201).json({msg: "logged out"})
  }).catch(err => {
    res.status(401).json({ error: err.message })
  })
})


module.exports = router;