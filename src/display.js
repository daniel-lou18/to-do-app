import Project from './project';
import Task from './task';
import generateProjects from './sidebar';
import generateTasks from './main-content';
import generateProjectsList from './generate-projects-list';

function display(e) {
  const backDrop = document.querySelector('.backdrop');
  const [activeProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  const activeTask = activeProject.tasks
  
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
      <input class="project-option" type="radio" name="project-option" id="inbox" value="inbox" checked>
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
  <button class="cancel-new-task cancel" type="button">Annnuler</button>
  <button class="save-new-task save">Enregistrer</button>
  </div>
  </form>`;

  const findTask = function(taskElem) {
    const projectIndex = this.projects.findIndex(proj => proj.id === activeProject.dataset.id);
    const taskIndex = this.projects[projectIndex].tasks.findIndex(task => task.id === taskElem.dataset.id);
    return [projectIndex, taskIndex];
  };

  const saveTaskTemplate = function(btn) {
    e.preventDefault();
    const taskForm = btn.closest(`form.task-form`);
    const taskTextInput = taskForm.querySelector('input.form-text');
    const taskDescrInput = taskForm.querySelector('textarea.form-descr');
    const [taskProject] = [...taskForm.querySelectorAll('li.project-input input')].filter(input => input.checked);
    const task = new Task(taskTextInput.value, taskDescrInput.value, 0, taskProject.value);
    return { task, taskProject };
  };

  const displayModifyTask = function() {
    const htmlFormModify = `<form class="task-form modify" id="task-modify">
    <div class="form-main">
    <div class="form-text">
    <input class="form-text" type="text" name="task-text" id="task-modify" value="Pommes" autofocus placeholder= "Tâche">
    </div>
    <div class="form-descr">
    <textarea class="form-descr" name="descr-1" id="descr-modify" cols="30" rows="4" placeholder= "Description">à l'épicerie paysanne</textarea>
    </div>
    <div class="form-params">
    <button type="button" class="form-date">
    <svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
    </svg>
    <span class="form-date">19 oct</span>
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
        <input class="project-option" type="radio" name="project-option" id="inbox" value="inbox" checked>
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
<button class="cancel-new-task" type="button">Annnuler</button>
<button class="save-new-task">Enregistrer</button>
</div>
      </form>`
    
    const closeModifyForm = function() {
      const form = document.querySelector('.modify');
      const taskEl = form.previousElementSibling;
      document.querySelector('.tasks-container').removeChild(form);
      taskEl.classList.toggle('hidden');
    }

    const cancelModifyForm = function() {
      const cancelBtn = e.target.closest('.modify button.cancel-new-task');
      if (!cancelBtn) return;
      cancelBtn && closeModifyForm();
    };

    const clickOutsideModifyForm = function() {
      const form = document.querySelector('.modify');
      const modifyBtn = e.target.closest('.modify button.cancel-new-task');
      const input = e.target.closest('input');
      const btn = e.target.closest('button');
      if (!form || btn?.classList.contains('edit-task') || input?.closest('.modify') || btn?.closest('.modify')) return;
      if (input || btn) closeModifyForm();

    }
  
    const saveModifiedTask = function() {
      const saveBtn = e.target.closest('.modify button.save-new-task');
      if (!saveBtn) return;
      const { task, taskProject} = saveTaskTemplate(saveBtn);
      const taskEl = saveBtn.closest('.modify').previousElementSibling;
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      this.projects[projectIndex].tasks.splice(taskIndex, 1);
      this.projects.forEach(project => project._projectName === taskProject.value && project.tasks.splice(taskIndex, 0, task));
      generateProjects.call(this);
      closeModifyForm();
      generateTasks.call(this);
    };
    
    const generateModifyTaskContent = function(elem) {
      const [projectIndex, taskIndex] = findTask.call(this, elem);
      const activeTask = this.projects[projectIndex].tasks[taskIndex];
      const form = document.querySelector('.modify');
      const taskName = form.querySelector('input.form-text');
      const taskDescr = form.querySelector('textarea.form-descr');
      taskName.value = activeTask._taskName;
      taskDescr.value = activeTask._descr;
    };
  
    const displayFormModify = function() {
      const btnEdit = e.target.closest('.edit-task');
      if (btnEdit) {
        const task = btnEdit.closest('.task');
        task.classList.toggle('hidden');
        task.insertAdjacentHTML('afterend', htmlFormModify);
        generateModifyTaskContent.call(this, task);
        generateProjectsList.call(this, document.querySelector('.modify ul.project-input'));
        selectedOption.call(this);
      };
    };
    
    displayFormModify.call(this);
    saveModifiedTask.call(this);
    cancelModifyForm();
    clickOutsideModifyForm();
    
  };
  
  const displayNewTask = function() {
    const displayNewTaskModal = function() {
      const addTask = e.target.closest('button.add-task');
      if (!addTask) return;
      backDrop.classList.toggle('hidden');
      backDrop.insertAdjacentHTML('beforeend', htmlNewFormModal);
      generateProjectsList.call(this, document.querySelector('.modal ul.project-input'));
      selectedOption.call(this);
    };
  
    const closeModal = function() {
      backDrop.classList.toggle('hidden');
      backDrop.removeChild(document.querySelector('.modal'));
    };
  
    const cancelModal = function() {
      const btnProjects = document.querySelector('input#btn-projects');
      const outsideModal = e.target.closest('.backdrop');
      const cancelBtn = e.target.closest('.modal button.cancel-new-task');
      cancelBtn && closeModal();
      if (!outsideModal || e.target.closest('.modal') || btnProjects.checked) return;
      closeModal();
    };

    function clickOutside() {
      const backdrop = e.target.closest('.backdrop');
      const projectsContainer = e.target.closest('.form-project-container');
      if (projectsContainer || !backdrop) return;
      const btnProjects = document.querySelector('input#btn-projects');
      if (btnProjects && btnProjects.checked && !projectsContainer) {
        btnProjects.checked = false;
      };
    };

    const saveTask = function() {
      const saveBtn = e.target.closest('.modal button.save-new-task');
      if (!saveBtn) return;
      const { task, taskProject} = saveTaskTemplate(saveBtn);
      this.projects.forEach(project => project._projectName === taskProject.value && project.tasks.push(task));
      generateProjects.call(this);
      closeModal();
      generateTasks.call(this);
    };

    displayNewTaskModal.call(this);
    cancelModal();
    saveTask.call(this);
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

  const displayProjectOptionsButton = function(elem) {
    const btnInbox = document.querySelector('.btn-inbox-proj');
    const btnPersProj = document.querySelector('.btn-pers-proj');
    if (elem.id !== 'inbox') {
      btnInbox.classList.add('hidden');
      btnPersProj.classList.remove('hidden');
    } else {
      btnInbox.classList.remove('hidden');
      btnPersProj.classList.add('hidden');
    };
  };

  const setProjectOptionsButton = function(elem) {
    const btnPersProj = document.querySelector('.btn-pers-proj');
    const projectName = elem.nextElementSibling.querySelector('span').textContent;
    const projectSvgColor = elem.nextElementSibling.querySelector('svg').getAttribute('fill');
    btnPersProj.querySelector('span').textContent = projectName;
    btnPersProj.querySelector('svg').setAttribute('fill', projectSvgColor);
  }

  const selectedOption = function() {
    setProjectOptionsButton(activeProject);
    displayProjectOptionsButton(activeProject);
    const [activeOption] = [...document.querySelectorAll('input[type="radio"].project-option')].filter(input => input.value === activeProject.value);
    activeOption.checked = true;
  };

  const selectOption = function() {
    const checkedProject = e.target.closest('input[type="radio"].project-option');
    if (!checkedProject) return;
    const btnProjects = document.querySelector('input#btn-projects');
    if (checkedProject && checkedProject.checked) {
      setProjectOptionsButton(checkedProject);
      displayProjectOptionsButton(checkedProject);
      btnProjects.checked = false;          
    };
  };

  const selectProject = function() {
    document.querySelectorAll('label.sidebar-project').forEach(label => label.style.backgroundColor = 'var(--main-bg-color)');
    const projectInput = e.target.closest('input.sidebar-project');
    if (!projectInput) return;
    console.log(projectInput);
    const projectLabel = projectInput.nextElementSibling;
    const svg = projectLabel.querySelector('svg');
    const displaySelectedProject = function() {
      const container = document.querySelector('.list-title-container');
      let textInput = document.querySelector('input.list-title');
      let colorInput = document.querySelector('.list-dot');
      textInput.value = projectInput.value[0].toUpperCase() + projectInput.value.slice(1);
      if (svg.classList.contains('feather-circle')) {
        container.removeChild(colorInput);
        container.insertAdjacentHTML('afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle list-dot"><circle cx="12" cy="12" r="5"/></svg>') 
        document.querySelector('.list-dot').setAttribute('fill', svg.getAttribute('fill'));
      } else {
        container.removeChild(colorInput);
        svg.classList.contains('feather-inbox') && container.insertAdjacentHTML('afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox list-dot"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>');
        // svg.classList.contains('feather-clock') &&
        // svg.classList.contains('feather-calendar') &&
      }
    };

    if (projectInput.checked) {
      projectLabel.style.backgroundColor = 'var(--main-hv-color)';
      displaySelectedProject();
      generateTasks.call(this);
    };
  };

  const taskBtns = function() {
    const moveTask = function() {
      const btn = e.target.closest('button.move');
      if (!btn) return;
      const taskEl = btn.closest('.task');
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      const [clickedTask] = this.projects[projectIndex].tasks.splice(taskIndex, 1);
      btn.classList.contains('move-up') ? this.projects[projectIndex].tasks.splice(taskIndex -1, 0, clickedTask) : this.projects[projectIndex].tasks.splice(taskIndex + 1, 0, clickedTask);
      generateTasks.call(this);
    };

    const deleteTask = function() {
      const btn = e.target.closest('button.del-task');
      if (!btn) return;
      const taskEl = btn.closest('.task');
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      this.projects[projectIndex].tasks.splice(taskIndex, 1);
      generateTasks.call(this);
      generateProjects.call(this);
    };

    moveTask.call(this);
    deleteTask.call(this);
  }

  
  displayModifyTask.call(this);
  displayNewTask.call(this);
  selectOption.call(this);
  selectProject.call(this);
  taskBtns.call(this);
}

export default display;