import './MoviesCardList.css';

import { MoviesCard } from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMovies }) {
  const moviesList = movies.map((movie) => {
    const { nameRU, duration, image } = movie;

    const imageUrl = image.url
      ? `https://api.nomoreparties.co/${image.url}`
      : image;

    const isSaved =
      !savedMovies ||
      savedMovies?.some((savedMovie) => savedMovie.movieId === movie.id);

    return (
      <MoviesCard
        key={movie[savedMovies ? 'id' : '_id']}
        nameRU={nameRU}
        duration={duration}
        image={imageUrl}
        isSaved={isSaved}
      />
    );
  });

  return (
    <section className='movies'>
      <ul className='list movies__list'>{moviesList}</ul>
      {movies.length > 3 && (
        <button
          type='button'
          className='movies__more-btn'>
          Ещё
        </button>
      )}
    </section>
  );
}

export { MoviesCardList };
