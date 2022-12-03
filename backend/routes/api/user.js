const e = require("express");
const express = require("express");
const router = express.Router();
const userService = require("../../config/firebase");

//need user email as key
/*
Return given user info by email
*/
router.post("/update", async (req, res) => {
  /*
       #swagger.path = '/api/user/update'
       #swagger.method = 'POST'
       #swagger.description = 'Endpoint to update user info in database. Requires user email. Any other userInfo fields can be included if user wnats to update them. Explicit no update alowed of email or username.'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['User']
       #swagger.parameters['userData'] = { in: 'body', description: 'User Information. Email is required, all other fields are optional on update.', schema: { $ref: "#/definitions/UserInfo" } } 
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/SuccessMessage" },
               description: 'Returns success on update user in database' 
        } 
       #swagger.responses[400] = { 
               schema: { $ref: "#/definitions/ErrorMessage" },
               description: 'Error in call' 
        } 
       #swagger.responses[404] = { 
               schema: { $ref: "#/definitions/ErrorMessage" },
               description: 'Error in connection' 
        }
    */
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
  /*
      #swagger.path = '/api/user/{email}'
       #swagger.method = 'GET'
       #swagger.description = 'Endpoint to get all userInfo in collection from email. Can throw not found error if email not associated with any users'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['User']
       #swagger.parameters['email'] = { in: 'path', description: 'User email as string in path. User db collection  indexed by String email.', type:"String"} 
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/UserInfo" },
               description: 'Returns user info object from db if found' 
        } 
       #swagger.responses[400] = { 
               schema: { $ref: "#/definitions/ErrorMessage" },
               description: 'Error in call' 
        } 
       #swagger.responses[404] = { 
               schema: { $ref: "#/definitions/ErrorMessage" },
               description: 'Error in connection' 
        }
    */
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
