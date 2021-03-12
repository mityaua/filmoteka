import api from './api/api-service';
import { renderCollection } from './render/render-collection';
import { dataCombine, getGenres } from './data/data-combine';
import { currentPage, defineResultsPerPage } from './components/pagination';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { errorModal } from './components/notify';

document.addEventListener('DOMContentLoaded', startPage);

// Функция отрисовки трендов на главной
async function startPage() {
  NProgress.start();

  try {
    const data = await api.getTrendData(currentPage);

    const movies = data.results;

    const allGenres = getGenres();
    const fullTrendData = dataCombine(movies, allGenres);
    const size = defineResultsPerPage();

    renderCollection(cutItems(fullTrendData, size));
  } catch (error) {
    errorModal();
    console.error('Smth wrong with start page fetch' + error);
  }

  NProgress.done();
}

function cutItems(array, number) {
  return array.slice(0, number);
}

// Рефреш страницы при изменении ширины вьюпорта спустя секудну
// window.onresize = function () {
//   setTimeout(() => {
//     location.reload();
//   }, 1000);
// };

export { startPage };
