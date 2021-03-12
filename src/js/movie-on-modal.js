import api from './api/api-service';
import renderMovieModal from './render/render-modal';
import { errorModal } from './components/notify';
import { gallery } from './references/refs';
import { load, save, remove } from './storage/local-storage';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

gallery.addEventListener('click', clickOnMovieHandler);

// Click Handler Function
async function clickOnMovieHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
    return;
  }

  let movieId = e.target.dataset.id;
  await fetchById(movieId);
  textModalBtn(movieId);
}

async function textModalBtn(id) {
  const btnQueue = document.querySelector('.btn__queue');
  const btnWatch = document.querySelector('.btn__watch');
  if (inList(id, 'watched')) {
    // console.log('есть такой в watched');
    btnWatch.textContent = 'Added to watched';
    btnWatch.disabled = true;
    function changeText() {
      btnWatch.disabled = false;
      btnWatch.textContent = 'Remove from watched';
      btnWatch.classList.add('active');
    }
    setTimeout(changeText, 1000);
  } else {
    // console.log('нет такого в watched');
    btnWatch.textContent = 'Add to watched';
    btnWatch.classList.remove('active');
    // console.log('удаляем класс active');
    btnWatch.disabled = false;
  }

  if (inList(id, 'queue')) {
    // console.log('есть такой в queue');
    btnQueue.textContent = 'Added to queue';
    btnQueue.disabled = true;
    function changeText() {
      btnQueue.disabled = false;
      btnQueue.textContent = 'Remove from queue';
      btnQueue.classList.add('active');
    }
    setTimeout(changeText, 1000);
  } else {
    // console.log('нет такого в queue');
    btnQueue.textContent = 'Add to queue';
    btnQueue.classList.remove('active');
    btnQueue.disabled = false;
  }
}

// Outer fetch by ID
async function fetchById(id) {
  NProgress.start();

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
    const btnWatch = document.querySelector('.btn__watch');
    if (btnWatch.classList.contains('active')) {
      removeFromWatchedList(id);
    } else {
      let watchList = [];
      let localWatchListJson = load('watched');
      if (localWatchListJson) {
        watchList = [...localWatchListJson];
      }

      let queueList = [];
      let localQueueListJson = load('queue');
      if (localQueueListJson) {
        queueList = [...localQueueListJson];
      }
      let queueSet = new Set(queueList);
      if (queueSet.has(id)) {
        remove('queue');
        let index = queueList.indexOf(id);
        queueList.splice(index, 1);
        save('queue', queueList);
      }

      const watchSet = new Set(watchList);
      if (watchSet.has(id)) {
        textModalBtn(id);
      } else {
        watchList.push(id);
        save('watched', watchList);
        textModalBtn(id);
      }
    }
  }

  function removeFromWatchedList(id) {
    console.log('удаляем из watched');
    let watchList = [];
    let localWatchListJson = load('watched');
    if (localWatchListJson) {
      watchList = [...localWatchListJson];
    }

    remove('watched');
    let index = watchList.indexOf(id);
    watchList.splice(index, 1);
    save('watched', watchList);

    textModalBtn();
  }

  function removeFromQueueList(id) {
    console.log('удаляем из queue');
    let queueList = [];
    let localQueueListJson = load('queue');
    if (localQueueListJson) {
      queueList = [...localQueueListJson];
    }

    remove('queue');
    let index = queueList.indexOf(id);
    queueList.splice(index, 1);
    save('queue', queueList);

    textModalBtn();
  }

  function addQueueList() {
    const btnQueue = document.querySelector('.btn__queue');
    if (btnQueue.classList.contains('active')) {
      removeFromQueueList(id);
    } else {
      let queueList = [];
      let localQueueListJson = load('queue');
      if (localQueueListJson) {
        queueList = [...localQueueListJson];
      }

      let watchList = [];
      let localWatchListJson = load('watched');
      if (localWatchListJson) {
        watchList = [...localWatchListJson];
      }
      let watchSet = new Set(watchList);
      if (watchSet.has(id)) {
        remove('watched');
        let index = watchList.indexOf(id);
        watchList.splice(index, 1);
        save('watched', watchList);
      }

      const queueSet = new Set(queueList);
      if (queueSet.has(id)) {
        textModalBtn(id);
      } else {
        queueList.push(id);
        save('queue', queueList);
        textModalBtn(id);
      }
    }
  }

  NProgress.done();
}

function inList(id, list) {
  let arrList = [];
  let localListJson = load(list);
  if (localListJson) {
    arrList = [...localListJson];
  }
  const listSet = new Set(arrList);
  return listSet.has(id);
}
