import modalTemplate from '../../templates/modal-film-detail.hbs';
import prodCompany from '../../templates/production-company.hbs';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { errorModal } from '../components/notify';

import { modalBox } from '../references/refs';

// Функция отрисовки модального окна по шаблону
export default function renderMovieModal(data) {
  NProgress.start();

  const modalMarkup = modalTemplate(data);

  try {
    modalBox.innerHTML = modalMarkup;

    modalBox.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    writeLogoProdCompany(data);

    const modalBackdrop = document.querySelector('.modal__backdrop');
    const closeButton = document.querySelector('[data-action="close-modal"]');

    modalBackdrop.addEventListener('click', modalClosing);
    closeButton.addEventListener('click', modalClosing);
    window.addEventListener('keydown', modalClosinByEsc);
  } catch (error) {
    errorModal();
    console.error('Smth wrong with modal window' + error);
  }

  NProgress.done();
}

// Закрытие модалки
function modalClosing() {
  modalBox.classList.remove('is-open');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', modalClosinByEsc);
}

// Закрытие модалки по Escape
function modalClosinByEsc(event) {
  if (event.code === 'Escape') {
    modalClosing();
  }
}

// Отрисовка логотипов киностудий
function writeLogoProdCompany({ production_companies, overview }) {
  if (overview.length > 500) {
    return;
  }

  const bun = document.querySelector('.modal__container');
  const mainProdComp = production_companies.find(
    elem => elem.logo_path !== null,
  );
  const markup = prodCompany(mainProdComp);

  bun.insertAdjacentHTML('beforeend', markup);
}
