import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';
import teamTemplate from '../templates/our-team.hbs';
import team from '../team.json';


function getTeamInfo(id) {
   
  
 }


const container = document.querySelector('#js-team-modal');

container.addEventListener('click', openModal);
window.addEventListener('keydown', closeModalHandler);


function openModal(e) {
  e.preventDefault();
  const teamMarkup = teamTemplate(team);
 console.log(teamMarkup);
  const content = basicLightbox.create(teamMarkup
  );
  
  content.show();
}


function closeModalHandler(e) {
  if (e.code === 'Escape') {
    content.close();
    window.removeEventListener('keydown', closeModalHandler);
  }
  }