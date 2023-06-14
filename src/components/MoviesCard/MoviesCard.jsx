import { useLocation } from 'react-router-dom';

import './MoviesCard.css';
import { convertMinsToHhMm } from '../../utils/convertMinsToHhMm';

function MoviesCard({ nameRU, duration, image, isSaved }) {
  /**
   * todo - удалить на этапе 3
   */

  const { pathname } = useLocation();

  return (
    <article className='movie-card'>
      <h2 className='movie-card__title'>{nameRU}</h2>
      <span className='movie-card__duration'>
        {convertMinsToHhMm(duration)}
      </span>
      <img
        src={image}
        alt={nameRU}
        className='movie-card__img'
      />

      <button
        type='button'
        className={`btn movie-card__btn hover-effect ${
          pathname === '/movies'
            ? `movie-card__bookmark-btn ${
                isSaved && 'movie-card__bookmark-btn_active'
              }`
            : 'movie-card__delete-btn'
        }`}
      />
    </article>
  );
}

export { MoviesCard };
