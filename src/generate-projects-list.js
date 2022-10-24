function generateProjectsList(element) {
  const projectList = element;
  if (projectList.contains(document.querySelector('li.personal'))) return;
  this.projects.forEach((project, index) => {
    if (index > 0) {
      console.log(project)
      const projectHtml = `
      <li class="project-input option personal" data-id=${project.id}>
        <input class="project-option"type="radio" name="project-option" data-id = "${project.id}" id="project-${index}" value=${project._projectName}>
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

export default generateProjectsList;
