import modalTemplate from '../templates/modal-film-detail.hbs';
// import modalComponent from './components/modal-for-film';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const modalBox = document.getElementById('modal');

// Функция отрисовки модального окна по шаблону
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  NProgress.start();

  try {
    // Выводит модалку
    // modalComponent(modalMarkup);
    modalBox.innerHTML = modalMarkup;
    modalBox.classList.add('is-open')
  } catch (error) {
    console.error('Smth wrong with modal window' + error);
  }

  NProgress.done();
}
