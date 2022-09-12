import Intro from '../Intro';
import About from '../About';
import Projects from '../Projects';
import Experience from '../Experience';
import Contact from '../Contact';
import Footer from './Footer';
import Border from './Border';

export default function Layout() {
  return (
    <div className='bg-slate-900'>
      <Intro />
      <Border sectionName='About' />
      <About />
      <Border sectionName='Projects' />
      <Projects />
      <Border sectionName='Experience' />
      <Experience />
      <Border sectionName='Contact' />
      <Contact />
      <Footer />
    </div>
  );
}
