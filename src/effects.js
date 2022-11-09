const closeDisplay = function(elToToggle, elRemoveFrom, elToRemove) {
  elToToggle?.classList.toggle('hidden');
  elRemoveFrom.removeChild(elToRemove);
};

const effects = {
  fadeIn(el) {
    setTimeout(() => {
      el.classList.toggle('transparent');
      el.classList.toggle('fade-in');
    }, 10)
    setTimeout(() => {
      el.classList.toggle('fade-in');
    }, 1000)
  },

  fadeInB(el) {
    el.classList.add('transparent');
    setTimeout(() => {
      el.classList.add('fade-in');
    }, 10)
    setTimeout(() => {
      el.classList.remove('fade-in');
      el.classList.remove('transparent');
    }, 1000)
  },

  fadeOut(elToFade, elToToggle, elRemoveFrom, elToRemove) {
    elToFade.classList.toggle('fade-out');
    setTimeout(() => {
      closeDisplay(elToToggle, elRemoveFrom, elToRemove)
      elToFade?.classList.toggle('transparent');
      elToFade?.classList.toggle('fade-out');
    }, 510);
  },

  fadeDown(el) {
    el.classList.add('fade-down');
  },

  fadeUp(el) {
    el.classList.add('fade-up');
  },
};

export default effects

