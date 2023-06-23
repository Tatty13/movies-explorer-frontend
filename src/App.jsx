import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  Landing,
  Login,
  Movies,
  SavedMovies,
  NotFound,
  Profile,
  Register,
} from './pages';
import {
  Footer,
  Header,
  InfoTooltip,
  Preloader,
  ProtectedRoute,
} from './components';

import { mainApi } from './utils/api';
import { CurrentUserContext } from './contexts';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true); //to show fullscreen preloader
  const [isLoading, setIsLoading] = useState(false); //to change submit btn text and disable it

  const [formMessage, setFormMessage] = useState('');
  /**
   * todo - change to boolean value (isSubmitOk)
   */
  const [formMessageType, setFormMessageType] = useState('error');
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');

  const [savedMovies, setSavedMovies] = useState([]);

  /**
   * set empty string as a formMessage value
   */
  const resetFormMessage = useCallback(() => {
    setFormMessage('');
  }, []);

  const closePopup = useCallback(() => {
    setIsTooltipOpen(false);
  }, []);

  const handleError = useCallback(
    /**
     * @param {string} errMessage - error message
     */
    (errMessage) => {
      setTooltipMessage(errMessage);
      setIsTooltipOpen(true);
    },
    []
  );

  const getSavedMovies = useCallback(async () => {
    setIsPageLoading(true);
    try {
      const movies = await mainApi.getMovies();
      setSavedMovies(movies);
    } catch (err) {
      handleError(err);
    } finally {
      setIsPageLoading(false);
    }
  }, [handleError]);

  /**
   * @param {import('./utils/types/movie').MovieDataToSave} movieData
   * image, trailerLink, thumbnail - should be url;
   * duration is time in minutes; movieId is id from beatfilm
   */
  async function saveMovie(movieData) {
    try {
      const movie = await mainApi.addMovie(movieData);
      setSavedMovies((currMovies) => [...currMovies, movie]);
    } catch (err) {
      handleError(err);
    }
  }

  /**
   * @param {string} movieId - hex id
   */
  async function deleteMovie(movieId) {
    try {
      await mainApi.deleteMovie(movieId);
      setSavedMovies((currMovies) =>
        currMovies.filter((movie) => movie._id !== movieId)
      );
    } catch (err) {
      handleError(err);
    }
  }

  async function deleteMovieByBeatfilmId(beatfilmId) {
    try {
      const { _id } = savedMovies.find((movie) => movie.movieId === beatfilmId);
      await deleteMovie(_id);
    } catch (err) {
      handleError(err);
    }
  }

  /**
   * @param {import('./utils/types/user').LoginData} loginData
   */
  async function login(loginData) {
    const { user } = await mainApi.login(loginData);
    localStorage.setItem('loggedIn', 'true');
    setIsLoggedIn(true);
    setCurrentUser(user);
    setIsPageLoading(true);
    navigate('/movies', { replace: true });
  }

  /**
   * @param {import('./utils/types/user').SignupData} signupData - object with 'name', 'email' and 'password'
   */
  async function handleSignUp(signupData) {
    setIsLoading(true);
    try {
      await mainApi.createUser(signupData);
      await login({ email: signupData.email, password: signupData.password });
    } catch (err) {
      setFormMessage(err);
    } finally {
      setIsLoading(false);
    }
  }

  /**
   * @param {import('./utils/types/user').LoginData} signinData
   */
  async function handleSignIn(signinData) {
    setIsLoading(true);
    try {
      await login(signinData);
    } catch (err) {
      setFormMessage(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignout() {
    setIsPageLoading(true);
    try {
      await mainApi.logout();
      setIsLoggedIn(false);
      localStorage.clear();
      navigate('/', { replace: true });
    } catch (err) {
      handleError(err);
    }
  }

  async function handleUserUpdate(userdata) {
    setIsLoading(true);
    try {
      const user = await mainApi.updateUser(userdata);
      setCurrentUser(user);
      setFormMessageType('success');
      setFormMessage('Данные успешно обновлены');
    } catch (err) {
      setFormMessageType('error');
      setFormMessage(err);
    } finally {
      setIsLoading(false);
    }
  }

  const handleTokenCheck = useCallback(async () => {
    if (localStorage.getItem('loggedIn')) {
      try {
        const user = await mainApi.getUser();
        setCurrentUser(user);
        setIsLoggedIn(true);
      } catch (err) {
        localStorage.clear();
        handleError(err);
      }
    } else {
      setIsPageLoading(false);
    }
  }, [handleError]);

  useEffect(() => {
    handleTokenCheck();
  }, [handleTokenCheck]);

  useEffect(() => {
    isLoggedIn && getSavedMovies();
  }, [isLoggedIn, getSavedMovies]);

  if (isPageLoading) {
    return <Preloader fullscreen={true} />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Header isLoggedIn={isLoggedIn} />
        <main className='content'>
          <Routes>
            <Route
              path='/'
              element={<Landing />}
            />
            <Route
              path='/signin'
              element={
                <Login
                  onSignin={handleSignIn}
                  isLoading={isLoading}
                  isLoggedIn={isLoggedIn}
                  formMessage={formMessage}
                  resetFormMessage={resetFormMessage}
                />
              }
            />
            <Route
              path='/signup'
              element={
                <Register
                  onSignup={handleSignUp}
                  isLoading={isLoading}
                  isLoggedIn={isLoggedIn}
                  formMessage={formMessage}
                  resetFormMessage={resetFormMessage}
                />
              }
            />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  component={Movies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  onSave={saveMovie}
                  onDelete={deleteMovieByBeatfilmId}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  component={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  movies={savedMovies}
                  onDelete={deleteMovie}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  component={Profile}
                  onUpdateUser={handleUserUpdate}
                  onSignOut={handleSignout}
                  isLoggedIn={isLoggedIn}
                  isLoading={isLoading}
                  user={currentUser}
                  formMessage={formMessage}
                  resetFormMessage={resetFormMessage}
                  formMessageType={formMessageType}
                  setFormMessageType={setFormMessageType}
                />
              }
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </main>
        <Footer />
        <InfoTooltip
          isOpen={isTooltipOpen}
          info={tooltipMessage}
          onClose={closePopup}
        />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
