import modalTemplate from '../templates/modal-film-detail.hbs';
// import modalComponent from './components/modal-for-film';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

//Refs for Modal
const modalBox = document.getElementById('modal');

//Listener for closing by ESC
window.addEventListener('keydown', modalClosinByEsc);

//Closing functions
function modalClosing() {
  modalBox.classList.remove('is-open');
}

function modalClosinByEsc(event) {
  if (event.code === 'Escape') {
    modalClosing();
  }
}

// Функция отрисовки модального окна по шаблону
export default function renderMovieModal(data) {
  const modalMarkup = modalTemplate(data);

  NProgress.start();

  try {
    // Выводит модалку
    // modalComponent(modalMarkup);
    modalBox.innerHTML = modalMarkup;
    modalBox.classList.add('is-open');
    const modalBackdrop = document.querySelector('.modal__backdrop');
    modalBackdrop.addEventListener('click', modalClosing);
  } catch (error) {
    console.error('Smth wrong with modal window' + error);
  }

  NProgress.done();
}