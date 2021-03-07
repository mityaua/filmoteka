import {renderCollection} from './render-collection';
import trendApi from './api/api-service';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import errorModal from './components/modal-error';

document.addEventListener('DOMContentLoaded', startPage);

// Функция отрисовки трендов на главной
async function startPage() {
  NProgress.start();

  try {
    const trendMovies = await trendApi.getFullTrendData();
    renderCollection(trendMovies);
  } catch (error) {
    errorModal();
    console.error('Smth wrong with start page fetch' + error);
  }

  NProgress.done();
}
