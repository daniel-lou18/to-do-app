const Task = class {
  date = new Date();
  constructor(taskName="Task", descr="Description", deadline, project, priority=4) {
    this.id = taskName.replace(/\s/g, '' ).slice(-5) + (Date.now() + '').slice(-10);
    this._taskName = taskName;
    this._descr = descr;
    this._deadline = deadline;
    this._project = project;
    this._priority = priority;
    this.message();
    this.setPriorityColor();
    this.setPriorityColorName();
    this.setPriorityBackgroundColor();
  }
  
  message() {
    console.log('New Task created')
  }

  setPriorityColor() {
    if (this._priority === 1) this._priorityColor = 'rgb(220, 20, 60)';
    if (this._priority === 2) this._priorityColor = 'rgb(255, 140, 0)';
    if (this._priority === 3) this._priorityColor = 'rgb(100, 149, 237)';
    if (this._priority === 4) this._priorityColor = 'rgb(175, 175, 175)';
  }

  setPriorityColorName() {
    if (this._priority === 1) this._priorityColorName = 'crimson';
    if (this._priority === 2) this._priorityColorName = 'darkorange';
    if (this._priority === 3) this._priorityColorName = 'cornflowerblue';
    if (this._priority === 4) this._priorityColorName = 'darkgray';
  }

  setPriorityBackgroundColor() {
    if (this._priority === 1) this._priorityBackgroundColor = 'rgb(220, 20, 60, 0.2)';
    if (this._priority === 2) this._priorityBackgroundColor = 'rgb(255, 140, 0, 0.2)';
    if (this._priority === 3) this._priorityBackgroundColor = 'rgb(100, 149, 237, 0.2)';
    if (this._priority === 4) this._priorityBackgroundColor = 'rgb(175, 175, 175, 0.2)';
  }
};

export default Task;