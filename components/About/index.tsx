import Image from 'next/image';
import FavoriteTech from './FavoriteTech';
import AboutMe from './AboutMe';

export default function About() {
  return (
    <div className='mx-auto flex max-w-7xl py-16 px-8  sm:py-24 sm:px-6 lg:px-8'>
      <AboutMe />
      <FavoriteTech />
    </div>
  );
}
