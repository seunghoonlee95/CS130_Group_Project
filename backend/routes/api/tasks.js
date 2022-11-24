const express = require('express');
const router = express.Router();
const userService = require('../../config/firebase')


const tasks = require('../../data/tasks.js');
const TaskList = require('../../data/TaskList');
const Task = require('../../data/Task');

// temp storage will replace with firestore later
//const allTasks = new TaskList();


// return list of all tasks
router.get('/all', async (req, res) => {
    try {
        const taskList = await userService.getAllTasks()
        res.status(200).json({tasks: taskList})

    } catch(err) {
        res.status(404).json({ error: err.message || err.toString() });
    }
})


//need task key(id)
router.get('/getTaskCounter', async (req, res) => {
    try {
        const key = await userService.taskCounter();
        res.status(200).json({key})
    } catch(err){
        res.status(404).json({ error: err.message || err.toString() });
    }
    
})

//increment taskID test
router.post('/incrementTaskCounter', async (req, res) => {
    try {
        await userService.incrementTaskCounter()
        res.status(200).json({ msg: 'Success'})
    } catch(err) {
        res.status(404).json({ error: err.message || err.toString() });
    }
})

//create new task, return key
router.post('/new', async (req, res) => {
    try{ //will try to save new Task to database
        const key = await userService.taskCounter();
        const temp = req.body
        temp['key'] = key
        await userService.incrementTaskCounter();
        await userService.updateTask(key, temp)
        res.status(200).json({ key })
    } catch(err) {
        //logger.error(err);
        res.status(404).json({ error: err.message || err.toString() });
    }
})


//update task. The task key must be passed in. Either a success msg or error is returned.
router.post('/update', async (req, res) => {
    const t = new Task(req.body)
    const key = t.key
    try {
        const currKey = await userService.taskCounter()
        if(key >= currKey){
            throw `Task with key: ${key} has not been created`
        }else{
            await userService.updateTask(key, req.body)
            res.status(200).json({ msg: 'Success'})
        }
    } catch(err){
        res.status(404).json({ error: err.message || err.toString() });
    }

})


/*
Return given task object by key
*/
router.get('/:key', async(req, res) => {
    try{
        const key = parseInt(req.params.key);
        const currKey = await userService.taskCounter()
        if(key < currKey){
            const task = await userService.getTaskByKey(key)
            res.status(200).json(task)
        }else{
            throw `Task with key ${key} has not been created`
        }
    } catch(err){
        res.status(404).json({ error: err.message || err.toString() });
    }
});



module.exports = router;