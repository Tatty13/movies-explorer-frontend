import { Route, Routes } from 'react-router-dom';

import {
  Landing,
  Login,
  Movies,
  NotFound,
  Profile,
  Register,
  SavedMovies,
} from './pages';
import { Footer, Header } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
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
            element={<Movies />}
          />
          <Route
            path='/saved-movies'
            element={<SavedMovies />}
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
