import { useEffect, useState } from 'react';

import {
  MoreBtn,
  MoviesCardList,
  Preloader,
  SearchForm,
  SectionWithMovies,
} from '../../components';
import { moviesApi } from '../../utils/api';

function Movies({ savedMovies }) {
  const [shouldMountMovies, setshouldMountMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [beatfilmMovies, setBeatfilmMovies] = useState([]);

  const [isFilterActive, setFilterState] = useState(false);

  const handleFilterClick = () => {
    setFilterState(!isFilterActive);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await getMoviesFromBeatfilm();
  }

  async function getMoviesFromBeatfilm() {
    setIsLoading(true);
    try {
      setshouldMountMovies(true);

      if (!beatfilmMovies.length) {
        const movies = await moviesApi.getMovies();
        localStorage.setItem('beatfilmMovies', JSON.stringify(movies));
        setBeatfilmMovies(movies);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const movies = localStorage.getItem('beatfilmMovies');
    if (movies) {
      setIsLoading(true);
      setshouldMountMovies(true);
      setBeatfilmMovies(JSON.parse(movies));
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <SectionWithMovies>
      <SearchForm
        onSubmit={handleSubmit}
        isFilterActive={isFilterActive}
        onFilterClick={handleFilterClick}
      />
      {shouldMountMovies &&
        (isLoading ? (
          <Preloader />
        ) : !beatfilmMovies?.length ? (
          <p className='movies__not-found-text'>Ничего не найдено :(</p>
        ) : (
          <MoviesCardList
            movies={beatfilmMovies}
            savedMovies={savedMovies}
          />
        ))}
      {shouldMountMovies && beatfilmMovies.length > 3 && <MoreBtn />}
    </SectionWithMovies>
  );
}

export { Movies };
