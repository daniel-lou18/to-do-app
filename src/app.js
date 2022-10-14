import Project from './project';
import Task from './task';

const App = class {
  projects = [];
  constructor() {
    document.addEventListener('click', this.display.bind(this));
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
  }

  display(e) {
    const displayModifyTask = function() {
      const htmlFormModify = `<form class="task-form" id="task-0">
      <div class="form-main">
      <div class="form-text">
      <input class="form-text" type="text" name="task-text" id="task-1" value="Pommes" autofocus placeholder= "Tâche">
      </div>
      <div class="form-descr">
      <textarea class="form-descr" name="descr-1" id="descr-1" cols="30" rows="4" placeholder= "Description">à l'épicerie paysanne</textarea>
      </div>
      <div class="form-params">
      <button type="button" class="form-date">
      <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
      </svg>
      <span class="form-date">19 oct</span>
      </button>
      <div class="form-project-container">
      <button type="button" class="form-project">
      <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
      <circle cx="12" cy="12" r="5"/>
      </svg>
      <span class="form-project">Courses</span>
      </button>
      <div class="project-input">
      <ul class="project-input list">
      <li class="project-input option inbox">
      <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
      <circle cx="12" cy="12" r="5"/>
      </svg>
      <span class="form-project">Courses</span>
      </li>
      <li class="project-input option inbox">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
      </svg>
      <span class="inbox-title">Inbox</span>
  </li>
  <li class="project-input option" id="list-title-1">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
  <span class="project-input option">Courses</span>
  </li>
  <li class="project-input option" id="list-title-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="crimson" stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
  <span class="project-input option">Enfants</span>
  </li>
  <li class="project-input option" id="list-title-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="darkorange" stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
  <span class="project-input option">Travaux</span>
  </li>
  </ul>
  </div>
  </div>
  <button type="button" class="form-priority">
  <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
  </svg>
  </button>
  </div>
  </div>
  <div class="form-save">
  <button type="button">Annnuler</button>
  <button>Enregistrer</button>
  </div>
        </form>`
        
      const displayFormModify = function() {
        const btnEdit = e.target.closest('.edit-task');
        if (btnEdit) {
          console.log('yeppie')
          const task = btnEdit.closest('.task');
          task.classList.toggle('hidden');
          task.insertAdjacentHTML('afterend', htmlFormModify);
        };
      };
      
      displayFormModify();
    }
    
    const displayNewTask = function() {
      const backDrop = document.querySelector('.backdrop');
      const htmlNewFormModal = `
      <form class="task-form modal new-task" id="task-0">
      <div class="form-main">
      <div class="form-text">
      <input class="form-text" type="text" name="task-text" id="task-1" autofocus placeholder="Tâche">
      </div>
      <div class="form-descr">
      <textarea class="form-descr" name="descr-1" id="descr-1" cols="30" rows="4" placeholder="Description"></textarea>
      </div>
      <div class="form-params">
      <button type="button" class="form-date">
      <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
      </svg>
      <span class="form-date">Échéance</span>
      </button>
      <div class="form-project-container">
    <input type="checkbox" name="btn-projects" id="btn-projects">
    <div class="btn-wrapper form-project">
        <label class="btn-projects" for="btn-projects">
          <div class="btn-pers-proj hidden">
            <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
              <circle cx="12" cy="12" r="5"/>
            </svg>
            <span class="form-project">Courses</span>
          </div>
          <div class="btn-inbox-proj">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
            </svg>
            <span class="inbox-title">Inbox</span>
          </div>
        </label>
    </div>
    <div class="project-input">
      <ul class="project-input list">
        <li class="project-input option inbox">
          <input type="radio" name="project-option" id="inbox" value="inbox">
          <label for="inbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
            </svg>
            <span class="inbox-title">Inbox</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
      <button type="button" class="form-priority">
      <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
      </button>
      </div>
      </div>
      <div class="form-save">
      <button type="button">Annnuler</button>
      <button class="save-new-task save">Enregistrer</button>
      </div>
      </form>`;
  
      const displayNewTaskModal = function() {
        const addTask = e.target.closest('button.add-task');
        if (!addTask) return;
        backDrop.classList.toggle('hidden');
        backDrop.insertAdjacentHTML('beforeend', htmlNewFormModal);
        generateProjectsList.call(this);
      };
  
      const saveTask = function() {
        const saveBtn = e.target.closest('button.save-new-task');
        if (!saveBtn) return;
        e.preventDefault();
        const taskForm = e.target.closest(`form.task-form`);
        const taskTextInput = taskForm.querySelector('input.form-text').value;
        const taskDescrInput = taskForm.querySelector('textarea.form-descr').value;  
        const task = new Task(taskTextInput, taskDescrInput);
        this.projects.forEach(project => project._projectName === 'inbox' && project.tasks.push(task));
        console.log(this.projects, taskForm);
      };

      function generateProjectsList() {
        const projectList = document.querySelector('ul.project-input');
        if (projectList.contains(document.querySelector('li.personal'))) return;
        this.projects.forEach((project, index) => {
          if (index > 0) {
            console.log(project)
            const projectHtml = `
            <li class="project-input option personal" data-id=${project._id}>
              <input type="radio" name="project-option" id="project-${index}" value="project-${index}">
              <label for="project-${index}">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle">
                  <circle cx="12" cy="12" r="5"/>
                </svg>
                <span class="project-input option">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
              </label>
            </li>
            `;
            projectList.insertAdjacentHTML('beforeend', projectHtml);
          }
        });
      };

      const selectOption = function() {
        const checkedProject = e.target.closest('input[type="radio"]');
        if (!checkedProject) return;
        const btnProjects = document.querySelector('input#btn-projects');
        const btnInbox = document.querySelector('.btn-inbox-proj');
        const btnPersProj = document.querySelector('.btn-pers-proj');
        const changeButton = function() {
          if (checkedProject.id !== 'inbox') {
            btnInbox.classList.add('hidden');
            btnPersProj.classList.remove('hidden');
          } else {
            btnInbox.classList.remove('hidden');
            btnPersProj.classList.add('hidden');
          };
        };
        if (checkedProject && checkedProject.checked === true) {
          const projectName = checkedProject.nextElementSibling.querySelector('span').textContent;
          const projectSvgColor = checkedProject.nextElementSibling.querySelector('svg').getAttribute('fill');
          btnPersProj.querySelector('span').textContent = projectName;
          btnPersProj.querySelector('svg').setAttribute('fill', projectSvgColor);
          changeButton();
          btnProjects.checked = false;          
        };
      };

      function clickOutside() {
        const backdrop = e.target.closest('.backdrop');
        const projectsContainer = e.target.closest('.form-project-container');
        if (projectsContainer || !backdrop) return;
        const btnProjects = document.querySelector('input#btn-projects');
        if (btnProjects.checked === true && !projectsContainer) {
          btnProjects.checked = false;
        };
      }
 
      // const displayProjects = function() {
      //   const btnProjects = e.target.closest('button.form-project');
      //   if (!btnProjects) return;
      //   const projectInput = btnProjects.nextElementSibling;
        
      //   if (!btnProjects.classList.contains('active') && !btnProjects.classList.contains('generated')) {
      //     const ulProjects = btnProjects.closest('.form-project-container').querySelector('ul.project-input');
      //     this.projects.forEach((project, index) => {
      //       const projectHtml = `
      //       <li class="project-input option personal" id="project-name-${index}" data-name= "${project._projectName}">
      //       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle"><circle cx="12" cy="12" r="5"/></svg>
      //       <span class="project-input option">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
      //       </li>`
      //       if (index > 0) {
      //         ulProjects.insertAdjacentHTML('beforeend', projectHtml);
      //       };
      //     })
      //     projectInput.classList.toggle('hidden');
      //     btnProjects.classList.toggle('active');
      //     ulProjects.addEventListener('click', function(e) {
      //       const selectedProject = e.target.closest('li.selected');
      //       if (!selectedProject) return;
      //       projectInput.classList.toggle('hidden');
      //       btnProjects.classList.toggle('active');
      //       btnProjects.classList.add('generated');
      //     });
      //     selectProjectsForm(ulProjects);
      //   };
        
      //   if (!btnProjects.classList.contains('active')) {
      //     projectInput.classList.toggle('hidden');
      //     btnProjects.classList.toggle('active');
      //   };
      // }

      // function selectProjectsForm(element) {
      //   element.addEventListener('click', function(e) {
      //     const selectedElement = element.querySelector('li.selected');
      //     const selectedOption = e.target.closest('li.option');
      //     const cloneSelOption = selectedOption.cloneNode(true);
      //     if (!selectedOption) return;
      //     cloneSelOption.classList.add('selected');
      //     element.removeChild(selectedElement);
      //     element.prepend(cloneSelOption);
      //   })
      // };

      displayNewTaskModal.call(this);   
      saveTask.call(this);
      selectOption.call(this);
      clickOutside.call(this);
 
        
        
        
        const displayFormDate = function() {
          const btnDate = e.target.closest('button.form-date');
          if (!btnDate) return;
          console.log(btnDate);
        };
        
        const displayFormPriority = function() {
          const btnPriority = e.target.closest('button.form-priority');
          if (!btnPriority) return;
          console.log(btnPriority);
        };
      
      
  
    };

    displayModifyTask.call(this);
    displayNewTask.call(this);
  }

  
};









export default App;