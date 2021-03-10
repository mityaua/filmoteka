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

const writeEvent = event => {
  NProgress.start();

  event.preventDefault();

  const markup = filterFilm();

  formRef.remove();

  headerRef.insertAdjacentHTML('beforeend', markup);
  headerRef.classList.add('header__library');
  pageHome.classList.remove('current');
  pageLabraryRef.classList.add('current');

  clickQueue();
  clickWatched();

  NProgress.done();
};

const removeEvent = event => {
  pageLabraryRef.removeEventListener(event, writeEvent);
};

function clickWatched() {
  const btnWatchedLib = document.querySelector('.js-btn-watched');
  btnWatchedLib.addEventListener('click', renderWatched);

  renderWatched();
}

function clickQueue() {
  const btnQueueLib = document.querySelector('.js-btn-queue');
  btnQueueLib.addEventListener('click', renderQueue);

  renderQueue();
}

function renderQueue() {
  gallery.innerHTML = '';
  const arrId = load('queue');
  console.log(arrId);
  for (let id of arrId) {
    api.getMovieById(id).then(data => {
      renderLibraryCollection(data);
    });
  }
}

function renderWatched() {
  gallery.innerHTML = '';
  const arrId = load('watched');
  console.log(arrId);
  for (let id of arrId) {
    api.getMovieById(id).then(data => {
      renderLibraryCollection(data);
    });
  }
}

export { writeEvent, removeEvent, renderWatched };
