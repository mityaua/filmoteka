import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import teamTemplate from '../templates/our-team.hbs';
import team from '../team.json';

const modalContainer = document.querySelector('#js-team-modal');

modalContainer.addEventListener('click', openModal);
function openModal(e) {
  e.preventDefault();
  getTeamInfo(team);
}


function getTeamInfo(teamId) {
  const teamMarkup = teamTemplate(teamId);
  const modalContent = basicLightbox.create(teamMarkup
  );
  modalContent.show();
  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
  if (e.code === 'Escape') {
    content.close();
    window.removeEventListener('keydown', closeModalHandler);
    }

  }
}




