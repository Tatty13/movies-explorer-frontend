import { useEffect, useState } from 'react';

import {
  MoreBtn,
  MoviesCardList,
  Preloader,
  SearchForm,
  SectionWithMovies,
} from '../../components';
import { moviesApi } from '../../utils/api';
import { useInput } from '../../hooks';
import { filterMovies, getDataFromLS, saveDataInLS } from '../../utils/helpers';
import { MOVIE_MESSAGES } from '../../utils/constants';

function Movies({ savedMovies }) {
  const [shouldMountMovies, setShouldMountMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [beatfilmMovies, setBeatfilmMovies] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);

  const [infoText, setInfoText] = useState(MOVIE_MESSAGES.notFound);

  const [isFilterActive, setFilterState] = useState(false);

  const {
    values: searchValue,
    setValues: setSearchValue,
    handleInputChange,
  } = useInput({
    search: '',
  });

  const handleFilterClick = () => {
    const filterState = !isFilterActive;
    setFilterState(filterState);
    saveDataInLS({ isFilterActive: filterState });

    if (beatfilmMovies) {
      setIsLoading(true);

      const { search } = getDataFromLS('search');
      const filtredMovies = filterMovies(beatfilmMovies, search, filterState);
      setFiltredMovies(filtredMovies);

      setIsLoading(false);
    }
  };

  async function handleSearch() {
    setIsLoading(true);
    if (!shouldMountMovies) setShouldMountMovies(true);

    try {
      let movies;
      if (!beatfilmMovies.length) {
        movies = await moviesApi.getMovies();
        saveDataInLS({ beatfilmMovies: JSON.stringify(movies) });
        setBeatfilmMovies(movies);
      } else {
        movies = beatfilmMovies;
      }

      const filtedMovies = filterMovies(
        movies,
        searchValue.search,
        isFilterActive
      );

      setFiltredMovies(filtedMovies);
    } catch (err) {
      setInfoText(MOVIE_MESSAGES.error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await handleSearch();
    saveDataInLS({ isFilterActive, search: searchValue.search });
  }

  useEffect(() => {
    const movies = localStorage.getItem('beatfilmMovies');
    if (movies) {
      setIsLoading(true);
      setShouldMountMovies(true);

      try {
        const { isFilterActive, search } = getDataFromLS(
          'isFilterActive',
          'search'
        );

        const booleanFilter = isFilterActive === 'true';
        setFilterState(booleanFilter);
        setSearchValue({ search });

        const parsedMovies = JSON.parse(movies);
        setBeatfilmMovies(parsedMovies);

        const filtredMovies = filterMovies(parsedMovies, search, booleanFilter);
        setFiltredMovies(filtredMovies);
      } catch (err) {
        setInfoText(MOVIE_MESSAGES.error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [setSearchValue]);

  const isMoreBtnVisible = shouldMountMovies && filtredMovies.length > 3;

  return (
    <SectionWithMovies>
      <SearchForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        isFilterActive={isFilterActive}
        onFilterClick={handleFilterClick}
        searchValue={searchValue.search}
        onChange={handleInputChange}
      />
      {shouldMountMovies &&
        (isLoading ? (
          <Preloader />
        ) : !filtredMovies?.length ? (
          <p className='movies__info-text'>{infoText}</p>
        ) : (
          <MoviesCardList
            movies={filtredMovies}
            savedMovies={savedMovies}
          />
        ))}
      {isMoreBtnVisible && <MoreBtn />}
    </SectionWithMovies>
  );
}

export { Movies };
