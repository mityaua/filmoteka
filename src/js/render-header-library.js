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

  clickWatched();
  // clickQueue();

  NProgress.done();
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
        renderLibraryCollection(data);
      });
    }
  }

  // function clickQueue() {
  //
  // }
}

export { writeEvent, removeEvent };
