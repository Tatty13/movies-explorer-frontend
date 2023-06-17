import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

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
              element={<Login isLoading={isLoading} />}
            />
            <Route
              path='/signup'
              element={<Register isLoading={isLoading} />}
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
                  isLoggedIn={isLoggedIn}
                  user={currentUser}
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
