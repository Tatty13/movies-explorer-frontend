import { Route, Routes } from 'react-router-dom';

import { Landing, Login, Movies, NotFound, Profile, Register } from './pages';
import { Footer, Header } from './components';
import { movies, savedMovies } from './utils/movies-data';
import { useState } from 'react';

function App() {
  const [currentUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

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
              <Movies
                movies={movies}
                savedMovies={savedMovies}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={<Movies movies={savedMovies} />}
          />
          <Route
            path='/profile'
            element={<Profile user={currentUser} />}
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
