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
import {
  filterMovies,
  getWindowWidthType,
  getDataFromLS,
  saveDataInLS,
} from '../../utils/helpers';
import {
  INITIAL_CARDS_COUNT,
  MORE_CARDS_COUNT,
  MOVIE_MESSAGES,
} from '../../utils/constants';

function Movies({ savedMovies, onSave, onDelete }) {
  const [shouldMountMovies, setShouldMountMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterActive, setFilterState] = useState(false);

  const [beatfilmMovies, setBeatfilmMovies] = useState([]);
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);

  const [infoText, setInfoText] = useState(MOVIE_MESSAGES.notFound);

  const [windowWidthType, setWindowWidthType] = useState(
    getWindowWidthType(window.innerWidth)
  );

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
      setMoviesToShow(
        filtredMovies.slice(0, INITIAL_CARDS_COUNT[windowWidthType])
      );

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

      const filtredMovies = filterMovies(
        movies,
        searchValue.search,
        isFilterActive
      );

      setFiltredMovies(filtredMovies);
      setMoviesToShow(
        filtredMovies.slice(0, INITIAL_CARDS_COUNT[windowWidthType])
      );
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
        setMoviesToShow(
          filtredMovies.slice(0, INITIAL_CARDS_COUNT[windowWidthType])
        );
      } catch (err) {
        setInfoText(MOVIE_MESSAGES.error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [setSearchValue, windowWidthType]);

  useEffect(() => {
    const handleWindowWidthChange = () => {
      const widthType = getWindowWidthType(window.innerWidth);
      setWindowWidthType(widthType);
    };

    window.addEventListener('resize', handleWindowWidthChange);

    return () => {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  }, []);

  function handleMoreBtnClick() {
    const currMoviesCount = moviesToShow.length;
    const moreMovies = filtredMovies.slice(
      currMoviesCount,
      currMoviesCount + MORE_CARDS_COUNT[windowWidthType]
    );
    setMoviesToShow((currMovies) => [...currMovies, ...moreMovies]);
  }

  const isMoreBtnVisible =
    shouldMountMovies &&
    filtredMovies.length > 3 &&
    moviesToShow.length < filtredMovies.length;

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
            movies={moviesToShow}
            savedMovies={savedMovies}
            hasDeleteBtn={false}
            onDelete={onDelete}
            onSave={onSave}
          />
        ))}
      {isMoreBtnVisible && <MoreBtn onClick={handleMoreBtnClick} />}
    </SectionWithMovies>
  );
}

export { Movies };
