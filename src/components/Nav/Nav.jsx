import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

function Nav({ extraNavClasses, extraListClasses, navItems, isOpen, onClose }) {
  useEffect(() => {
    function handleOverlayClose(evt) {
      if (evt.target.classList.contains('main-nav_open')) onClose();
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOverlayClose);
    }

    return () => {
      document.removeEventListener('mousedown', handleOverlayClose);
    };
  }, [isOpen, onClose]);

  const handleActiveLink = ({ isActive }) =>
    `link link_theme_primary nav__link hover-effect hover-effect_type_opacity-60 ${
      isActive ? 'nav__link_active' : ''
    }`;

  const navList = navItems.map(
    ({ title, optional, linkTo, hasActiveState, isBtn }, i) => (
      <li
        key={i}
        className={`nav__item ${optional ? 'nav__item_type_optional' : ''}`}>
        <NavLink
          to={linkTo}
          className={
            hasActiveState
              ? handleActiveLink
              : `link nav__link hover-effect hover-effect_type_opacity-60
              ${isBtn ? 'nav__link_style_btn' : 'link_theme_primary'}`
          }
          onClick={onClose}>
          {title}
        </NavLink>
      </li>
    )
  );

  return (
    <nav className={`nav ${extraNavClasses}`}>
      <ul className={`list ${extraListClasses}`}>{navList}</ul>
    </nav>
  );
}

export { Nav };
