import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Header.css';
import { ROUTES_WITH_HEADER, ROUTES_WITH_NAVBAR } from '../../utils/constants';
import { Logo, NavBar, BurgerBtn } from '../';

function Header({ isLoggedIn }) {
  const { pathname } = useLocation();
  const [isNavBarOpen, setNavBarState] = useState(false);

  const closeNavBar = () => setNavBarState(false);

  const toggleBurgerMenu = () => setNavBarState(!isNavBarOpen);

  const hasHeader = ROUTES_WITH_HEADER.includes(pathname);
  const hasNavBar = ROUTES_WITH_NAVBAR.includes(pathname);

  return (
    hasHeader && (
      <header
        className={`header ${
          pathname === '/' ? 'header_theme_hero' : 'header_theme_normal'
        }`}>
        <div className='container container_place_header'>
          <Logo />
          {hasNavBar && (
            <NavBar
              isLoggedIn={isLoggedIn}
              isOpen={isNavBarOpen}
              onClose={closeNavBar}
            />
          )}
          {hasNavBar && isLoggedIn && (
            <BurgerBtn
              onClick={toggleBurgerMenu}
              isOpen={isNavBarOpen}
            />
          )}
        </div>
      </header>
    )
  );
}

export { Header };
