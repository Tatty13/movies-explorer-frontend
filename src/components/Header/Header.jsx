import { useLocation } from 'react-router-dom';
import './Header.css';
import { ROUTES_WITH_HEADER, ROUTES_WITH_NAVBAR } from '../../utils/constants';

import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { BurgerBtn } from '../BurgerBtn/BurgerBtn';
import { useState } from 'react';

function Header() {
  const { pathname } = useLocation();
  const [isNavBarOpen, setNavBarState] = useState(false);

  const closeNavBar = () => setNavBarState(false);

  const toggleBurgerMenu = () => setNavBarState(!isNavBarOpen);

  const hasHeader = ROUTES_WITH_HEADER.includes(pathname);
  const hasNavBar = ROUTES_WITH_NAVBAR.includes(pathname);

  /**
   * todo - удалить на этапе 3
   */
  const isLoggedIn = pathname !== '/';

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
