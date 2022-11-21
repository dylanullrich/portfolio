import FavoriteTech from './FavoriteTech';
import AboutMe from './AboutMe';

export default function About() {
  return (
    <div className='mx-auto px-4 sm:flex  sm:py-24 sm:px-6 lg:px-8'>
      <AboutMe />
      <FavoriteTech />
    </div>
  );
}
