const Project = class {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  tasks = [];
  constructor(projectName, color) {
    this._projectName = projectName;
    this._color = color;
    this._id = new Date()
    this.message();
  }

  message() {
    console.log('New Project created')
  }
};

export default Project;