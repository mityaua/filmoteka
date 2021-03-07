import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import teamTemplate from '../templates/our-team.hbs';
import team from '../team.json';

// const teamMarkup = teamTemplate;
// // console.log(teamMarkup);



const container = document.querySelector('#js-team-modal');

container.addEventListener('click', openModal);
window.addEventListener('keydown', closeModalHandler);


function openModal(e) {
  e.preventDefault();
  const content = basicLightbox.create(`<div class="team__container">
   </div>`
  );
  content.show();
}


function closeModalHandler(e) {
  if (e.code === 'Escape') {
    content.close();
    window.removeEventListener('keydown', closeModalHandler);
  }
  }