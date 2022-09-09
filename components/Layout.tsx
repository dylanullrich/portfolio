import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';

export default function Layout() {
  return (
    <div className='bg-slate-800'>
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}
