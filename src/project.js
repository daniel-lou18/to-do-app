const Project = class {
  tasks = [];
  constructor(projectName, color) {
    this._projectName = projectName;
    this._color = color;
    this.message();
  }

  message() {
    console.log('New Project created')
  }
};

export default Project;