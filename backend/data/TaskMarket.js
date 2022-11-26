// Let this class be recording the history of tasks as it assigns a
// customer and a tasker. Taskmarketplace will be for tasks waiting to
// be taken up by a seller
class TaskMarket {
  constructor() {
    // Holds all tasks in the marketplace
    // This is what the sellers will be viewing
    this.availableTasks = [];
  }

  addTask(t) {
    this.availableTasks.push(t);
  }

  getAllTasks() {
    return this.availableTasks;
  }

  getSwipeTasks(tasks) {
    return tasks.filter((task) => task.category === "Dining Swipes");
  }

  getTutoringTasks(tasks) {
    return tasks.filter((task) => task.category === "Tutoring");
  }

  getCarpoolingTasks() {
    return this.tasks.filter((task) => task.category === "Carpooling");
  }
}

export default TaskMarket;
