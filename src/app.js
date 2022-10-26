import Project, {PersonalProject} from './project';
import Task from './task';
import display from './display';
import { generateProjects } from './generate-html-lists';

const App = class {
  projects = [];
  constructor() {
    this.init();
  }

  init() {
    const inbox = new Project('inbox', '', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox list-dot"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>');
    this.projects.push(inbox);
    const courses = new PersonalProject('courses', 'cornflowerblue');
    this.projects.push(courses);
    const enfants = new PersonalProject('enfants', 'crimson');
    this.projects.push(enfants);
    const travaux = new PersonalProject('travaux', 'darkorange');
    this.projects.push(travaux);
    const task1 = new Task('Réparer robinet', 'salle de bains', 1, 'travaux');
    travaux.tasks.push(task1);
    const task2 = new Task('Déboucher l\'évier', 'acheter du produit', 3, 'travaux');
    travaux.tasks.push(task2);
  }
};


const app = new App();
document.addEventListener('click', display.bind(app));
generateProjects.call(app);
export default app;