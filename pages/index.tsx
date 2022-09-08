import type { NextPage } from 'next';
import Welcome from '../components/Welcome';
// import About from '../components/About';
// import Experience from '../components/Experience';
import Work from '../components/Work';
// import Contact from '../components/Contact';s

// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Welcome />
      {/* <About /> */}
      {/* <Experience /> */}
      <Work />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
