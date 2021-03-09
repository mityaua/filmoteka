import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import teamTemplate from '../templates/our-team.hbs';
import team from '../team.json';
import {errorModal} from './components/notify';

const modalContainer = document.querySelector('#js-team-modal');
const btnCloseRef = document.querySelector('button[data-close-modal');

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

function getTeamInfo(teamId) {
  const teamMarkup = teamTemplate(teamId);
  const modalContent = basicLightbox.create(teamMarkup);

  modalContent.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modalContent.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
