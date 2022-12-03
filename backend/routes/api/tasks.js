const express = require("express");
const router = express.Router();
const userService = require("../../config/firebase");

const tasks = require("../../data/tasks.js");
const TaskList = require("../../data/TaskList");
const Task = require("../../data/Task");

// temp storage will replace with firestore later
//const allTasks = new TaskList();

// return list of all tasks
router.get("/all", async (req, res) => {
  /*
       #swagger.path = '/api/tasks/all'
       #swagger.method = 'GET'
       #swagger.description = 'Get List of all Tasks in firestore collection'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Tasks']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/TaskList" },
               description: 'Returns an array of Task Objects' 
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
    const taskList = await userService.getAllTasks();
    res.status(200).json({ tasks: taskList });
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

router.get("/tutoring", async (req, res) => {
  /*
       #swagger.path = '/api/tasks/tutoring'
       #swagger.method = 'GET'
       #swagger.description = 'Get List of all Tasks in firestore collection with categort = "Tutoring"'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Tasks']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/TaskList" },
               description: 'Returns an array of Task Objects all with category = "Tutoring"' 
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
    const taskList = await userService.getTasks("Tutoring");
    res.status(200).json({ tasks: taskList });
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

router.get("/swipes", async (req, res) => {
  /*
       #swagger.path = '/api/tasks/swipes'
       #swagger.method = 'GET'
       #swagger.description = 'Get List of all Tasks in firestore collection with categort = "Swipe Trade"'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Tasks']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/TaskList" },
               description: 'Returns an array of Task Objects all with category = "Swipe Trade"' 
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
    const taskList = await userService.getTasks("Swipe Trade");
    res.status(200).json({ tasks: taskList });
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

router.get("/rides", async (req, res) => {
  /*
       #swagger.path = '/api/tasks/rides'
       #swagger.method = 'GET'
       #swagger.description = 'Get List of all Tasks in firestore collection with categort = "Ride Share"'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Tasks']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/TaskList" },
               description: 'Returns an array of Task Objects all with category = "Ride Share"' 
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
    const taskList = await userService.getTasks("Ride Share");
    res.status(200).json({ tasks: taskList });
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

//need task key(id)
router.get("/getTaskCounter", async (req, res) => {
  /*
       #swagger.path = '/api/tasks/getTaskCounter'
       #swagger.method = 'GET'
       #swagger.description = 'Get task counter from Firestore DB entry. Task Counter is unique key for next Task to be created.'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Tasks']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/TaskCounter" },
               description: 'Returns a number task counter which is key of next task created' 
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
    const key = await userService.taskCounter();
    res.status(200).json({ key });
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

//increment taskID test
router.post("/incrementTaskCounter", async (req, res) => {
  /*
       #swagger.path = '/api/tasks/incrementTaskCounter'
       #swagger.method = 'Post'
       #swagger.description = 'Endpoint to increase taskCounter number in Firestore db by 1'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Tasks']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/SuccessMessage" },
               description: 'Returns msg of Success if task counter has been incremented' 
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
    await userService.incrementTaskCounter();
    res.status(200).json({ msg: "Success" });
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

//create new task, return key
router.post("/new", async (req, res) => {
  /*
       #swagger.path = '/api/tasks/new'
       #swagger.method = 'POST'
       #swagger.description = 'Endpoint to create a new task. Will create a new task with current taskCounter key then increment taskCounter.'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Tasks']
       #swagger.parameters['taskInfo'] = { in: 'body', description: 'A Task Object wihtout a key, but all other fields. Note that taskername and taskeremail are empty strings as not tasker has accepted this new task', schema: { $ref: "#/definitions/TaskInfoNew" } } 
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/TaskCounter" },
               description: 'Returns the key of the new task added to firestore task collection' 
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
    //will try to save new Task to database
    const key = await userService.taskCounter();
    const temp = req.body;
    temp["key"] = key;
    await userService.incrementTaskCounter();
    await userService.updateTask(key, temp);
    res.status(200).json({ key });
  } catch (err) {
    //logger.error(err);
    res.status(404).json({ error: err.message || err.toString() });
  }
});

//update task. The task key must be passed in. Either a success msg or error is returned.
router.post("/update", async (req, res) => {
  /*
       #swagger.path = '/api/tasks/update'
       #swagger.method = 'POST'
       #swagger.description = 'Endpoint to update an existing task using the task key. Throws error is task key is not valid'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Tasks']
       #swagger.parameters['updatedTask'] = { in: 'body', description: 'A task object containing at least the task key. Any other fields can be ommitted if user does not want to change them.', schema: {$ref: "#/definitions/TaskInfo"} } 
    #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/SuccessMessage" },
               description: 'Returns a msg of Success if task as been updated on Firestore Collection' 
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
  const t = new Task(req.body);
  const key = t.key;
  try {
    const currKey = await userService.taskCounter();
    if (key >= currKey) {
      throw { message: `Task with key: ${key} has not been created` };
    } else {
      await userService.updateTask(key, req.body);
      res.status(200).json({ msg: "Success" });
    }
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

/*
Return given task object by key
*/
router.get("/:key", async (req, res) => {
  /*
       #swagger.path = '/api/tasks/{key}'
       #swagger.method = 'GET'
       #swagger.description = 'Endpoint to get an individual task by task key. Will throw Task with key ${key} has not been created error is key is out of bounds.'
       #swagger.produces = ["application/json"]
       #swagger.tags = ['Tasks']
       #swagger.parameters['key'] = { in: 'path', description: 'Int task key to query database with', type: "number" } 
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/TaskInfo" },
               description: 'Returns the given task object if found' 
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
    const key = parseInt(req.params.key);
    const currKey = await userService.taskCounter();
    if (key < currKey) {
      const task = await userService.getTaskByKey(key);
      res.status(200).json(task);
    } else {
      throw { message: `Task with key ${key} has not been created` };
    }
  } catch (err) {
    res.status(404).json({ error: err.message || err.toString() });
  }
});

module.exports = router;
