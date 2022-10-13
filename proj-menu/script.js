document.addEventListener('click', selectOption)

function selectOption(e) {
  const checkedProject = e.target.closest('input[type="radio"]');
  if (checkedProject && checkedProject.checked === true) {
      const btnProjects = checkedProject.closest('.form-project-container').querySelector('input#btn-projects');
      console.log(checkedProject);
      

      btnProjects.checked = false;
    }

}