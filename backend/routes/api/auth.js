const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
//router.use(bodyParser.json());

const userService = require('../../config/firebase')

router.post('/signup', async (req, res) => {
  const { username, email, password} = req.body;
  try {
    const isValidUsername = await userService.checkUsername(username)
    if(isValidUsername){
      const isValidEmail = await userService.checkEmail(email);
      if(isValidEmail){
        const user = await userService.addUser(email, password);
        await userService.updateUser(email, {username, email})
        res.status(200).json({username, email})
      } else{
        throw {message: `Sorry, that email is already taken.`}
      }
    } else {
      throw {message: `Sorry, that username is already taken.`}
    }   
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/signin', async (req, res) => {
  
  const { email, password } = req.body;
  try {
    const user = await userService.authenticate(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

});

router.post('/signout', async (req, res) => {
  try{
    userService.logOut()
    res.status(200).json({message: "logged out"})
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})


module.exports = router;