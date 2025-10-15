
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
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
            <div className=" flex justify-between items-center pl-10 pt-8">
                <div className="text-left w-1/2">
                    <img src="/images/farol.png" alt="Farol" className="w-35 absolute  ml-3" />
                    <p className="text-[18px] text-white pt-13">VAMOS NEGOCIAR?</p>
                    <h2 className="text-8xl my-2 -mt-8 leading-35">VENHA<br />FAZER<br />PARTE!</h2>
                    <div className="mt-5 flex items-center gap-4">
                        <a href="#" className="text-xl">IG</a>
                        <a href="#" className="text-xl">FB</a>
                        <a href="#" className="text-xl">WA</a>
                        <a href="#" className="text-xl">EM</a>
                    </div>
                </div>
                <div className="flex flex-col items-center w-1/2">
                    <img src="/images/logotb-rodape.png" alt="TB Motors Logo" className="w-90" />
                    <div className="mt-8 flex pt-10 pl-40 gap-10">
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
                <div className="w-full h-[0.5px] bg-[#c5a47e] opacity-40"></div>
                <div className="text-center  -pb-10 overflow-hidden">
                    <h1 className="text-[15vw] font-bold tracking-wider m-0 leading-none">TBMOTORS</h1>
                    <div className="flex justify-between text-xs">
                        <span>© 2025 TB Motors. Todos os direitos reservados. Política de Privacidade.</span>
                        <span>Feito por Davi França</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
