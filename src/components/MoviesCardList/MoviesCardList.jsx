import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMovies }) {
  /**
   *  для тестировани вёрстки, когда фильмы не найдены.
   * todo- удалить на этапе 3
   */
  // movies = [];

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
      {!movies?.length ? (
        <p className='movies__not-found-text'>Ничего не найдено :(</p>
      ) : (
        <ul className='list movies__list'>{moviesList}</ul>
      )}
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
