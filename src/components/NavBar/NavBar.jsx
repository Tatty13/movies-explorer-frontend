import { Nav } from '../Nav/Nav';
import { mainNavItems, authNavItems } from '../../utils/nav-items';

import './NavBar.css';

function NavBar({ isLoggedIn, isOpen }) {
  return isLoggedIn ? (
    <Nav
      extraNavClasses={`main-nav ${isOpen && 'main-nav_open'}`}
      extraListClasses='main-nav__list'
      navItems={mainNavItems}
    />
  ) : (
    <Nav
      extraNavClasses='auth-nav'
      extraListClasses='auth-nav__list'
      navItems={authNavItems}
    />
  );
}

export { NavBar };