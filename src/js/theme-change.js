import '../templates/film-detail.hbs';

const bodyRef = document.querySelector('body');
const toggleRef = document.querySelector('#theme-switch-toggle');
const footerDarktheme = document.querySelector('.footer');
const copyrighttDarkTheme = document.querySelector('.footer-text-js');
const footerTextDarkTheme = document.querySelector('.footer-span-js');
const footerLinkDarkTheme = document.querySelector('.footer-link-js');

toggleRef.addEventListener('change', event => {
  if (bodyRef.classList.contains('dark-theme')) {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
    footerDarktheme.classList.add('light-theme');
    copyrighttDarkTheme.classList.remove('dark-theme');
    footerTextDarkTheme.classList.remove('dark-theme');
  } else {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
    footerDarktheme.classList.add('dark-theme');
    copyrighttDarkTheme.classList.add('dark-theme');
    footerTextDarkTheme.classList.add('dark-theme');
  }
});

export {
  bodyRef,
  toggleRef,
  footerDarktheme,
  copyrighttDarkTheme,
  footerTextDarkTheme,
};
