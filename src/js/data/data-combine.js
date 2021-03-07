// Слияние полной информации о фильме
function dataCombine(films, allGenres) {
  return films.map(film => ({
    ...film,
    year: film.release_date ? film.release_date.split('-')[0] : '',
    genres: createGenres(film.genre_ids, allGenres),
  }));
}

// Создание нового свойства с жанрами
function createGenres(array, genres) {
  return array
    .map(id => genres.filter(element => element.id === id))
    .slice(0, 3)
    .flat();
}

export { dataCombine };
