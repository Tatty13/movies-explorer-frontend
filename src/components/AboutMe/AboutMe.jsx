import { Link } from 'react-router-dom';

import './AboutMe.css';
import myPhoto from '../../assets/images/me.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='container container_place_about-me'>
        <h2 className='landing-title about-me__title'>Студент</h2>

        <article className='brief'>
          <h3 className='brief__title'>Татьяна</h3>
          <p className='brief__subtitle'>Фронтенд-разработчик, 33 года</p>
          <p className='brief__desc'>
            Я из Петербурга, закончила филологический факультет РГПУ им. А.И.
            Герцена. В 2020 году я увлеклась вёрсткой, а с июня 2022 года
            полностью посвящаю всё своё время изучению программирования.
          </p>
          <Link
            to='https://github.com/Tatty13'
            target='_blank'
            className='link link_theme_primary brief__link hover-effect hover-effect_type_opacity-60'>
            Github
          </Link>
          <img
            src={myPhoto}
            alt='Моё фото'
            className='brief__img'
          />
        </article>
        <article className='portfolio'>
          <h3 className='portfolio__title'>Портфолио</h3>
          <ol className='list portfolio__list'>
            <li className='portfolio__item'>
              <Link
                to='https://tatty13.github.io/how-to-learn/'
                target='_blank'
                className='link link_theme_primary portfolio__link hover-effect hover-effect_type_opacity-60'>
                Статичный сайт
              </Link>
            </li>
            <li className='portfolio__item'>
              <Link
                to='https://tatty13.github.io/russian-travel/'
                target='_blank'
                className='link link_theme_primary portfolio__link hover-effect hover-effect_type_opacity-60'>
                Адаптивный сайт
              </Link>
            </li>
            <li className='portfolio__item'>
              <Link
                to='https://tatty13.github.io/react-mesto-auth/'
                target='_blank'
                className='link link_theme_primary portfolio__link hover-effect hover-effect_type_opacity-60'>
                Одностраничное приложение
              </Link>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}
export { AboutMe };
