const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
//router.use(bodyParser.json());

const userService = require("../../config/firebase");

router.post("/signup", async (req, res) => {
  /*
       #swagger.path = '/api/auth/signup'
       #swagger.method = 'POST'
       #swagger.description = 'Endpoint to sign up new user with Firebase Auth. Will throw error if username or email already has account.
       Note that taskAccepted and taskCreated are initially empty lists and tasker boolean is set to false. Profile Information is also set to empty strings on registration.'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Auth']
       #swagger.parameters['data'] = { in: 'body', description: 'User Data to create an account', schema: { $ref: "#/definitions/UserInfo" },} 

       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/SuccessMessage" },
               description: 'Succesfully added user' 
        } 
       #swagger.responses[400] = { 
               schema: { $ref: "#/definitions/ErrorMessage" },
               description: 'Error in call. Message can be "Sorry, that email is already taken" or "Sorry, that username is already taken"' 
        } 
       #swagger.responses[404] = { 
               schema: { $ref: "#/definitions/ErrorMessage" },
               description: 'Error in connection' 
        }
    */
  const {
    username,
    email,
    password,
    taskAccepted,
    taskCreated,
    tasker,
    profileInformation,
  } = req.body;
  try {
    const isValidUsername = await userService.checkUsername(username);
    if (isValidUsername) {
      const isValidEmail = await userService.checkEmail(email);
      if (isValidEmail) {
        const user = await userService.addUser(email, password);
        await userService.updateUser(email, {
          username,
          email,
          taskAccepted,
          taskCreated,
          tasker,
          profileInformation,
        });
        res.status(200).json({
          userData: {
            username,
            email,
            taskAccepted,
            taskCreated,
            tasker,
            profileInformation,
          },
        });
      } else {
        throw { message: `Sorry, that email is already taken.` };
      }
    } else {
      throw { message: `Sorry, that username is already taken.` };
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/signin", async (req, res) => {
  /*
#swagger.path = '/api/auth/signin'
       #swagger.method = 'POST'
       #swagger.description = 'Endpoint to sign in user with Firebase Auth. Will throw error if username of password is incorrect.
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Auth']
       #swagger.parameters['data'] = { in: 'body', description: 'User email and password', schema: { $ref: "#/definitions/UserLogin" },} 

       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/UserInfo" },
               description: 'Succesfully added user' 
        } 
       #swagger.responses[400] = { 
               schema: { $ref: "#/definitions/ErrorMessage" },
               description: 'Error in call. Message can be "Incorrect Auth Info" or "Other Firebase Error"' 
        } 
       #swagger.responses[404] = { 
               schema: { $ref: "#/definitions/ErrorMessage" },
               description: 'Error in connection' 
        }
  */
  const { email, password } = req.body;
  try {
    const user = await userService.authenticate(email, password);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/signout", async (req, res) => {
  // #swagger.tags = ['Auth']
  //#swagger.path = '/api/auth/signout'
  // #swagger.description = 'Endpoint to sign out user on Firebase Auth. Takes no paramters. '
  /*

  #swagger.responses[200] = { 
    schema: { $ref: "#/definitions/LoggedOutMessage" },
    description: 'Succesfully Signed Out' 
  } 
*/
  try {
    userService.logOut();
    res.status(200).json({ message: "logged out" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
