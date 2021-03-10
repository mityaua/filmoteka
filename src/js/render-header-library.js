import { renderLibraryCollection } from './render-collection';
import filterFilm from '../templates/header-library.hbs';
import api from './api/api-service';
import {
  formRef,
  headerRef,
  pageHome,
  pageLabraryRef,
  gallery,
} from './references/refs';
import { load, save, remove } from './local-storage';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { addedClassButton, removedClassButton } from './make-active-button';

const writeEvent = event => {
  NProgress.start();

  event.preventDefault();

  const markup = filterFilm();

  formRef.remove();

  headerRef.insertAdjacentHTML('beforeend', markup);
  headerRef.classList.add('header__library');
  pageHome.classList.remove('current');
  pageLabraryRef.classList.add('current');

  const btnWatchedLib = document.querySelector('.js-btn-watched');
  const btnQueueLib = document.querySelector('.js-btn-queue');

  clickWatched(btnWatchedLib, btnQueueLib);
  clickQueue(btnWatchedLib, btnQueueLib);

  NProgress.done();
};

const removeEvent = event => {
  pageLabraryRef.removeEventListener(event, writeEvent);
};

function clickWatched(btnWatchedLib, btnQueueLib) {
  btnWatchedLib.addEventListener('click', renderWatched);

  function renderWatched() {
    gallery.innerHTML = '';
    const arrId = load('watched');
    console.log(arrId);

    addedClassButton(btnWatchedLib);
    removedClassButton(btnQueueLib);

    for (let id of arrId) {
      api.getMovieById(id).then(data => {
        renderLibraryCollection(data);
      });
    }
  }
}

function clickQueue(btnWatchedLib, btnQueueLib) {
  btnQueueLib.addEventListener('click', renderQueue);

  function renderQueue() {
    gallery.innerHTML = '';
    const arrId = load('queue');
    console.log(arrId);

    addedClassButton(btnQueueLib);
    removedClassButton(btnWatchedLib);

    for (let id of arrId) {
      api.getMovieById(id).then(data => {
        renderLibraryCollection(data);
      });
    }
  }
}

export { writeEvent, removeEvent };
