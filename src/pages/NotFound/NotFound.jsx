import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  return (
    <section className='container container_place_not-found not-found'>
      <span className='not-found__accent'>404</span>
      <h1 className='not-found__title'>Страница не найдена</h1>
      <Link
        to={'/'}
        className='link link_type_normal link_theme_brand-secondary'>
        Назад
      </Link>
    </section>
  );
}

export { NotFound };
