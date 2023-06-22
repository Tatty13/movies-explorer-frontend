import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { memo } from 'react';

const MoviesCardList = memo(
  ({ movies, savedMovies, hasDeleteBtn, onDelete, onSave }) => {
    const moviesList = movies.map((movie) => {
      const isSaved =
        hasDeleteBtn ||
        savedMovies?.some((savedMovie) => savedMovie.movieId === movie.id);

      return (
        <li key={movie[savedMovies ? 'id' : '_id']}>
          <MoviesCard
            movie={movie}
            isSaved={isSaved}
            hasDeleteBtn={hasDeleteBtn}
            onMovieBtnClick={isSaved ? onDelete : onSave}
          />
        </li>
      );
    });

    return <ul className='list movies__list'>{moviesList}</ul>;
  }
);

export { MoviesCardList };
