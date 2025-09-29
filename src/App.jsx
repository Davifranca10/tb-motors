import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
 

import Nav from './components/nav.jsx';
import Hero from './components/hero.jsx';
import Apresentation from './components/apresentation.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
           < Nav />
           < Hero />
           <div className='pt-[500px]'>< Apresentation /></div>
           
        </main>
        
    );
};

export default App;