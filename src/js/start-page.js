import { renderCollection } from './render-collection';
import api from './api/api-service';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {errorModal} from './components/notify';

document.addEventListener('DOMContentLoaded', startPage);

// Функция отрисовки трендов на главной
async function startPage() {
  NProgress.start();

  try {
    const data = await api.getFullTrendData();

    const movies = data.fullTrendData;
    const totalPages = data.totalPages;
    const totalResults = data.totalResults;

    renderCollection(movies);
  } catch (error) {
    errorModal();
    console.error('Smth wrong with start page fetch' + error);
  }

  NProgress.done();
}

export { startPage }
