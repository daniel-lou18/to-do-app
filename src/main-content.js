import app from "./app";

const generateTasks = function() {
  const [selectedProject] = [...document.querySelectorAll('input.sidebar-project')].filter(input => input.checked);
  document.querySelectorAll('.task').forEach(task => document.querySelector('.tasks-container').removeChild(task));
  console.log(selectedProject);
  const [project] = this.projects.filter(project => project.id === selectedProject.dataset.id);
  console.log(project);
  project.tasks.forEach((task, index) => {
    const html = `
    <div class="task" id="task-${index}" data-id=${task.id}>
      <input class="task-check" type="checkbox" id="check-${index}">
      <label class="task-label" for="check-${index}">
        <span class="custom-checkbox">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span class="task-text">${task._taskName}</span>
      </label>
      <button class="btn-svg list-actions move-up">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
      </button>
      <button class="btn-svg list-actions move-down">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
      </button>
      <button class="btn-svg list-actions edit-task">
        <svg class="todo-header-edit pen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      </button>
      <button class="btn-svg list-actions del-task">
        <svg class="todo-header-del trash" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
      </button>
      <p class="task-descr" id="task-0">${task._descr}</p>
      <div class="calendar-container">
        <svg class="task-calendar" style="width:15px;height:15px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
        </svg>
        <p class="task-calendar">19 oct</p>
      </div>
    </div>
    `;
    document.querySelector('.tasks-container').insertAdjacentHTML('beforeend', html);
  });
};

export default generateTasks;