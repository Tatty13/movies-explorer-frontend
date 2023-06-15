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
import { Footer, Header, ProtectedRoute } from './components';
import { savedMovies } from './utils/movies-data';

import { mainApi } from './utils/api';
import { CurrentUserContext } from './contexts';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Header />
        <main className='content'>
          <Routes>
            <Route
              path='/'
              element={<Landing />}
            />
            <Route
              path='/signin'
              element={<Login />}
            />
            <Route
              path='/signup'
              element={<Register />}
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
