import Project from './project';
import Task from './task';
import {generateProjects, generateTasks, generateProjectsList, generatePriorityList } from './generate-html-lists';
import effects from './effects';
import {htmlNewFormModal, htmlFormModify, htmlNewFormProject} from './formsHtml';

let modifyFormDisplayed = false;

function display(e) {
  const backDrop = document.querySelector('.backdrop');
  const [activeProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  const getActiveProject = (projectElSelector) => {
    const [activeProject] = [...document.querySelectorAll(projectElSelector)].filter(input => input.checked);
    const [project] = this.projects.filter(project => project.id === activeProject.dataset.id);
    return project;
  };

  const openDisplay = function(elToToggle, elToInsertTo, insertPosition, html) {
    elToToggle?.classList.toggle('hidden');
    elToInsertTo.insertAdjacentHTML(insertPosition, html);
  };

  const generateBtnLists = function(btnProjects, btnPriority) {
    generateProjectsList.call(this, btnProjects);
    selectProjectBtn().selectedOption.call(this);
    generatePriorityList.call(this, btnPriority);
  };

  const closeDisplay = function(elToToggle, elRemoveFrom, elToRemove) {
    elToToggle?.classList.toggle('hidden');
    elRemoveFrom.removeChild(elToRemove);
  };

  const setCircleCheckboxTask = function() {
    const allCircleSpans = document.querySelectorAll('span.custom-checkbox');
    const allTasks = getActiveProject('input.sidebar-project').tasks;
    console.log(allTasks);
    allCircleSpans.forEach((span, i) => {
      span.style.borderColor = allTasks[i]._priorityColor;
      span.style.backgroundColor = allTasks[i]._priorityBackgroundColor;
    });
  };

  const displayChevron = function() {
    document.querySelectorAll('p.task-descr').forEach(descr => {
      const task = this.projects
                    .filter(project => project._projectName === descr.dataset.projectId)[0]
                    .tasks.filter(task => task.id === descr.dataset.taskId)[0];
      if (task?._descr.length > 50) {
        descr.closest('.description-container').classList.add('expand');
      };
    })
  };

  const resetStrikeThrough = function() {
    document.querySelectorAll('input.task-check').forEach(task => task.checked = false);
    document.querySelector('button.del-checked-task').parentElement.classList.add('transparent');
  };

  const initTasks = function() {
    generateTasks.call(this);
    setCircleCheckboxTask.call(this);
    displayChevron.call(this);
    resetStrikeThrough();
  };

  const clickOutsideMenu = function(formContainer) {
    const checkedFormBtn = [...document.querySelectorAll('input.btn-form')].filter(btn => btn.checked);
    if (checkedFormBtn || !formContainer) {
      checkedFormBtn.forEach(btn => btn.checked = false);
    };
  }

  const findTask = function(taskElem) {
    const projectIndex = this.projects.findIndex(proj => proj.id === activeProject.dataset.id);
    const taskIndex = this.projects[projectIndex].tasks.findIndex(task => task.id === taskElem.dataset.id);
    return [projectIndex, taskIndex];
  };

  const saveTaskInput = function(btn) {
    modifyFormDisplayed = false;
    e.preventDefault();
    const taskForm = btn.closest(`form.task-form`);
    const taskTextInput = taskForm.querySelector('input.form-text');
    const taskDescrInput = taskForm.querySelector('textarea.form-descr');
    const [taskProject] = [...taskForm.querySelectorAll('li.project-input input')].filter(input => input.checked);
    const [taskPriority] = [...taskForm.querySelectorAll('li.priority-input input')].filter(input => input.checked);
    const task = new Task(taskTextInput.value, taskDescrInput.value, 0, taskProject.value, +taskPriority.value);
    console.log(task);
    return { task, taskProject };
  };

  const displayModifyTask = function() {
    const cancelModifyForm = function() {
      const cancelBtn = e.target.closest('.modify button.cancel-new-task');
      if (!cancelBtn) return;
      effects.fadeOut(document.querySelector('.modify'), document.querySelector('.modify').previousElementSibling, cancelBtn.closest('.task-wrapper'), document.querySelector('.modify'))
      modifyFormDisplayed = false;
    };

    const clickOutsideModifyForm = function() {
      const clickedForm = e.target.closest('.modify');
      const modifyBtnOfTask = e.target.closest('.task-wrapper')?.querySelector('.task.hidden');
      const anyModifyBtn = e.target.closest('button.edit-task');
      const saveBtn = e.target.closest('.modify button.save-new-task');
      const cancelBtn = e.target.closest('.modify button.cancel-new-task');
      if (!modifyFormDisplayed || saveBtn || cancelBtn || clickedForm || modifyBtnOfTask) return;
      closeDisplay(document.querySelector('.modify').previousElementSibling, document.querySelector('.modify').closest('.task-wrapper'), document.querySelector('.modify'));
      modifyFormDisplayed = false;
      if (anyModifyBtn) displayFormModify.call(this);
    };

    function clickOutsideModifyMenu() {
      if (!modifyFormDisplayed) return;
      const formContainer = e.target.closest('.form-container');
      if (formContainer) return;
      clickOutsideMenu(formContainer);
    };
  
    const saveModifiedTask = function() {
      const saveBtn = e.target.closest('.modify button.save-new-task');
      if (!saveBtn) return;
      const { task, taskProject} = saveTaskInput(saveBtn);
      const taskEl = saveBtn.closest('.modify').previousElementSibling;
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      this.projects[projectIndex].tasks.splice(taskIndex, 1);
      this.projects.forEach(project => project._projectName === taskProject.value && project.tasks.splice(taskIndex, 0, task));
      generateProjects.call(this);
      effects.fadeOut(document.querySelector('.modify'), taskEl, taskEl.closest('.task-wrapper'), document.querySelector('.modify'));
      setTimeout(initTasks.bind(this), 520);
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

    const displayFormModifyGeneric = function(task) {
        openDisplay(task, task, 'afterend', htmlFormModify.call(this));
        generateBtnLists.call(this, document.querySelector('.modify ul.project-input'), document.querySelector('.modify ul.priority-input'));
        selectedPriorityModify.call(this);
        generateModifyTaskContent.call(this, task);
        modifyFormDisplayed = true;
        resetStrikeThrough();
      };
  
    const displayFormModify = function() {
      const btnEdit = e.target.closest('.edit-task');
      if (!btnEdit || modifyFormDisplayed) return;
      const task = btnEdit.closest('.task');
      displayFormModifyGeneric.call(this, task);
      document.querySelector('.modify input.form-text').focus();
      effects.fadeIn(document.querySelector('.modify'));
    };
    
    displayFormModify.call(this);
    saveModifiedTask.call(this);
    cancelModifyForm();
    clickOutsideModifyForm.call(this);
    clickOutsideModifyMenu();
  };
  
  const displayNewTask = function() {
    const displayNewTaskModal = function() {
      if (!e.target.closest('button.add-task')) return;
      openDisplay.call(this, backDrop, backDrop, 'beforeend', htmlNewFormModal.call(this));
      document.querySelector('.modal input.form-text').focus();
      effects.fadeIn(backDrop);
      generateBtnLists.call(this, document.querySelector('.modal ul.project-input'), document.querySelector('ul.priority-input'));
      selectedPriorityModal();
      resetStrikeThrough();
    };
  
    const cancelModal = function() {
      const [checkedFormBtn] = [...document.querySelectorAll('input.btn-form')].filter(btn => btn.checked);
      const outsideModal = e.target.closest('.backdrop');
      const cancelBtn = e.target.closest('.modal button.cancel-new-task');
      if (cancelBtn) {
        effects.fadeOut(backDrop, backDrop, backDrop, document.querySelector('.modal'))
      };
      if (!outsideModal || e.target.closest('.modal') || checkedFormBtn) return;
      effects.fadeOut(backDrop, backDrop, backDrop, document.querySelector('.modal'))
    };

    function clickOutsideModalMenu() {
      const backdrop = e.target.closest('.backdrop');
      const formContainer = e.target.closest('.form-container');
      if (formContainer || !backdrop) return;
      clickOutsideMenu(formContainer);
    };

    const saveTask = function() {
      const saveBtn = e.target.closest('.modal button.save-new-task');
      if (!e.target.closest('.modal button.save-new-task')) return;
      const { task, taskProject} = saveTaskInput(saveBtn);
      this.projects.forEach(project => project._projectName === taskProject.value && project.tasks.push(task));
      generateProjects.call(this);
      closeDisplay(backDrop, backDrop, document.querySelector('.modal'));
      backDrop.classList.add('transparent');
      initTasks.call(this);
      document.querySelector('button.del-checked-task').parentElement.classList.add('transparent');
    };

    displayNewTaskModal.call(this);
    cancelModal();
    saveTask.call(this);
    clickOutsideModalMenu();
      
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

  const displayNewProject = function() {
    const displayNewProjectModal = function() {
      if (!e.target.closest('button.title-projects-add')) return;
      openDisplay(backDrop, backDrop, 'beforeend', htmlNewFormProject.call(this));
      document.querySelector('.modal input.form-text').focus();
      effects.fadeIn(backDrop);
    };

    displayNewProjectModal.call(this);
  }
  
  const selectMenuOption = function(option, btn, fn, fnArg) {
    if (option && option.checked) {
      fn(fnArg);
      btn.checked = false;          
    };
  };

  const selectProjectBtn = function() {
    const generateSvgProjectOptionsButton = function(container, svgEl, project) {
      const projectSvg = project._svg;
      container.removeChild(svgEl);
      container.insertAdjacentHTML('afterbegin', projectSvg);
      container.querySelector('svg').setAttribute('width', 20);
      container.querySelector('svg').setAttribute('height', 20);
    };

    const setProjectOptionsButton = function(project) {
      const btnPersProj = document.querySelector('.btn-pers-proj');
      const projectName = project.capitalizedProjectName;
      btnPersProj.querySelector('span').textContent = projectName;
      generateSvgProjectOptionsButton(btnPersProj, btnPersProj.querySelector('svg'), project)
    };

    const selectedOption = function() {
      setProjectOptionsButton(getActiveProject('input.sidebar-project'));
      const [activeOption] = [...document.querySelectorAll('input[type="radio"].project-option')].filter(input => input.value === activeProject.value);
      activeOption.checked = true;
    };

    const selectOption = function() {
      const checkedProject = e.target.closest('input[type="radio"].project-option');
      if (!e.target.closest('input[type="radio"].project-option')) return;
      selectMenuOption(checkedProject, document.querySelector('input#btn-projects'), setProjectOptionsButton, getActiveProject('.project-option'));
      document.querySelector('.modify .form-main')?.classList.add('focus');
    };

    return {selectedOption, selectOption};
  };

  const setPriorityOptionsButton = function(svgOption) {
    const svg = document.querySelector('svg.form-priority');
    svg.setAttribute('fill', svgOption.getAttribute('fill'));
    svg.setAttribute('stroke', svgOption.getAttribute('stroke'));
  };

  const selectedPriorityModify = function() {
    const svg = document.querySelector('svg.form-priority');
    const [projectIndex, taskIndex] = findTask.call(this, document.querySelector('.modify').previousElementSibling);
    console.log(projectIndex, taskIndex);
    const priority = this.projects[projectIndex].tasks[taskIndex]._priority;
    switch (priority) {
      case 1:
        svg.setAttribute('fill', 'crimson');
        svg.setAttribute('stroke', 'crimson');
        break;
      case 2:
        svg.setAttribute('fill', 'darkorange');
        svg.setAttribute('stroke', 'darkorange');
        break;
      case 3:
        svg.setAttribute('fill', 'cornflowerblue');
        svg.setAttribute('stroke', 'cornflowerblue');
        break;
      case 4:
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'black');
        break;
    }
    const [activeOption] = [...document.querySelectorAll('input[type="radio"].priority-option')].filter(input => +input.value === priority);
    activeOption.checked = true;
  };

  function selectedPriorityModal() {
    document.querySelector('input#priority-1').checked = true;
  }

  const selectPriority = function() {
    const checkedPriority = e.target.closest('input[type="radio"].priority-option');
    if (!checkedPriority) return;
    selectMenuOption(checkedPriority, document.querySelector('input#btn-priority'), setPriorityOptionsButton, checkedPriority.closest('li').querySelector('svg'));
    document.querySelector('.modify .form-main')?.classList.add('focus');
  };

  const selectProject = function() {    
    const projectInput = e.target.closest('input.sidebar-project');
    if (!projectInput) return;
    const projectLabel = projectInput.nextElementSibling;
    const svg = projectLabel.querySelector('svg');
    
    function displaySelectedProject() {
      const container = document.querySelector('.list-title-container');
      let textInput = document.querySelector('input.list-title');
      let colorInput = document.querySelector('.list-dot');
      textInput.value = projectInput.value[0].toUpperCase() + projectInput.value.slice(1);
      effects.fadeInB(container);
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
      effects.fadeInB(document.querySelector('.todo-bottom'));
      effects.fadeInB(document.querySelector('.tasks-container'));
      displaySelectedProject();
      initTasks.call(this);
    };
  };

  const checkMultipleDropdown = function() {
    const checkedFormBtn = [...document.querySelectorAll('input.btn-form')].filter(btn => btn.checked);
    if (checkedFormBtn.length > 1) {
      checkedFormBtn.forEach(btn => btn.checked = false);
      const formBtn = e.target.closest('input.btn-form');
      if (!formBtn) return;
      formBtn.checked = true;
    }
  };

  const taskActions = function() {
    const moveTask = function() {
      const btn = e.target.closest('button.move');
      if (!btn) return;
      const taskEl = btn.closest('.task');
      const nextTaskEl = taskEl.closest('.task-wrapper')?.nextElementSibling?.firstElementChild;
      const prevTaskEl = taskEl.closest('.task-wrapper')?.previousElementSibling?.firstElementChild;
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      const [clickedTask] = this.projects[projectIndex].tasks.slice(taskIndex, taskIndex + 1);
      if (btn.classList.contains('move-up') && taskIndex > 0) {
        effects.fadeDown(prevTaskEl);
        effects.fadeUp(taskEl);
        this.projects[projectIndex].tasks.splice(taskIndex, 1);
        this.projects[projectIndex].tasks.splice(taskIndex - 1, 0, clickedTask);
        setTimeout(initTasks.bind(this), 510)
      };
      if (btn.classList.contains('move-down') && taskIndex !== -1 && taskIndex < this.projects[projectIndex].tasks.length - 1) {
        console.log(taskIndex, this.projects[projectIndex].tasks.length);
        effects.fadeDown(taskEl);
        effects.fadeUp(nextTaskEl);
        this.projects[projectIndex].tasks.splice(taskIndex, 1);
        this.projects[projectIndex].tasks.splice(taskIndex + 1, 0, clickedTask);
        setTimeout(initTasks.bind(this), 510)
      };
    };

    const deleteTask = function() {
      const btn = e.target.closest('button.del-task');
      if (!btn) return;
      const taskEl = btn.closest('.task');
      const [projectIndex, taskIndex] = findTask.call(this, taskEl);
      this.projects[projectIndex].tasks.splice(taskIndex, 1);
      initTasks.call(this);
      generateProjects.call(this);
    };

    const displayDeleteStrikethrough = function() {
      const task = e.target.closest('.task-check');
      if(!task) return;
      const delCheckedBtn = document.querySelector('button.del-checked-task');
      const checkTasksArray = [...document.querySelectorAll('.task-check')].filter(task => task.checked);
      const delCheckedBtnLetterS = document.querySelector('span.letter-s');
      checkTasksArray.length > 0 ? delCheckedBtn.parentElement.classList.remove('transparent') : delCheckedBtn.parentElement.classList.add('transparent');
      checkTasksArray.length > 1 ? delCheckedBtnLetterS.classList.remove('transparent') : delCheckedBtnLetterS.classList.add('transparent');
    };

    const clickonDeleteStrikethrough = function() {
      const delCheckedBtn = e.target.closest('button.del-checked-task');
      if (!delCheckedBtn) return;
      [...document.querySelectorAll('.task-check')]
        .filter(task => task.checked)
        .map(task => findTask.call(this, task))
        .forEach((iArray, i) => {
          this.projects[iArray[0]].tasks.splice(iArray[1] - i, 1)
        });
      initTasks.call(this);
      generateProjects.call(this);
    };

    const clickonTaskDescription = function() {
      const htmlChevronUp = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>`;
      const htmlChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"/></svg>`;
      const shortDescr = e.target.closest('p.task-descr');
      if (!shortDescr || shortDescr.textContent.length <= 50) return;
      console.log(shortDescr.textContent.length)
      const descrContainer = shortDescr.closest('.description-container');
      const task = this.projects
        .filter(project => project._projectName === shortDescr.dataset.projectId)[0]
        .tasks.filter(task => task.id === shortDescr.dataset.taskId)[0];
      
      const modifyTaskDescription = function(text, chevron) {
        shortDescr.textContent = text;
        descrContainer.removeChild(shortDescr.nextElementSibling);
        descrContainer.insertAdjacentHTML('beforeend', chevron);
        shortDescr.closest('.task').classList.toggle('full-descr');
      };
      
      shortDescr.closest('.task').classList.contains('full-descr') ? modifyTaskDescription(task.shortenTaskDescr(), htmlChevronDown) : modifyTaskDescription(task._descr, htmlChevronUp);
    };
      

    moveTask.call(this);
    deleteTask.call(this);
    displayDeleteStrikethrough.call(this);
    clickonDeleteStrikethrough.call(this);
    displayChevron.call(this);
    clickonTaskDescription.call(this);
  }

  
  displayModifyTask.call(this);
  displayNewTask.call(this);
  displayNewProject.call(this);
  selectProjectBtn().selectOption.call(this);
  selectPriority.call(this);
  checkMultipleDropdown();
  selectProject.call(this);
  taskActions.call(this);
};

export default display;