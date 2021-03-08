const formRef = document.getElementById('search-form');
const inputRef = formRef.querySelector('.search__input');
const gallery = document.querySelector('.collection');
const headerRef = document.querySelector('.header');
const pageHome = document.querySelector('.menu__link-home');
const pageLabraryRef = headerRef.querySelector('.menu__link-library');
const modalBackdrop = document.querySelector('.modal__backdrop');
const modalBox = document.getElementById('modal');
const headerWarning = document.querySelector('.warning-notification');

export {
  formRef,
  inputRef,
  gallery,
  headerRef,
  pageHome,
  pageLabraryRef,
  modalBackdrop,
  modalBox,
  headerWarning,
};
