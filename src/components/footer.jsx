
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import gsap from 'gsap';

const Footer = () => {
    const container = useRef(null);

    useGSAP(() => {
        const navItems = gsap.utils.toArray('.nav-item');
        navItems.forEach(item => {
            const original = item.querySelector('.original');
            const hoverText = item.querySelector('.hover-text');

            gsap.set(hoverText, { x: '-100%', opacity: 1 });

            const timeline = gsap.timeline({ paused: true });

            timeline
                .to(original, { opacity: 0, duration: 0.2, ease: 'power1.in' })
                .to(hoverText, { x: '0%', duration: 0.3, ease: 'power2.out' }, "-=0.1");

            item.addEventListener('mouseenter', () => timeline.play());
            item.addEventListener('mouseleave', () => timeline.reverse());
        });
    }, { scope: container });

    return (
        <footer ref={container} className="bg-black  text-[#c5a47e] font-serif py-1 px-20">
            <div className="w-full h-[0.5px] bg-[#c5a47e] opacity-40"></div>
            <div className=" flex max-md:flex-col justify-between items-center pl-10 pt-8">
                <div className="text-left w-1/2 max-md:-ml-65">
                    <img src="/images/farol.png" alt="Farol" className="w-35 absolute  ml-3" />
                    <p className="text-[18px] text-white pt-13">VAMOS NEGOCIAR?</p>
                    <h2 className="text-8xl max-md:text-6xl my-2 -mt-8 max-md:mt-0 leading-35 max-md:leading-20 ">VENHA<br />FAZER<br />PARTE!</h2>
                    <div id='icons' className="mt-5 flex items-center gap-7 max-md:gap-4">
                        <a href="https://www.instagram.com/tb_motors_sc" target="_blank" rel="noopener noreferrer" className="text-3xl max-md:text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="https://www.facebook.com/thiagobegonhaconsultor" target="_blank" rel="noopener noreferrer" className="text-3xl max-md:text-2xl">
                            <FaFacebook />
                        </a>
                        <a href="https://wa.me/5547988536476" target="_blank" rel="noopener noreferrer" className="text-3xl max-md:text-2xl">
                            <FaWhatsapp />
                        </a>
                        <a href="mailto:thiagodvd@yahoo.com.br" target="_blank" rel="noopener noreferrer" className="text-3xl max-md:text-2xl">
                            <FaEnvelope />
                        </a>

                        <img src="/images/logotb-rodape.png" alt="TB Motors Logo" className="w-90 scale-150 ml-15 -mt-70 flex-row md:hidden" />
                    </div>

                </div>

                <div className="flex flex-col items-center w-1/2 max-md:-ml-50">
                    <img src="/images/logotb-rodape.png" alt="TB Motors Logo" className="w-90 max-md:hidden" />
                    <div className="mt-8 flex pt-10 pl-40 gap-10 max-md:w-[60vh] max-md:ml-[50%]">
                        <div className="flex flex-col  gap-4">
                            <a href="#" className="nav-item relative overflow-hidden text-sm block">
                                <span className="original">ENDEREÇO</span>
                                <span className="hover-text absolute top-0 left-0 text-red-500 w-full h-full">ENDEREÇO</span>
                            </a>
                            <a href="#" className="nav-item relative overflow-hidden text-sm block">
                                <span className="original">CONTATO</span>
                                <span className="hover-text absolute top-0 left-0 text-red-500 w-full h-full">CONTATO</span>
                            </a>
                            <a href="#" className="nav-item relative overflow-hidden text-sm block">
                                <span className="original">WHATSAPP</span>
                                <span className="hover-text absolute top-0 left-0 text-red-500 w-full h-full">WHATSAPP</span>
                            </a>
                        </div>
                        <div className="flex flex-col  gap-4">
                            <a href="#" className="nav-item relative overflow-hidden text-sm block">
                                <span className="original">CARROS</span>
                                <span className="hover-text absolute top-0 left-0 text-red-500 w-full h-full">CARROS</span>
                            </a>
                            <a href="#" className="nav-item relative overflow-hidden text-sm block">
                                <span className="original">NOSSA HISTÓRIA</span>
                                <span className="hover-text absolute top-0 left-0 text-red-500 w-full h-full">NOSSA HISTÓRIA</span>
                            </a>
                            <a href="#" className="nav-item relative overflow-hidden text-sm block">
                                <span className="original">MARCAS PARCEIRAS DA LOJA</span>
                                <span className="hover-text absolute top-0 left-0 text-red-500 w-full h-full">MARCAS PARCEIRAS DA LOJA</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                {/* Linha fina */}
                <div className="w-full h-[0.5px] bg-[#c5a47e] opacity-40"></div>

                {/* Conteúdo centralizado */}
                <div className="text-center -pb-10 overflow-hidden mt-4">
                    <h1 className="text-[15vw] font-bold tracking-wider m-0 leading-none max-md:text-[10vw]">
                        TBMOTORS
                    </h1>

                    {/* Texto inferior */}
                    <div className="flex justify-between text-xs mt-2 max-md:flex-col max-md:space-y-1 max-md:text-center">
                        <span>© 2025 TB Motors. Todos os direitos reservados. Política de Privacidade.</span>
                        <span>Feito por Davi França</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
