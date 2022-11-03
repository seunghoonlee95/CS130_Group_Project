class Task{
    constructor({category, taskId, description, status, customer, tasker}){
        this.category = category;
        this.taskId = taskId;
        this.description = description;
        this.status = status;
        this.customer = customer;
        this.tasker = tasker;
    }

    updateTasker(new_tasker){
        this.tasker = new_tasker;
    }

    updateStatus(new_status){
        this.status = new_status;
    }
}

class Description{

}

module.exports = Task