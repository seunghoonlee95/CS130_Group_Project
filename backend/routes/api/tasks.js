const express = require('express');
const router = express.Router();


const tasks = require('../../data/tasks.js');
const TaskList = require('../../data/TaskList');
const Task = require('../../data/Task');

// temp storage will replace with firestore later
const allTasks = new TaskList();

/*
Return given task object by id
*/
router.get('/:id', (req, res) => {
    const isFound = tasks.some(task => task.id === parseInt(req.params.id));
    if(isFound){
        res.json(tasks.filter(task => task.id === parseInt(req.params.id)));
    } else{
        res.status(400).json({ msg: `No task with id of ${req.params.id}` });
    }  
});

// return list of all tasks
router.get('/all', (req, res) => {
    res.json(tasks);
})

//create new task
router.post('/new', (req, res) => {
    try{ //will try to save new Task to database
        const t = new Task(req.body);
        allTasks.addTask(t);
        res.status(200).json({ msg: `Added task ${t.taskId} to task list`})
        //will later save to firestore database
    } catch(err) {
        //logger.error(err);
        res.status(404).json({ error: err.message || err.toString() });
    }
})



module.exports = router;