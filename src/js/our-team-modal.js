import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import teamTemplate from '../templates/our-team.hbs';
import team from '../team.json';
import {errorModal} from './components/notify';

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

  
  // modalContent.onclick =
    modalContent.show();
  //  document.body.style.overflow = 'hidden';

  window.addEventListener('keydown',  closeModalByEsc);

  function closeModalByEsc(e) {
    if (e.code === 'Escape') {
     modalContent.onclick = modalContent.close();
      window.removeEventListener('keydown', closeModalByEsc);
    }
  }
  const btnCloseRef = document.querySelector('.close__button');
  btnCloseRef.addEventListener('click', closeModalbyBtn);
  function closeModalbyBtn() {
    modalContent.close();
    // снимаю слушателя события с кнопки
    // document.body.style.overflow = '';
    btnCloseRef.removeEventListener('click', closeModalbyBtn);
  }
  // console.log('overflow=',document.body.style.overflow = '')
}


