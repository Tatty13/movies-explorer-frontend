import { NavLink, useLocation } from 'react-router-dom';
import './Footer.css';
import { ROUTES_WITH_FOOTER } from '../../utils/constants';

function Footer() {
  const { pathname } = useLocation();
  const hasFooter = ROUTES_WITH_FOOTER.includes(pathname);

  return (
    hasFooter && (
      <footer className='footer'>
        <div className='container container_place_footer'>
          <p className='footer__text'>
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <p className='footer__copyright'>© 2022</p>
          <nav>
            <ul className='list footer__nav-list'>
              <li>
                <NavLink
                  to='https://practicum.yandex.ru/'
                  target='_blank'
                  className='link link_type_normal link_theme_primary link_place_footer'>
                  Яндекс.Практикум
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='https://github.com/Tatty13'
                  target='_blank'
                  className='link link_type_normal link_theme_primary link_place_footer'>
                  Github
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
  );
}

export { Footer };