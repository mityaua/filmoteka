import { headerRef, pageLabraryRef } from '../references/refs';
import { writeEvent, removeEvent } from './render-header-library';

async function renderPageLibrary(event) {
  try {
    if (headerRef.classList.contains('header__library')) {
      event.preventDefault();
      return;
    }
    writeEvent(event);
    removeEvent(event);
  } catch (error) {
    console.error('Smth wrong with page "My library"' + error);
  }
}

pageLabraryRef.addEventListener('click', renderPageLibrary);
