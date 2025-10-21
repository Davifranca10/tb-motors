import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useState, useEffect } from 'react';


import Nav from './components/nav.jsx';
import Hero from './components/hero.jsx';
import Apresentation from './components/apresentation.jsx';
import MobApresentation from './components/mobApresentation.jsx';
import Split from './components/split-screen.jsx';
import MobSplit from './components/mobSplit.jsx';
import Dream from './components/dreams.jsx';
import Contact from './components/contact.jsx';
import Location from './components/location.jsx';
import Footer from './components/footer.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      < Nav />  
      < Hero />
      <div className="h-[100vh]"></div>
      <div>
        {isMobile ? <MobApresentation /> : <Apresentation />}
      </div>
      {isMobile ? <MobSplit /> : <Split />}
      <Dream />
      <Location />
      <Contact />
      <Footer />

    </main>

  );
};

export default App;