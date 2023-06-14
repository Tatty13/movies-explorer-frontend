import { AboutMe, AboutProject, Promo, Techs } from '../../components';

import './Landing.css';

function Landing() {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </>
  );
}

export { Landing };
