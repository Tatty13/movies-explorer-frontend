import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMovies }) {
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
  <ul className='list movies__list'>{moviesList}</ul>
  );
}

export { MoviesCardList };
