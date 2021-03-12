import { renderLibraryCollection } from './render-collection';
import filterFilm from '../../templates/header-library.hbs';
import clearLibrary from '../../templates/no-film.hbs';

import api from '../api/api-service';

import { load, save, remove } from '../storage/local-storage';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import {
  formRef,
  headerRef,
  pageHomeRef,
  pageLabraryRef,
  gallery,
  pagiCont,
  headerWarning,
} from '../references/refs';
import { addedClassButton, removedClassButton } from '../components/make-active-button';

const writeEvent = event => {
  NProgress.start();

  event.preventDefault();

  const markup = filterFilm();

  formRef.remove();

  headerRef.insertAdjacentHTML('beforeend', markup);
  headerRef.classList.add('header__library');
  pageHomeRef.classList.remove('current');
  pageLabraryRef.classList.add('current');
  headerWarning.classList.add('visually-hidden');
  pagiCont.classList.add('opacity');

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
    // console.log(arrId);

    addedClassButton(btnWatchedLib);
    removedClassButton(btnQueueLib);
    if (!arrId || arrId.length === 0) {
      plugLib();
    } else {
      for (let id of arrId) {
        api.getMovieById(id).then(data => {
          renderLibraryCollection(data);
        });
      }
    }
  }
}

function clickQueue(btnWatchedLib, btnQueueLib) {
  btnQueueLib.addEventListener('click', renderQueue);

  function renderQueue() {
    gallery.innerHTML = '';
    const arrId = load('queue');
    // console.log(arrId);

    addedClassButton(btnQueueLib);
    removedClassButton(btnWatchedLib);
    if (!arrId || arrId.length === 0) {
      plugLib();
    } else {
      for (let id of arrId) {
        api.getMovieById(id).then(data => {
          renderLibraryCollection(data);
        });
      }
    }
  }
}

function renderAllList() {
  gallery.innerHTML = '';
  let arrWatchId = [];
  let arrQueueId = [];
  if (load('watched')) {
    arrWatchId = load('watched');
  }
  if (load('queue')) {
    arrQueueId = load('queue');
  }
  const arrAllId = [...arrWatchId, ...arrQueueId];

  if (arrWatchId.length === 0 && arrQueueId.length === 0) {
    plugLib();
  } else {
    for (let id of arrAllId) {
      api.getMovieById(id).then(data => {
        // console.log(id);
        renderLibraryCollection(data);
      });
    }
  }
}

function refreshPage() {
  document.location.reload();
}

function plugLib() {
  const clearMarkup = clearLibrary();
  // console.log('Пошли выберем тебе фильмы');
  gallery.insertAdjacentHTML('beforeend', clearMarkup);

  const btnGoHome = document.querySelector('.clear-list__link');
  btnGoHome.addEventListener('click', refreshPage);
}
export { writeEvent, removeEvent };
