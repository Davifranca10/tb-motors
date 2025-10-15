import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';


import Nav from './components/nav.jsx';
import Hero from './components/hero.jsx';
import Apresentation from './components/apresentation.jsx';
import Split from './components/split-screen.jsx';
import Dream from './components/dreams.jsx';
import Contact from './components/contact.jsx';
import Location from './components/location.jsx';
import Footer from './components/footer.jsx';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      < Nav />
      < Hero />
      <div className="h-[100vh]"></div>
      <div className='pt-[500px]'>< Apresentation /></div>
      <Split />
      <Dream />
      <Contact />
      <Location />
      <Footer />
    </main>

  );
};

export default App;