import FavoriteTech from './FavoriteTech';
import AboutMe from './AboutMe';

export default function About() {
  return (
    <div className='mx-auto max-w-7xl py-16 px-8 sm:flex  sm:py-80 sm:px-6 lg:px-8'>
      <AboutMe />
      <FavoriteTech />
    </div>
  );
}
