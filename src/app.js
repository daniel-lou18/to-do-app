import Project from './project';
import Task from './task';
import display from './display';
import generateProjects from './sidebar';

const App = class {
  projects = [];
  constructor() {
    this.init()
  }

  init() {
    const inbox = new Project('inbox');
    this.projects.push(inbox);
    const courses = new Project('courses', 'cornflowerblue');
    this.projects.push(courses);
    const enfants = new Project('enfants', 'crimson');
    this.projects.push(enfants);
    const travaux = new Project('travaux', 'darkorange');
    this.projects.push(travaux);
    const task = new Task('Réparer robinet', 'salle de bains', 0, 'travaux');
    travaux.tasks.push(task);
  }

};

const app = new App();
document.addEventListener('click', display.bind(app));
generateProjects.call(app, document.querySelector('.personal-projects-list'));
export default app;