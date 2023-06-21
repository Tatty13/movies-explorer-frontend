import './MoviesCard.css';
import { convertMinsToHhMm, createFullUrl } from '../../utils/helpers';
import { Link } from 'react-router-dom';

function MoviesCard({ movie, isSaved, hasDeleteBtn, onMovieBtnClick }) {
  const { nameRU, duration, image, trailerLink } = movie;
  const imageUrl = hasDeleteBtn ? image : createFullUrl(image.url);

  const movieBtnTypeClass = hasDeleteBtn
    ? 'movie-card__delete-btn'
    : `movie-card__bookmark-btn ${
        isSaved && 'movie-card__bookmark-btn_active'
      }`;

  function handleMovieBtnClick() {
    if (isSaved) {
      const movieId = hasDeleteBtn ? movie._id : movie.id;
      onMovieBtnClick(movieId);
    } else {
      const { country, nameEN, year, director, description, id } = movie;
      const thumbnailUrl =
        createFullUrl(image.formats?.thumbnail?.url) || imageUrl;

      onMovieBtnClick({
        country,
        nameEN,
        nameRU,
        year,
        director,
        description,
        duration,
        trailerLink,
        image: imageUrl,
        thumbnail: thumbnailUrl,
        movieId: id,
      });
    }
  }

  return (
    <article className='movie-card'>
      <Link
        to={trailerLink}
        target='_blank'
        className='link movie-card__link hover-effect'
      />
      <h2 className='movie-card__title'>{nameRU}</h2>
      <span className='movie-card__duration'>
        {convertMinsToHhMm(duration)}
      </span>
      <img
        src={imageUrl}
        alt={nameRU}
        className='movie-card__img'
      />
      <button
        type='button'
        onClick={handleMovieBtnClick}
        className={`btn movie-card__btn hover-effect ${movieBtnTypeClass}`}
      />
    </article>
  );
}

export { MoviesCard };
