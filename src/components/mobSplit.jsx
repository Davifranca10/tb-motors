import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { percentage } from '../../constants';

const MobSplit = () => {
    const [activeTab, setActiveTab] = useState('history');
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [currentDream, setCurrentDream] = useState(0);

    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        gsap.from(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: 'power3.inOut'
        });
    }, { scope: containerRef });

    useGSAP(() => {
        if (!contentRef.current) return;

        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );

        const lines = contentRef.current.querySelectorAll('.animated-line');
        gsap.from(lines, {
            scaleX: 0,
            transformOrigin: 'left',
            duration: 1.2,
            ease: 'power2.out',
            stagger: 0.2,
            delay: 0.3
        });

        if (activeTab === 'history') {
            const begonhaImage1 = contentRef.current.querySelector('.begonha-1');
            const begonhaImage2 = contentRef.current.querySelector('.begonha-2');
            const begonhaText1 = contentRef.current.querySelector('.begonha-text-1');
            const begonhaText2 = contentRef.current.querySelector('.begonha-text-2');

            if (begonhaImage1 && begonhaImage2 && begonhaText1 && begonhaText2) {
                const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });
                tl.to(begonhaImage1, { opacity: 0, duration: 1, delay: 2.5 })
                    .to(begonhaImage2, { opacity: 1, duration: 1 }, "-=1")
                    .to(begonhaText1, { opacity: 0, y: -10, duration: 0.5 }, "-=1")
                    .to(begonhaText2, { opacity: 1, y: 0, duration: 0.5 }, "-=0.5")
                    .to(begonhaImage2, { opacity: 0, duration: 1, delay: 2.5 })
                    .to(begonhaImage1, { opacity: 1, duration: 1 }, "-=1")
                    .to(begonhaText2, { opacity: 0, y: 10, duration: 0.5 }, "-=1")
                    .to(begonhaText1, { opacity: 1, y: 0, duration: 0.5 }, "-=0.5");
            }
        }
    }, { dependencies: [activeTab], scope: contentRef });

    const dreams = ["porsche", "mustang"];

    const handleDreamChange = (nextDream) => {
        if (nextDream === currentDream) return;

        const currentCar = `#${dreams[currentDream]}-cta`;
        const nextCar = `#${dreams[nextDream]}-cta`;

        const slideDirection = nextDream > currentDream ? 1 : -1;

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentDream(nextDream);
            }
        });

        tl.to(currentCar, {
            xPercent: -150 * slideDirection,
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'power3.in'
        });

        tl.fromTo(nextCar,
            {
                xPercent: 150 * slideDirection,
                opacity: 0,
                scale: 0.8,
            },
            {
                xPercent: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power3.out'
            },
            "-=0.4"
        );
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'history':
                return (
                    <div className="p-6 mt-20 bg-black text-white">
                        <h2 className="font-bebas subtitle ">PAIXÃO QUE SE TORNOU NEGÓCIO</h2>
                        <p className="mb-4 paragraph text-xl uppercase pb-10">
                            "Desde pequeno sempre fui fascinado por motores e design automotivo. O que começou como um<span className="orange"> hobby</span> se transformou em uma missão: oferecer <span className="orange">experiências únicas</span> a quem compartilha a mesma <span className="orange">paixão</span> por máquinas de alto desempenho."
                        </p>
                        <div className="w-full h-0.5 bg-gradient-to-r from-[#e48c08] to-[#c57b0b] mt-6 animated-line"></div>
                        <div className="relative w-full h-96 mx-auto overflow-hidden rounded-2xl shadow-lg mt-8">
                            <img src="images/begonha.png" alt="begonha" className="begonha-1 absolute w-full h-full object-cover" />
                            <img src="images/begonhafamilia.png" alt="begonha familia" className="begonha-2 absolute w-full h-full object-cover opacity-0" />
                        </div>
                        <div className="relative w-full text-center mt-4 h-12">
                            <h2 className="begonha-text-1 absolute w-full left-0 right-0 font-gilda text-lg">Thiago Begonha, fundador da <span className="orange">TB Motors</span></h2>
                            <h2 className="begonha-text-2 absolute w-full left-0 right-0 font-gilda text-lg opacity-0">Thiago Begonha, e sua <span className="orange">Família</span></h2>
                        </div>
                    </div>
                );
            case 'purpose':
                return (
                    <div className="p-6 bg-black text-white">
                        <h2 className="pb-10 mt-10 font-poppins subtitle font-light text-4xl whitespace-nowrap">O que nos move?</h2>
                        <p className="paragraph text-xl pb-10">
                            Acreditamos que <span className="orange font-bold">cada detalhe</span> conta. Buscamos sempre o máximo desempenho — nos veículos, nas entregas e nas experiências que criamos.
                        </p>
                        <div className="mt-6 flex flex-col gap-8 items-start">
                            <div className="w-full">
                                {percentage.map((item, index) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => setHoveredIndex(index)}
                                        className={`w-full text-left py-4 border-b border-[#7e5200] transform transition-transform duration-300 ease-in-out ${hoveredIndex === index ? "text-[#e48c08] scale-105 border-[#ffa600] border-b-2" : "text-[#686868] scale-100"}`}>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center gap-1">
                                                <span className="text-lg font-medium">{item.title}</span>
                                                <span className="text-md text-[#e48c08] ">⟶</span>
                                            </div>
                                            <span className="text-xs text-gray-500">100%</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            <div className="w-full h-auto min-h-[10em]">
                                <p className="mb-4 pl-4 pt-4 paragraph text-xl text-md text-gray-200 transition-opacity duration-500" key={hoveredIndex}>
                                    {percentage[hoveredIndex].description}
                                </p>
                            </div>


                        </div>
                    </div>
                );
            case 'dreams':
                return (
                    <div className="bg-black text-white pb-12">
                        <div className="p-6">
                            <div className="w-full h-0.5 bg-gradient-to-r from-[#111111] to-[#c57b0b] mt-6 animated-line"></div>
                            <h2 className="text-5xl tracking-wide font-bebas text-center py-8">REALIZANDO SONHOS</h2>
                            <div className="w-full h-0.5 bg-gradient-to-r from-[#e48c08] to-[#111111] animated-line"></div>
                            <p className="paragraph text-xl font-bold uppercase leading-8 mt-8 orange">
                                A <span className="text-white">verdadeira recompensa</span> do nosso trabalho está <span className="text-white">no rosto do cliente</span>: no instante em que o <span className="text-white">sonho se realiza</span>.
                            </p>
                        </div>

                        <div className="relative w-full h-[60vh] flex items-center justify-center mt-4 overflow-hidden">
                            <div id="porsche-cta" className={`w-full h-full flex flex-col items-center justify-center text-center absolute top-0 left-0 transition-opacity duration-500 ${currentDream === 0 ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="relative z-10 flex flex-col items-center text-center scale-90">
                                    <h1 className="font-gothic text-8xl text-white tracking-wider">PORSCHE <span className="text-[#006dff]">718</span></h1>
                                    <div className="relative w-full flex justify-center h-48">
                                        <img src="images/porshe718.png" alt="Porsche 718 Caymann" className="absolute top-[-6rem] z-20 max-w-md" />
                                    </div>
                                    <h1 className="font-bebas text-8xl text-white tracking-wider -mt-[6rem]">CAYMANN</h1>
                                    <button className="w-[90%] py-4 mt-10 uppercase font-bold tracking-widest text-xs rounded-full 
                                    bg-[#0a0a0a] text-[#006dff] border border-[#003b95]">
                                        Saiba Mais
                                    </button>
                                </div>
                            </div>
                            <div id="mustang-cta" className={`w-full h-full flex flex-col items-center justify-center text-center absolute top-0 left-0 transition-opacity duration-500 ${currentDream === 1 ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="relative z-10 flex flex-col items-center text-center scale-90">
                                    <h1 className="font-gothic text-8xl text-white tracking-wider">FORD</h1>
                                    <div className="relative w-full flex justify-center h-48">
                                        <img src="images/mustang.png" alt="Mustang GT" className="absolute top-[-6rem] z-20 max-w-md" />
                                    </div>
                                    <h1 className="font-bebas text-8xl text-[#ec0000] tracking-wider -mt-[6rem]">MUSTANG GT</h1>
                                    <button className="w-[90%] py-4 mt-10 uppercase font-bold tracking-widest text-xs rounded-full 
                                    bg-[#0a0a0a] text-[#ec0000] border border-[#610000]">
                                        Saiba Mais
                                    </button>                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-4 w-full px-6 pt-8">
                            <button
                                onClick={() => handleDreamChange(0)}
                                className={`flex-1 py-3 text-center font-bold uppercase text-xs rounded-md transition-all duration-300 ${currentDream === 0
                                    ? 'bg-[#1a1a1a] text-[#006dff] border border-gray-700 scale-105'
                                    : 'bg-transparent text-white border border-gray-500'
                                    }`}
                            >
                                Porsche 718
                            </button>
                            <button
                                onClick={() => handleDreamChange(1)}
                                className={`flex-1 py-3 text-center font-bold uppercase text-xs rounded-md transition-all duration-300 ${currentDream === 1
                                    ? 'bg-[#171212] text-[#ec0000] border border-[#540404] scale-105'
                                    : 'bg-transparent text-white border border-gray-500'
                                    }`}
                            >
                                Mustang GT
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div ref={containerRef} className="w-full bg-black">
            <div className="relative">
                <img src="images/split.png" alt="About us" className="w-full h-auto" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-white text-5xl font-poppins font-bold">Sobre Nós</h1>
                </div>
            </div>
            <div className="flex sticky top-0 z-20">
                <button onClick={() => setActiveTab('history')} className={`flex-1 p-4 text-center font-bold transition-colors duration-300 ${activeTab === 'history' ? 'bg-[#e1aa26] text-black' : 'bg-black orange border-t border-b border-gray-800'}`}>
                    História
                </button>
                <button onClick={() => setActiveTab('purpose')} className={`flex-1 p-4 text-center font-bold transition-colors duration-300 ${activeTab === 'purpose' ? 'bg-[#e1aa26] text-black' : 'bg-black orange border-t border-b border-gray-800'}`}>
                    Propósito
                </button>
                <button onClick={() => setActiveTab('dreams')} className={`flex-1 p-4 text-center font-bold transition-colors duration-300 ${activeTab === 'dreams' ? 'bg-[#e1aa26] text-black' : 'bg-black orange border-t border-b border-gray-800'}`}>
                    Sonhos
                </button>
            </div>
            <div ref={contentRef} key={activeTab}>
                {renderContent()}
            </div>
        </div>
    );
};

export default MobSplit;
