import modalTemplate from '../templates/modal-film-detail.hbs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import errorModal from './components/modal-error';
import { modalBox } from './references/refs';

//Listener for closing by ESC
window.addEventListener('keydown', modalClosinByEsc);

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
    errorModal();
    console.error('Smth wrong with modal window' + error);
  }

  NProgress.done();
}

//Closing functions
function modalClosing() {
  modalBox.classList.remove('is-open');
}

function modalClosinByEsc(event) {
  if (event.code === 'Escape') {
    modalClosing();
  }
}
