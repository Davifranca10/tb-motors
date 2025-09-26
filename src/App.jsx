import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className="bg-gra">
            Conteúdo centralizado
        </div>
    );
};

export default App;