import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
    const container = useRef(null);
    const backgroundVideoRef = useRef(null);
    const animatedVideoRef = useRef(null);
    const animatedVideoContainerRef = useRef(null);

    const address = "R. Mirador, 31 - Ponto Chic, Ibirama - SC, 89140-000";

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: 'bottom center',
                scrub: 1.2,
                pin: true,
                markers:false
            },
        });

        // Animate the main video from fullscreen down to its smaller, final position
        tl.fromTo(animatedVideoContainerRef.current,
            { width: '750px', height: '350px', y: 0, opacity: 1 },
            { width: '450px', height: '250px', y: -180, opacity: 0.9, ease: 'power2.inOut' },
            0);

        // Fade in the background video to a subtle opacity
        tl.to(backgroundVideoRef.current, { opacity: 0.3, ease: 'power2.inOut' }, 0);

        // Animate the expanded corner lines
        tl.from('.top-left .corner-line-h', { scaleX: 0, ease: 'power2.out' }, 0.5)
            .from('.top-left .corner-line-v', { scaleY: 0, ease: 'power2.out' }, '-=0.5');
        tl.from('.bottom-right .corner-line-h', { scaleX: 0, ease: 'power2.out' }, 0.5)
            .from('.bottom-right .corner-line-v', { scaleY: 0, ease: 'power2.out' }, '-=0.5');

        // Animate the passing lines
        tl.fromTo('.passing-line-top', { xPercent: -100 }, { xPercent: 100, duration: 2.5, ease: 'power1.inOut' }, 0.2);
        tl.fromTo('.passing-line-bottom', { xPercent: 100 }, { xPercent: -100, duration: 2.5, ease: 'power1.inOut' }, 0.2);
        
        // Fade in the main text content
        tl.from('.location-content-item', {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            ease: 'power3.out'
        }, 0.6);

    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative h-[140vh] bg-black text-white font-serif overflow-hidden"
        >
            <div className="sticky top-0 h-screen flex flex-col justify-center items-center">

                <div className="absolute inset-0">
                    <video
                        ref={backgroundVideoRef}
                        src="videos/drone-desktop.mp4"
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full object-cover opacity-0"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_black)]" />
                </div>

                <div ref={animatedVideoContainerRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <video
                        ref={animatedVideoRef}
                        src="videos/drone-desktop.mp4"
                        autoPlay
                        loop
                        muted
                        className="scale-150 object-cover rounded-lg shadow-xl shadow-black/50"
                    />
                </div>

                <div className="relative z-10 text-center flex flex-col items-center mt-[320px]">
                    <h1 className="location-content-item text-5xl sm:text-6xl md:text-7xl font-moda text-white mb-4">
                        Onde nos encontrar?
                    </h1>
                    <p className="location-content-item text-lg sm:text-xl font-poppins text-gray-300 mb-8 max-w-md">
                        {address}
                    </p>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-content-item inline-block bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-[#e48c08] hover:text-white transition-colors duration-300"
                    >
                        Ver no Mapa
                    </a>
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="w-full h-full relative flex justify-center items-center">
                        <div className="w-full max-w-6xl h-5/6 relative">
                            <div className="top-left absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48">
                                <div className="corner-line-h absolute top-0 left-0 h-0.5 bg-white/80 origin-left w-full"></div>
                                <div className="corner-line-v absolute top-0 left-0 w-0.5 bg-white/80 origin-top h-full"></div>
                            </div>
                            <div className="bottom-right absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48">
                                <div className="corner-line-h absolute bottom-0 right-0 h-0.5 bg-white/80 origin-right w-full"></div>
                                <div className="corner-line-v absolute bottom-0 right-0 w-0.5 bg-white/80 origin-bottom h-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/4 left-0 w-full h-px pointer-events-none">
                    <div className="passing-line-top h-full bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"></div>
                </div>
                <div className="absolute bottom-1/4 left-0 w-full h-px pointer-events-none">
                    <div className="passing-line-bottom h-full bg-gradient-to-l from-transparent via-white/20 to-transparent w-full"></div>
                </div>

            </div>
        </section>
    );
};

export default Location;