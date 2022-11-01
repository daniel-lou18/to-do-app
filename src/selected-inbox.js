import { generateTasks } from "./generate-html-lists";

const setCircleCheckboxTask = function() {
  const allCircleSpans = document.querySelectorAll('span.custom-checkbox');
  const allTasks = this.projects[0].tasks;
  console.log(allTasks);
  allCircleSpans.forEach((span, i) => {
    span.style.borderColor = allTasks[i]._priorityColor;
    span.style.backgroundColor = allTasks[i]._priorityBackgroundColor;
  });
};

const selectedInbox = function() {
  const projectInput = document.querySelector('input#sidebar-inbox');
  const projectLabel = projectInput.nextElementSibling;
  const svg = projectLabel.querySelector('svg');
  
  function displaySelectedProject() {
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
    displaySelectedProject.call(this);
    generateTasks.call(this);
    setCircleCheckboxTask.call(this);
  };
};

export default selectedInbox;