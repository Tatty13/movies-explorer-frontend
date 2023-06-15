import './SectionWithMovies.css';

function SectionWithMovies({ children }) {
  return (
    <section
      aria-label='Фильмы'
      className='container section movies'>
      {children}
    </section>
  );
}

export { SectionWithMovies };
