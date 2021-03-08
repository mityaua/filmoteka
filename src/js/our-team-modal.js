import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import teamTemplate from '../templates/our-team.hbs';
import team from '../team.json';
import errorModal from './components/modal-error';

// Refs

const modalContainer = document.querySelector('#js-team-modal');


modalContainer.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();

  NProgress.start();

  try {
    getTeamInfo(team);
  } catch (error) {
    errorModal();
    console.error('Smth wrong with team modal window' + error);
  }

  NProgress.done();
}
// Создаю функцию для получения данных с json
function getTeamInfo(teamId) {
  const teamMarkup = teamTemplate(teamId);
  const modalContent = basicLightbox.create(teamMarkup);

 modalContent.onclick =  modalContent.show();

  window.addEventListener('keydown',  closeModalByEsc);

  function closeModalByEsc(e) {
    if (e.code === 'Escape') {
      modalContent.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
  const btnCloseRef = document.querySelector('.close__button');
  btnCloseRef.addEventListener('click', closeModalbyBtn )
  function closeModalbyBtn() {
    modalContent.close();
    // снимаю слушателя события с кнопки
    btnCloseRef.removeEventListener('click', closeModalbyBtn)
  }
  
}


