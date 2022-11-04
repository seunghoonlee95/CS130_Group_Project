class TaskList{
    constructor(){
        this.tasks = []
    }
    addTask(t){
        this.tasks.push(t);
    }
    removeTask(id){
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}

module.exports = TaskList