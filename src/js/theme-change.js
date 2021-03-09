import '../templates/film-detail.hbs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
    footerDarktheme.classList.remove('dark-theme');
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

NProgress.start();
try {
  const cardTitle = document.querySelector('.card__title');
  console.log(cardTitle);
} catch (error) {
  console.log(error);
}
NProgress.done();

export {
  bodyRef,
  toggleRef,
  footerDarktheme,
  copyrighttDarkTheme,
  footerTextDarkTheme,
};
