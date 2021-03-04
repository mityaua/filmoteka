import renderCollection from './render-collection';
import trendApi from './api/trending-movies';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

document.addEventListener('DOMContentLoaded', startPage);

// Функция отрисовки трендов на главной
async function startPage() {
  try {
    NProgress.start();

    const trendMovies = await trendApi.getFullTrendData();

    renderCollection(trendMovies);

    NProgress.done();
  } catch (error) {
    console.log(error);
  }
}
