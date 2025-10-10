import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { percentage } from "../../constants";
import { useState, useRef } from "react";



gsap.registerPlugin(ScrollTrigger);

const SplitScreen = () => {

    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    const [hoveredIndex, setHoveredIndex] = useState(0);
    const descriptionRef = useRef(null);

    useGSAP(() => {


        const fadeIn = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "-40% 20%",
                end: "bottom top",
                markers: false,
                scrub: true,
            },
        })
            .fromTo(
                imageRef.current,
                { width: "100%", ease: "power2.inOut" },
                { width: "40vw", ease: "power2.inOut", duration: 1 },
            )

        //  .to(contentRef.current, { opacity: 1, duration: 1 }, "-=1");



        const metadetl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=400%", // quanto tempo a seção fica “presa”
                pin: true,
                scrub: true,
                anticipatePin: 1,
                markers: false, // ative para visualizar o início/fim
            },
        })





    }, []);

    return (
        <><div className="relative">


            <section
                ref={sectionRef}
                className="flex h-[100vh] w-full overflow-hidden z-20 bg-transparent"
            >
                {/* Lado esquerdo - / Imagem */}
                <div className="absolute w-full h-full overflow-hidden ">
                    <img
                        ref={imageRef}
                        src="images/split.png"
                        className="w-full h-full object-cover z-10"
                    />
                </div>
            </section>

            {/* Lado direito - Texto (absoluto, escondido até animar) */}
            <div
                id="funkson" className="absolute top-0 right-0 w-6/10 h-full flex items-center justify-center p-10  bg-[#111] z-30"

            >

                <div ref={contentRef} className="font-poppins max-w-3xl text-gray-200 -translate-y-10 tracking-wider ">

                    <div id="title">
                        <h2 className="font-gothic text-[180px] font-bold orange mb-6 text-center">
                            <span className="text-white">QUEM</span> SOMOS
                        </h2>
                        <h3 className="text-2xl -translate-y-20 text-center tracking-widest font-light"><span className="orange">UM POUCO SOBRE</span> A NOSSA HISTÓRIA</h3>
                    </div>


                    <div id="paixao-tornou-negocio" className="p-10">

                        <h2 className="font-gothic subtitle ">PAIXÃO QUE SE TORNOU NEGÓCIO</h2>
                        <p className="mb-4 paragraph uppercase pb-30">
                            "Desde pequeno sempre fui fascinado por motores e design automotivo. O que começou como um<span className="orange"> hobby</span> se transformou
                            em uma missão: oferecer <span className="orange">experiências únicas</span> a quem compartilha a mesma <span className="orange">paixão</span> por máquinas de alto desempenho."
                        </p>
                        <div className="w-[700px] h-0.5 -translate-x-57 bg-gradient-to-r from-[#e48c08] to-[#c57b0b] mt-6"></div>
                    </div>
                    <div id="conheca-begonha" className="mt-80 mb-90">
                        <img src="images/begonha.png" alt="begonha" className="w-2xl mt-30 mx-auto" />
                        <h2 className="font-gilda text-end">Thiago Begonha, fundador da <span className="orange">TB Motors</span></h2>
                    </div>

                    <div className="w-[700px] h-0.5 translate-x-65 bg-gradient-to-r from-[#e48c08] to-[#c57b0b] "></div>


                    <div id="mission" className="w-[45vw]">
                        <h2 className="pb-15 mt-30 font-poppins subtitle font-light text-[100px] whitespace-nowrap -translate-x-20">
                            O que nos move?
                        </h2>


                        {/* área com lista */}
                        <div className="mt-6 -translate-x-20 flex gap-8 items-start">

                            <div className="w-1/2">
                                {percentage.map((item, index) => (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        className={`w-full text-left py-4 border-b border-[#7e5200] transform transition-transform duration-300 ease-in-out ${hoveredIndex === index ? 'text-[#e48c08] scale-120 border-[#ffa600] border-b-2' : 'text-[#686868] scale-110'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            {/* título + flecha */}
                                            <div className="flex items-center gap-1">
                                                <span className="text-2xl font-medium">{item.title}</span>
                                                <span className="text-xl text-[#e48c08] ">⟶</span>
                                            </div>

                                            {/* 100% alinhado à direita */}
                                            <span className="text-sm text-gray-500">100%</span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* descrição dinâmica */}
                            <div className="w-1/2">
                                <p
                                    ref={descriptionRef}
                                    className="mb-4 pl-10 pt-10 paragraph text-2xl pb-20   text-gray-200"
                                    key={hoveredIndex} /* força re-render para animação simples se necessário */
                                >
                                    {percentage[hoveredIndex].description}
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
        </>
    );
};

export default SplitScreen;
