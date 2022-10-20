const Task = class {
  date = new Date();
  constructor(taskName, descr, deadline, project, priority) {
    this.id = taskName.slice(-5) + (Date.now() + '').slice(-10);
    this._taskName = taskName;
    this._descr = descr;
    this._deadline = deadline;
    this._project = project;
    this._priority = priority;
    this.message()
  }
  
  message() {
    console.log('New Task created')
  }
};

export default Task;