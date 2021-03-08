const formRef = document.getElementById('search-form');
// const inputRef = formRef.querySelector('.search__input'); было
const inputRef = document.querySelector('.search__input'); // стало
const gallery = document.querySelector('.collection');
const headerRef = document.querySelector('.header');
const pageHome = document.querySelector('.menu__link-home');
// const pageLabraryRef = headerRef.querySelector('.menu__link-library'); было
const pageLabraryRef = document.querySelector('.menu__link-library'); // стало
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
