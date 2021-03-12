import '../../templates/film-detail.hbs';

const bodyRef = document.querySelector('body');
const toggleRef = document.querySelector('#theme-switch-toggle');
const footerDarktheme = document.querySelector('.footer');

toggleRef.addEventListener('change', event => {
  if (bodyRef.classList.contains('dark-theme')) {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
    footerDarktheme.classList.remove('dark-theme');
  } else {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
    footerDarktheme.classList.add('dark-theme');
  }
});

export { bodyRef, toggleRef, footerDarktheme };
