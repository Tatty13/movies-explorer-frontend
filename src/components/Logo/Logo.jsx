import { Link } from 'react-router-dom';

import './Logo.css';

function Logo() {
  return (
    <Link
      to='/'
      className='logo hover-effect hover-effect_type_opacity-60
      '
      aria-label='Логотип'
    />
  );
}

export { Logo };
