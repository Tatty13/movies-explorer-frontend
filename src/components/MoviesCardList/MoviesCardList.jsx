import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMovies }) {
  /**
   *  для тестировани вёрстки, когда фильмы не найдены.
   * todo- удалить на этапе 3
   */
  // movies = [];

  const moviesList = movies.map((movie) => {
    const { nameRU, duration, image, trailerLink } = movie;

    const imageUrl = image.url
      ? `https://api.nomoreparties.co/${image.url}`
      : image;

    const isSaved =
      !savedMovies ||
      savedMovies?.some((savedMovie) => savedMovie.movieId === movie.id);

    return (
      <li key={movie[savedMovies ? 'id' : '_id']}>
        <MoviesCard
          nameRU={nameRU}
          duration={duration}
          image={imageUrl}
          trailerLink={trailerLink}
          isSaved={isSaved}
        />
      </li>
    );
  });

  return (
    <section
      className='movies'
      aria-label='Фильмы'>
      {!movies?.length ? (
        <p className='movies__not-found-text'>Ничего не найдено :(</p>
      ) : (
        <ul className='list movies__list'>{moviesList}</ul>
      )}
      {movies.length > 3 && (
        <button
          type='button'
          className='btn movies__more-btn hover-effect'>
          Ещё
        </button>
      )}
    </section>
  );
}

export { MoviesCardList };
