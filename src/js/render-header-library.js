import filterFilm from '../templates/header-library.hbs';
import {
  formRef,
  headerRef,
  pageHome,
  pageLabraryRef,
  gallery,
} from './references/refs';
import { load, save, remove } from './local-storage';
import api from './api/api-service';
import renderCollection from './render-collection';
import { render } from 'nprogress';

const writeEvent = event => {
  event.preventDefault();
  const markup = filterFilm();

  formRef.remove();

  headerRef.insertAdjacentHTML('beforeend', markup);
  headerRef.classList.add('header__library');
  pageHome.classList.remove('current');
  pageLabraryRef.classList.add('current');

  clickWatched();
  // clickQueue();
};

const removeEvent = event => {
  pageLabraryRef.removeEventListener(event, writeEvent);
};

function clickWatched() {
  gallery.innerHTML = '';
  const btnWatchedLib = document.querySelector('.js-btn-watched');
  btnWatchedLib.addEventListener('click', renderWatched);

  function renderWatched() {
    const arrId = load('watched');
    console.log(arrId);
    for (let id of arrId) {
      api.getMovieById(id).then(data => {
        console.log(data);
        renderCollection(data);
      });
    }
  }

  // function clickQueue() {
  //
  // }
}

export { writeEvent, removeEvent };
