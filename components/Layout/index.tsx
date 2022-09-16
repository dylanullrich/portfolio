import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';
import Experience from '../Experience';
import Contact from '../Contact';
import Border from './Border';

export default function Layout() {
  return (
    <main className='bg-slate-900'>
      <Intro />
      <Border sectionName='About' />
      <About />
      <Border sectionName={`Stuff I've Built`} />
      <Projects />
      <Border sectionName='Experience' />
      <Experience />
      <Border sectionName='Contact' />
      <Contact />
    </main>
  );
}
