const classAccent = 'button__active';

const addedClassButton = currentAdd => {
  if (currentAdd.classList.contains(classAccent)) {
    return;
  }
  currentAdd.classList.add(classAccent);
};

const removedClassButton = currentRemove => {
  if (!currentRemove.classList.contains(classAccent)) {
    return;
  }
  currentRemove.classList.remove(classAccent);
};

export { addedClassButton, removedClassButton };
