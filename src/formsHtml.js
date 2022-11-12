const htmlNewFormProject = function() {
  return `
<form class="project-form modal new-project" id="task-0">
<div class="form-main">
<div class="form-text">
<input class="form-text" type="text" name="task-text" id="task-1" placeholder="Tâche" minlength="1" maxlength="60">
</div>
<div class="form-params">
<div class="form-color-container form-container">
<input type="checkbox" class="btn-form" data-id="" name="btn-color" id="btn-color">
<div class="btn-wrapper form-color">
<label class="btn-color" for="btn-color">
  <div class="btn-color">
    <svg class="form-color xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="crimson" stroke="crimson" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
    <span class="form-color"></span>
  </div>
</label>
</div>
<div class="color-input options-container">
<ul class="color-input list">
</ul>
</div>
</div>
</div>
</div>
<div class="form-save">
<button class="cancel-new-task cancel" type="button">Annnuler</button>
<button class="save-new-task save">Enregistrer</button>
</div>
</form>`
};


const htmlNewFormModal = function() {
    return `
<form class="task-form modal new-task" id="task-0">
<div class="form-main">
<div class="form-text">
<input class="form-text" type="text" name="task-text" id="task-1" placeholder="Tâche" minlength="1" maxlength="60">
</div>
<div class="form-descr">
<textarea class="form-descr" name="descr-1" id="descr-1" cols="30" rows="4" placeholder="Description" maxlength="300"></textarea>
</div>
<div class="form-params">
<button type="button" class="form-date">
<svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
<path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
</svg>
<span class="form-date">Échéance</span>
</button>
<div class="form-project-container form-container">
<input type="checkbox" class="btn-form" name="btn-projects" id="btn-projects">
<div class="btn-wrapper form-project">
  <label class="btn-projects" for="btn-projects">
    <div class="btn-pers-proj">
      <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
        <circle cx="12" cy="12" r="5"/>
      </svg>
      <span class="form-project">Courses</span>
    </div>
  </label>
</div>
<div class="project-input options-container">
<ul class="project-input list">
  <li class="project-input option inbox">
    <input class="project-option" type="radio" name="project-option" data-id= "${this.projects[0].id}" id="inbox" value="inbox" checked>
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
<div class="form-priority-container form-container">
<input type="checkbox" class="btn-form" data-id="" name="btn-priority" id="btn-priority">
<div class="btn-wrapper form-priority">
  <label class="btn-priority" for="btn-priority">
    <div class="btn-priority">
      <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="crimson" stroke="crimson" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
      <span class="form-priority"></span>
    </div>
  </label>
</div>
<div class="priority-input options-container">
<ul class="priority-input list">
</ul>
</div>
</div>
</div>
</div>
<div class="form-save">
<button class="cancel-new-task cancel" type="button">Annnuler</button>
<button class="save-new-task save">Enregistrer</button>
</div>
</form>`
};

const htmlFormModify = function() {
  return `<form class="task-form modify transparent" id="task-modify">
<div class="form-main">
<div class="form-text">
<input class="form-text" type="text" name="task-text" id="task-modify" placeholder="Tâche" minlength="1" maxlength="60">
</div>
<div class="form-descr">
<textarea class="form-descr" name="descr-1" id="descr-modify" cols="30" rows="4" placeholder="Description" maxlength="300"></textarea>
</div>
<div class="form-params">
<button type="button" class="form-date">
<svg class="form-date" style="width:15px;height:15px" viewBox="0 0 24 24">
<path fill="currentColor" d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" />
</svg>
<span class="form-date">19 oct</span>
</button>
<div class="form-project-container form-container">
<input type="checkbox" class="btn-form" name="btn-projects" id="btn-projects">
<div class="btn-wrapper form-project">
    <label class="btn-projects" for="btn-projects">
      <div class="btn-pers-proj">
        <svg class="list-dot" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="cornflowerblue" stroke="none" class="feather feather-circle">
          <circle cx="12" cy="12" r="5"/>
        </svg>
        <span class="form-project">Courses</span>
      </div>
    </label>
</div>
<div class="project-input options-container">
<ul class="project-input list">
  <li class="project-input option inbox">
    <input class="project-option" type="radio" name="project-option" data-id= "${this.projects[0].id}" id="inbox" value="inbox" checked>
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
<div class="form-priority-container form-container">
<input type="checkbox" class="btn-form" name="btn-priority" id="btn-priority">
<div class="btn-wrapper form-priority">
  <label class="btn-priority" for="btn-priority">
    <div class="btn-priority">
      <svg class="form-priority xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="crimson" stroke="crimson" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
      <span class="form-priority"></span>
    </div>
  </label>
</div>
<div class="priority-input options-container">
<ul class="priority-input list">
</ul>
</div>
</div>
</div>
</div>
<div class="form-save">
<button class="cancel-new-task" type="button">Annnuler</button>
<button class="save-new-task">Enregistrer</button>
</div>
  </form>`
}

export { htmlNewFormModal, htmlFormModify, htmlNewFormProject };