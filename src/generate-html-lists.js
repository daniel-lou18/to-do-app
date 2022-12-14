const initInbox = function() {
  const input = document.querySelector('input#sidebar-inbox');
  const count = document.querySelector('.inbox-count');
  input.setAttribute('data-id', this.projects[0].id);
  count.textContent = this.projects[0].tasks.length;
};

const fadeInB = function(el) {
  el.classList.add('transparent');
  setTimeout(() => {
    el.classList.add('fade-in');
  }, 10)
  setTimeout(() => {
    el.classList.remove('fade-in');
    el.classList.remove('transparent');
  }, 1000)
};

const generateProjects = function() {
  initInbox.call(this);
  const element = document.querySelector('.personal-projects-list');
  const [activeProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  document.querySelectorAll('li.sidebar-personal').forEach(el => document.querySelector('.personal-projects-list').removeChild(el));
  this.projects.forEach((project, index) => {
    if (index > 0) {
      const projectHtml = `
      <li class="sidebar-project sidebar-personal" data-id=${project.id}>
        <input class="sidebar-project" data-id=${project.id} type="radio" name="project-option" id="sidebar-project-${index}" value=${project._projectName}>
        <label class="sidebar-project project" for="sidebar-project-${index}">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill=${project._color} stroke="none" class="feather feather-circle">
            <circle cx="12" cy="12" r="5"/>
          </svg>
          <span class="sidebar-project title">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
          <span class="sidebar-project count">${project.tasks.length}</span>
        </label>
      </li>
      `;
      element.insertAdjacentHTML('beforeend', projectHtml);
    }
  });
  const [newActiveProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.id === activeProject?.id);
  activeProject ? newActiveProject.checked = true : document.querySelector('input.sidebar-project').checked = true;
};

const generateTasks = function() {
  const [selectedProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  document.querySelectorAll('.task-wrapper').forEach(task => document.querySelector('.tasks-container').removeChild(task));
  const [project] = this.projects.filter(project => project.id === selectedProject.dataset.id);
  project.tasks.forEach((task, index) => {
    const html = `
    <div class="task-wrapper">
      <div class="task" id="task-${index}" data-id=${task.id}>
        <input class="task-check" type="checkbox" id="check-${index}" data-id=${task.id}>
        <label class="task-label" for="check-${index}">
          <span class="custom-checkbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke=${task._priorityColorName} stroke-width="3" stroke-linecap="square" stroke-linejoin="sqaure" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
          </span>
          <span class="task-text">${task._taskName}</span>
        </label>
        <button class="btn-svg list-actions move move-up">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
        </button>
        <button class="btn-svg list-actions move move-down">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
        </button>
        <button class="btn-svg list-actions edit-task">
          <svg class="todo-header-edit pen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </button>
        <button class="btn-svg list-actions del-task">
          <svg class="todo-header-del trash" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
        <div class="description-container">
          <p class="task-descr" data-task-id=${task.id} data-project-id=${task._project}>${task.shortenTaskDescr()}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
        <div class="calendar-container">
          <svg class="task-calendar" style="width:15px;height:15px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
          </svg>
          <p class="task-calendar">19 oct</p>
        </div>
      </div>
    </div>
    `;
    document.querySelector('.tasks-container').insertAdjacentHTML('beforeend', html);
  });
};


function generateProjectsList(element) {
  if (element.contains(document.querySelector('li.personal'))) return;
  this.projects.forEach((project, index) => {
    if (index > 0) {
      const projectHtml = `
      <li class="project-input option personal" data-id=${project.id}>
        <input class="project-option option" type="radio" name="project-option" data-id = "${project.id}" id="project-${index}" value=${project._projectName}>
        <label for="project-${index}">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill=${project._color} stroke=${project._color} class="feather feather-circle">
            <circle cx="12" cy="12" r="5"/>
          </svg>
          <span class="project-input option">${project._projectName[0].toUpperCase()}${project._projectName.slice(1).toLowerCase()}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
        </label>
      </li>
      `;
      element.insertAdjacentHTML('beforeend', projectHtml);
    }
  });
};

function generatePriorityList(element) {
  if (element.contains(document.querySelector('li.priority-item'))) return;
  for (let i = 1; i < 5; i++) {
    let html = `
      <li class="priority-input option priority-item" data-id="">
        <input class="priority-option option" type="radio" name="priority-option" data-id = "" id="priority-${i}" value="${i}">
        <label for="priority-${i}">
          <svg class="priority-option xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="crimson" stroke="crimson" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
          </svg>
          <span class="priority-input option">Priority ${i}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
        </label>
      </li>
      `;
    if (i === 2) html = html.replaceAll("crimson", "darkorange");
    if (i === 3) html = html.replaceAll("crimson", "cornflowerblue");
    if (i === 4) {
      html = html
        .replace('fill="crimson"', 'fill="none"')
        .replace('stroke="crimson"', 'stroke="black"');
    };

    element.insertAdjacentHTML('beforeend', html);
  };
};

function generateProjectColorList(element) {
  const setCircleColors = function(i, index, colorName) {
    if (i === index) {
      let html = `
      <li class="color-input option color-item" data-id="">
        <input class="color-option option" type="radio" name="color-option" data-id = "" id="color-${colorName}" value="${colorName}">
        <label for="color-${colorName}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="maroon" stroke="maroon" class="feather feather-circle">
            <circle cx="10" cy="10" r="5"/>
          </svg>
          <span class="color-input option" id="${colorName}">colorName</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
        </label>
      </li>
      `;
      const capitalColorName = colorName[0].toUpperCase() + colorName.slice(1);
      html = html.replaceAll("maroon", colorName);
      html = html.replaceAll("colorName", capitalColorName);
      element.insertAdjacentHTML('beforeend', html);
    };
  }
  if (element.contains(document.querySelector('li.color-item'))) return;
  for (let i = 1; i < 19; i++) {
    setCircleColors(i, 2, "red");
    setCircleColors(i, 3, "pink");
    setCircleColors(i, 4, "brown");
    setCircleColors(i, 5, "orange");
    setCircleColors(i, 6, "peru");
    setCircleColors(i, 7, "olive");
    setCircleColors(i, 8, "yellow");
    setCircleColors(i, 9, "gold");
    setCircleColors(i, 10, "lime");
    setCircleColors(i, 11, "green");
    setCircleColors(i, 12, "turquoise");
    setCircleColors(i, 13, "teal");
    setCircleColors(i, 14, "blue");
    setCircleColors(i, 15, "purple");
    setCircleColors(i, 16, "black");
    setCircleColors(i, 17, "silver");
    setCircleColors(i, 18, "grey");
  };
};

export { generateProjects, generateTasks, generateProjectsList, generatePriorityList, generateProjectColorList };
