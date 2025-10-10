import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from "gsap/all";


const Hero = () => {

    useGSAP(() => {

        const heroSplit = new SplitText("#hero-title", {
            type: "chars, words",
        });

        const heroSubTitleSplit = new SplitText("#subtitle-hero", {
            type: "chars, words",
        });

        gsap.fromTo(
            "#video-drone",
            { scale: 1.3 },
            {
                scale: 1,
                duration: 2.0,
                ease: "power3.out",
                delay: 1.5,
                height: "85vh",
            }
        );

        // heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            scale: 1.3,
            opacity: 0,
            delay: 3.0,
            duration: 2.8,
            filter: "blur(4px)",
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(heroSubTitleSplit.chars, {
            scale: 0.8,
            yPercent: 70,
            opacity: 0,
            delay: 1.5,
            duration: 2.5,
            ease: "expo.out",
            stagger: 0.1,
        });

        gsap.from("#sub2-hero", {

            yPercent: 60,
            opacity: 0,
            delay: 3.5,
            duration: 2.0,
            ease: "expo.out",
        });

        gsap.to("#down-button", {
            yPercent: -10,
            scale: 1.1,
            duration: 2.5,
            opacity: 1,
            ease: "power1.inOut"

        });

    }, []);

    return (
        //h-[85vh] estava antes
        <div id='home' className="relative w-screen h-screen overflow-hidden brightness-0.9">
            <video id='video-drone' autoPlay loop muted className="object-cover w-full h-full">
                <source src="videos/drone-desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
                <source src="videos/drone-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
            </video>

            <div className="font-bebas absolute inset-0 flex items-center justify-center -mt-100 z-20">
                <h1 id='hero-title' className="absolute text-[10rem] text-white font-bold [letter-spacing:0.05em]">
                    <span className='orange'>TB</span>MOTORS
                </h1>
                <p id='subtitle-hero' className='font-poppins absolute mt-35 text-[20px] [letter-spacing:0.3em]'>
                    <span className='orange'>EXCLUSIVIDADE</span> EM MOVIMENTO
                </p>
                <p id='sub2-hero' className='font-poppins absolute text-[20px] bottom-45 [letter-spacing:0.4em]'>
                    NÃO PERCA ESSA <span className='orange'>OPORTUNIDADE!</span>
                </p>
            </div>

            <button
                id='down-button'
                onClick={() => document.getElementById('container1-apresentation')?.scrollIntoView({ behavior: 'smooth' })}
                className="circle absolute bottom-40 right-1/20 -translate-x-1/2 z-50 opacity-0"
            >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
    );
};

export default Hero;