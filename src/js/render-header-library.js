import filterFilm from '../templates/header-library.hbs';
import {
  formRef,
  headerRef,
  pageHome,
  pageLabraryRef,
} from './references/refs';

const writeEvent = event => {
  event.preventDefault();
  const markup = filterFilm();

  formRef.remove();

  headerRef.insertAdjacentHTML('beforeend', markup);
  headerRef.classList.add('header__library');
  pageHome.classList.remove('current');
  pageLabraryRef.classList.add('current');
};

const removeEvent = event => {
  pageLabraryRef.removeEventListener(event, writeEvent);
};

export { writeEvent, removeEvent };
