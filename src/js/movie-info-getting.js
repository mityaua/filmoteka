// ===== Get movie Info by Click =====

//Refs

const collectionBox = document.querySelector('.collection');
// const collectionItem = () => document.querySelectorAll('.collection__item');

// setTimeout(() => {
// collectionItem().addEventListener('click', e => {
//   e.preventDefault();
//   console.log(e.target);
//   console.log(e.currentTarget);
// });
// }, 500);

//Listener

collectionBox.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.currentTarget);
});
