import '../templates/film-detail.hbs';

const bodyRef = document.querySelector('body');
const toggleRef = document.querySelector('#theme-switch-toggle');
const textDarkTheme = document.querySelector('.card__title');
console.log(textDarkTheme);

toggleRef.addEventListener('change', event => {
  if (bodyRef.classList.contains('dark-theme')) {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
  } else {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
  }
});

export { bodyRef, toggleRef };
