import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contato } from "../../constants";
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const container = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateKey, setAnimateKey] = useState(0); // para reiniciar a animação

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev === 0 ? contato.length - 1 : prev - 1;
            setAnimateKey((k) => k + 1);
            return newIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const newIndex = prev === contato.length - 1 ? 0 : prev + 1;
            setAnimateKey((k) => k + 1);
            return newIndex;
        });
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top center',
                toggleActions: 'play none none none',
            },
        });



        tl.from('.fade-in-item', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        });

        tl.from('.vertical-title-animate', {
            opacity: 0,
            x: -40,
            duration: 1,
            ease: 'power3.out',
        }, '-=0.5');
    }, { scope: container });

    const titleRef = useRef(null);
    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
            );
        }
    }, [animateKey]);

    return (
        <>



            <div className="w-[110%] h-0.5 -mt-70 -ml-10 bg-gradient-to-r from-[#000000] via-[#7a7a7a] to-[#ffffff]"></div>

            <div className="w-[110%] h-0.5 -ml-10 bg-gradient-to-r from-[#000000] via-[#1d1600] to-[#ffffff]"></div>

            <section
                ref={container}
                className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center p-4 sm:p-8 font-serif "
            >
                <h1
                    className="vertical-title-animate absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-7xl sm:text-8xl md:text-9xl text-white select-none -ml-11 font-moda"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    CONTATO
                </h1>

                <div id='contact' className="text-center z-10 w-full px-4">
                    <p className="fade-in-item text-base sm:text-lg md:text-2xl font-medium text-gray-300 font-moda">
                        Por favor, entre em contato através de algum destes endereços para entrar em contato conosco.
                    </p>

                    <div className="fade-in-item my-10 flex items-center justify-center space-x-10 ">
                        <button
                            onClick={handlePrev}
                            className="text-5xl sm:text-6xl text-white hover:text-[#e48c08] p-8 transition-colors duration-300"
                        >
                            <HiOutlineArrowCircleLeft />
                        </button>

                        <a
                            ref={titleRef}
                            key={animateKey}
                            id='title-contact'
                            href={
                                contato[currentIndex].id === 'email'
                                    ? `mailto:${contato[currentIndex].description}`
                                    : contato[currentIndex].id === 'telefone'
                                        ? `tel:${contato[currentIndex].description.replace(/\D/g, '')}`
                                        : `https://www.instagram.com/${contato[currentIndex].description.replace('@', '')}`
                            }
                            className="text-3xl sm:text-5xl md:text-7xl break-all font-poppins underline-hover transition-colors duration-300 mx-10"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contato[currentIndex].description}
                        </a>

                        <button
                            onClick={handleNext}
                            className="text-5xl sm:text-6xl text-white hover:text-[#e48c08] transition-colors p-8 duration-300 "
                        >
                            <HiOutlineArrowCircleRight />
                        </button>
                    </div>

                    <p className="fade-in-item text-lg sm:text-xl md:text-3xl text-gray-200 font-moda pt-10">
                        Fale Conosco
                    </p>

                    <div className="fade-in-item flex justify-center items-center space-x-8 sm:space-x-10 mt-6">
                        <a
                            href="https://www.instagram.com/tb_motors_sc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl sm:text-5xl text-white hover:text-[#e48c08] transition-colors duration-300"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.facebook.com/thiagobegonhaconsultor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl sm:text-5xl text-white hover:text-[#e48c08] transition-colors duration-300"
                        >
                            <FaFacebook />
                        </a>

                        <a
                            href="https://wa.me/5547988536476" // link direto para WhatsApp
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl sm:text-5xl text-white hover:text-[#e48c08] transition-colors duration-300"
                        >
                            <FaWhatsapp />
                        </a>

                        <a
                            href="mailto:thiagodvd@yahoo.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl sm:text-5xl text-white hover:text-[#e48c08] transition-colors duration-300"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

            </section>
            <div className="marquee-container relative overflow-hidden -mt-20">
                {/* Conteúdo da marquee */}
                <div className="animate-marquee flex">
                    <img src="images/marcas.png" alt="Marcas" className="h-[15rem] object-contain self-start" />
                    <img src="images/marcas.png" alt="Marcas" className="h-[15rem] object-contain self-start" />
                    <img src="images/marcas.png" alt="Marcas" className="h-[15rem] object-contain self-start" />
                    <img src="images/marcas.png" alt="Marcas" className="h-[15rem] object-contain self-start" />
                </div>

                {/* Gradiente nas laterais */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
            </div>


        </>

    );
};

export default Contact;