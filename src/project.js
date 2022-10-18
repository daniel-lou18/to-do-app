const Project = class {
  date = new Date();
  tasks = [];
  constructor(projectName, color) {
    this._projectName = projectName;
    this._color = color;
    this.id = projectName + '-' + (Date.now() + '').slice(-10);
    this.message();
  }

  message() {
    console.log('New Project created')
  }
};

export default Project;