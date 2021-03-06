import modalTemplate from '../templates/modal-film-detail.hbs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Функция отрисовки модального окна по шаблону
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  NProgress.start();

  try {
    // Выводит модалку
    console.log(modalMarkup);
  } catch (error) {
    console.error('Smth wrong with modal window' + error);
  }
  
  NProgress.done();
}
