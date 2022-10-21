const initInbox = function() {
  const input = document.querySelector('input#sidebar-inbox');
  input.setAttribute('data-id', `${this.projects[0].id}`);
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

export default generateProjects;

