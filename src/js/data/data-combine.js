// Слияние полной информации о фильме
function dataCombine(films, allGenres) {
  return films.map(film => ({
    ...film,
    year: film.release_date ? film.release_date.split('-')[0] : '',
    genres: film.genre_ids
      .map(id => allGenres.filter(element => element.id === id))
      .slice(0, 3)
      .flat(),
  }));
}

// Отделить формирование нового ключа года и жанра

export { dataCombine };