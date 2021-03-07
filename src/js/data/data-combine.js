// Создание нового свойства с годом
function createYear(obj) {
  return obj.release_date ? obj.release_date.split('-')[0] : '';
}

// Создание нового свойства с жанрами
function createGenres(array, genres) {
  return array
    .map(id => genres.filter(element => element.id === id))
    .slice(0, 3)
    .flat();
}

// Слияние полной информации о фильме
function dataCombine(films, allGenres) {
  return films.map(film => ({
    ...film,
    year: createYear(film),
    genres: createGenres(film.genre_ids, allGenres),
  }));
}

export { dataCombine, createGenres, createYear };
