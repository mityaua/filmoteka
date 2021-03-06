import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/src/styles/main.scss';



const container = document.querySelector('#js-team-modal');

container.addEventListener('click', openModal);
window.addEventListener('keydown', closeModalHandler);



function openModal(e) {
  e.preventDefault();
  const content = basicLightbox.create(`<img width="1400" height="900" src="https://placehold.it/1400x900">  `
  );
  content.show();
}

function closeModalHandler(e) {
  if (e.code === 'Escape') {
    modal.close();
    window.removeEventListener('keydown', closeModalHandler);
  }
  }