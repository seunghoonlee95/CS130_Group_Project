class Task{
    //for update task, key has been assigned, otherwise default is 0
    constructor({key = 0,
        customername,
        category,
        price,
        description,
        timelocation,
        status,
        taskId}){
        this.key = key
        this.category = category;
        this.taskId = taskId;
        this.description = description;
        this.status = status;
        this.customername = customername;
        this.price = price;
        this.timelocation = timelocation;

    }

    updateTasker(new_tasker){
        this.tasker = new_tasker;
    }

    updateStatus(new_status){
        this.status = new_status;
    }
}


module.exports = Task