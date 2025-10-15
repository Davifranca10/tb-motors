import React, { useState, useEffect, useRef } from 'react';
import { navLinks } from '../../constants/index.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Nav = () => {
    const navRef = useRef();
    const navMobileRef = useRef();

    const lastScrollY = useRef(0);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Detectar se é mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleMenu = () => setIsOpen(prev => !prev);

    // Animação GSAP da navbar (desktop)
    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1.0,
            ease: "power3.out",
            delay: 3.0
        });
    }, []);

    // Animação do menu mobile (da esquerda para a direita)
    useEffect(() => {
        if (!navMobileRef.current) return;

        if (isOpen) {
            gsap.to(navMobileRef.current, {
                x: 0,
                duration: 0.6,
                ease: "power3.out"
            });
        } else {
            gsap.to(navMobileRef.current, {
                x: "-100%",
                duration: 0.6,
                ease: "power3.in"
            });
        }
    }, [isOpen]);

    // Controlar esconder navbar no scroll
    const handleScroll = () => {
        const currentScroll = window.scrollY;
        setIsHidden(currentScroll > lastScrollY.current && currentScroll > 100);
        lastScrollY.current = currentScroll;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* ===== DESKTOP ===== */}
            {!isMobile && (
                <nav
                    ref={navRef}
                    style={{
                        transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
                        transition: 'transform 0.3s ease-in-out'
                    }}
                    className='fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 h-18'
                >
                    <div id='desktop' className="ml-12 -mt-14">
                        <a href="#home">
                            <img src="/images/logotb.png" alt="logotb" className="w-28 h-38" />
                        </a>



{/* ul className='flex gap-20 fixed right-10 top-5 font-gilda'> */}

                        <ul className='flex md:gap-20 md:fixed md:right-10 md:mr-8 xl:-mr-40 xl:gap-30 xl:right-70 -mt-2 font-gilda'>
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )}

            {/* ===== MOBILE ===== */}
            {isMobile && (
                <>
                    {/* MENU LATERAL */}
                    <div
                        id='mobile'
                        ref={navMobileRef}
                        className='fixed top-0 left-0 w-[50%] h-[100vh] 
                        bg-black/50 backdrop-blur-2xl 
                        border-r border-white/10
                        shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]
                        flex flex-col items-center z-40'
                        style={{ transform: 'translateX(-100%)' }}
                    >

                        <a href="#home" className='mt-5'>
                            <img src="/images/logotb.png" alt="logotb" className="w-28 h-38  " />
                        </a>

                        <ul className='mt-10 font-gilda flex flex-col items-center gap-6 '>
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={`#${link.id}`} onClick={() => setIsOpen(false)}>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* BOTÃO HAMBÚRGUER */}
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className='fixed top-5 right-5 z-50 p-2'
                    >
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <line x1="3" y1="10" x2="46" y2="10" stroke="#e1aa26" strokeWidth="2" strokeLinecap="round"  />
                            <line x1="3" y1="20" x2="24" y2="20" stroke="#e1aa26" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </>
            )}
        </>
    );
};

export default Nav;