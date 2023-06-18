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
import { Footer, Header, Preloader, ProtectedRoute } from './components';
import { savedMovies } from './utils/movies-data';

import { mainApi } from './utils/api';
import { CurrentUserContext } from './contexts';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formMessage, setFormMessage] = useState('');
  const [formMessageType, setFormMessageType] = useState('error');

  /**
   * set empty string as a formMessage value
   */
  const resetFormMessage = useCallback(() => {
    setFormMessage('');
  }, []);

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

  //email: 'test1@test.ru', name: 'test1', pass: 123456'

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

  useEffect(() => {
    try {
      isLoggedIn && console.log('loggedin');
    } catch (err) {
      console.log(err);
    } finally {
      setIsPageLoading(false);
    }
  }, [isLoggedIn]);

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
                />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  component={Profile}
                  onUpdateUser={handleUserUpdate}
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
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
