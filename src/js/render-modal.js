import modalTemplate from '../templates/modal-film-detail.hbs';
import modalComponent from './components/modal-for-film';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Функция отрисовки модального окна
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  NProgress.start();

  try {
    // Выводит модалку
    modalComponent(modalMarkup);
  } catch (error) {
    console.error('Smth wrong with modal window' + error);
  }

  NProgress.done();
}
