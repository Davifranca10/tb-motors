import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
 

import Nav from './components/nav.jsx';
import Hero from './components/hero.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
           < Nav />
           < Hero />
        </main>
        
    );
};

export default App;