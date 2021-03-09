import allGenres from '../data/genres.json';

// Создание нового свойства с годом (для всех)
function createYear(obj) {
  return obj.release_date ? obj.release_date.split('-')[0] : '';
}

// Создание нового свойства с жанрами для трендов
function createGenresFromTrend(array, genres) {
  return array
    .map(id => genres.filter(element => element.id === id))
    .slice(0, 3)
    .flat();
}

// Создание нового свойства с жанрами для запроса по ID фильма
function createGenresFromID(array) {
  return array.genres
    .map(genre => genre.name)
    .slice(0, 3)
    .flat();
}

// Слияние полной информации о фильме для трендов
function dataCombine(films, allGenres) {
  return films.map(film => ({
    ...film,
    year: createYear(film),
    genres: createGenresFromTrend(film.genre_ids, allGenres),
  }));
}

// Извлечение локальных жанров из json файла
function getGenres() {
    const { genres } = allGenres;
    return genres;
  }

export {
  dataCombine,
  createGenresFromTrend,
  createGenresFromID,
  createYear,
  getGenres,
};
