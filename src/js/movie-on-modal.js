import api from './api/api-service';
import renderMovieModal from './render-modal';
import errorModal from './components/modal-error';
import { gallery } from './references/refs';
import { load, save, remove } from './local-storage';

gallery.addEventListener('click', clickOnMovieHandler);

// Click Handler Function
function clickOnMovieHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
    return;
  }

  let movieId = e.target.dataset.id;

  fetchById(movieId);
}

// Outer fetch by ID
async function fetchById(id) {
  try {
    const movieId = await api.getMovieById(id);

    renderMovieModal(movieId);

    const btnQueue = document.querySelector('.btn__queue');
    const btnWatch = document.querySelector('.btn__watch');

    btnQueue.addEventListener('click', addQueueList);
    btnWatch.addEventListener('click', addWatchList);
  } catch (error) {
    errorModal();
    console.error('Smth wrong with outer fetch by ID' + error);
  }

  function addWatchList() {
    let watchList = [];
    let localWatchListJson = localStorage.getItem('watched');
    if (localWatchListJson) {
      watchList = [...JSON.parse(localWatchListJson)];
    }

    let queueList = [];
    let localQueueListJson = localStorage.getItem('queue');
    if (localQueueListJson) {
      queueList = [...JSON.parse(localQueueListJson)];
    }
    let queueSet = new Set(queueList);
    if (queueSet.has(id)) {
      remove('queue');
      let index = queueList.indexOf(id);
      queueList.splice(index, 1);
      console.log(queueList);
      save('queue', queueList);
      console.log(id + ' delete from queuelist');
    }

    const watchSet = new Set(watchList);
    if (watchSet.has(id)) {
      console.log('find duplicate');
    } else {
      console.log(id + ' added to watchlist');
      watchList.push(id);
      save('watched', watchList);
    }
  }

  function addQueueList() {
    let queueList = [];
    let localQueueListJson = localStorage.getItem('queue');
    if (localQueueListJson) {
      queueList = [...JSON.parse(localQueueListJson)];
    }

    let watchList = [];
    let localWatchListJson = localStorage.getItem('watched');
    if (localWatchListJson) {
      watchList = [...JSON.parse(localWatchListJson)];
    }
    let watchSet = new Set(watchList);
    if (watchSet.has(id)) {
      remove('watched');
      let index = watchList.indexOf(id);
      watchList.splice(index, 1);
      console.log(watchList);
      save('watched', watchList);
      console.log(id + ' delete from watchlist');
    }

    const queueSet = new Set(queueList);
    if (queueSet.has(id)) {
      console.log('find duplicate');
    } else {
      console.log(id + ' added to queuelist');
      queueList.push(id);
      save('queue', queueList);
    }
  }
}
