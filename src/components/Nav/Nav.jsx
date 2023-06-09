import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({ extraNavClasses, extraListClasses, navItems }) {
  const handleActiveLink = ({ isActive }) =>
    `link nav__link ${isActive ? 'nav__link_active' : ''}`;

  const navList = navItems.map(
    ({ title, optional, linkTo, hasActiveState, isBtn }, i) => (
      <li
        key={i}
        className={`nav__item ${optional && 'nav__item_type_optional'}`}>
        <NavLink
          to={linkTo}
          className={
            hasActiveState
              ? handleActiveLink
              : `link nav__link ${isBtn && 'nav__link_style_btn'}`
          }>
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
