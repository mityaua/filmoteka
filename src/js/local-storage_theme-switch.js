import { bodyRef, toggleRef, footerDarktheme } from './theme-change';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');

toggleRef.addEventListener('change', event => {
  localStorage.setItem('theme', bodyRef.classList);
});

updataTheme();
checkboxChecked();
updataThemeFooter();

function updataTheme() {
  if (savedTheme) {
    bodyRef.classList = savedTheme;
  }
}

function checkboxChecked() {
  if (savedTheme === 'dark-theme') {
    toggleRef.setAttribute('checked', true);
  }
}

function updataThemeFooter() {
  if (savedTheme === 'dark-theme') {
    footerDarktheme.classList.add('dark-theme');
  }
}
