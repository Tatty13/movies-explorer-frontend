import { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Landing, Login, Movies, NotFound, Profile, Register } from './pages';
import { Footer, Header, ProtectedRoute } from './components';
import { savedMovies } from './utils/movies-data';

import { mainApi, moviesApi } from './utils/api';

function App() {
  const shouldMountMovies = useRef(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [beatfilmMovies, setBeatfilmMovies] = useState([]);

  async function getMoviesFromBeatfilm() {
    setIsLoading(true);
    try {
      const movies = await moviesApi.getMovies();
      shouldMountMovies.current = true;
      setBeatfilmMovies(movies);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
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
                movies={beatfilmMovies}
                savedMovies={savedMovies}
                isLoading={isLoading}
                onSearch={getMoviesFromBeatfilm}
                shouldMount={shouldMountMovies.current}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                component={Movies}
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
  );
}

export default App;
