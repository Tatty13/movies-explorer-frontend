import './NavBar.css';
import { Nav } from '../';
import { mainNavItems, authNavItems } from '../../utils/configs';

function NavBar({ isLoggedIn, isOpen, onClose }) {
  return isLoggedIn ? (
    <Nav
      extraNavClasses={`main-nav ${isOpen && 'main-nav_open'}`}
      extraListClasses='main-nav__list'
      navItems={mainNavItems}
      isOpen={isOpen}
      onClose={onClose}
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
