import { renderLibraryCollection } from './render-collection';
import filterFilm from '../templates/header-library.hbs';
import clearLibrary from '../templates/no-film.hbs';
import api from './api/api-service';
import {
  formRef,
  headerRef,
  pageHomeRef,
  pageLabraryRef,
  gallery,
} from './references/refs';
import { load, save, remove } from './local-storage';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { addedClassButton, removedClassButton } from './make-active-button';
import { startPage } from './start-page';

const writeEvent = event => {
  NProgress.start();

  event.preventDefault();

  const markup = filterFilm();

  formRef.remove();

  headerRef.insertAdjacentHTML('beforeend', markup);
  headerRef.classList.add('header__library');
  pageHomeRef.classList.remove('current');
  pageLabraryRef.classList.add('current');

  const btnWatchedLib = document.querySelector('.js-btn-watched');
  const btnQueueLib = document.querySelector('.js-btn-queue');

  renderAllList();
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

function renderAllList() {
  gallery.innerHTML = '';

  const arrWatchId = load('watched');
  const arrQueueId = load('queue');
  const arrAllId = [...arrWatchId, ...arrQueueId];
  console.log(arrAllId);

  const clearMarkup = clearLibrary();

  if (!arrWatchId && !arrQueueId) {
    console.log('Пошли выберем тебе фильмы');
    gallery.insertAdjacentHTML('beforeend', clearMarkup);

    const btnGoHome = document.querySelector('.clear-list__link');
    btnGoHome.addEventListener('click', refreshPage);
  } else {
    for (let id of arrAllId) {
      api.getMovieById(id).then(data => {
        renderLibraryCollection(data);
      });
    }
  }
}
function refreshPage() {
  document.location.reload();
}

export { writeEvent, removeEvent };
