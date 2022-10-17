const generateProjects = function(element) {
  this.projects.forEach((project, index) => {
    if (index > 0) {
      console.log(project)
      const projectHtml = `
      <li class="sidebar-project sidebar-personal" data-id=${project._id}>
        <input type="radio" name="project-option" id="sidebar-project-${index}" value=${project._projectName}>
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
};


const generateSideBar = function() {
  console.log(this);
  generateProjects.call(this, document.querySelector('.personal-projects-list'));
};

const updateSidebarProjects = function() {
  document.querySelectorAll('li.sidebar-personal').forEach(el => document.querySelector('.personal-projects-list').removeChild(el));
  generateSideBar();
}
export {generateSideBar as default, updateSidebarProjects};

