import { Route, Routes } from 'react-router-dom';

import { Landing, Login, Movies, NotFound, Profile, Register } from './pages';
import { Footer, Header } from './components';
import { movies, savedMovies } from './utils/movies-data';

function App() {
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
            element={<Movies movies={movies} savedMovies={savedMovies}/>}
          />
          <Route
            path='/saved-movies'
            element={<Movies movies={savedMovies} />}
          />
          <Route
            path='/profile'
            element={<Profile />}
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
