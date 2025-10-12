import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { percentage } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const SplitScreen = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const particlesRef = useRef(null);


    const [hoveredIndex, setHoveredIndex] = useState(0);
    const descriptionRef = useRef(null);

    const begonhaImage1Ref = useRef(null);
    const begonhaImage2Ref = useRef(null);
    const begonhaSectionRef = useRef(null);
    const begonhaText1Ref = useRef(null);
    const begonhaText2Ref = useRef(null);

    const splitImage2Ref = useRef(null);
    const splitImage3Ref = useRef(null);
    const realizandoRef = useRef(null);



    useGSAP(() => {
        // --- ANIMAÇÃO SPLIT PRINCIPAL ---
        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "-40% 20%",
                end: "bottom top",
                scrub: true,
            },
        }).fromTo(
            imageRef.current,
            { width: "100vw", ease: "power2.inOut" },
            { width: "40vw", ease: "power2.inOut", duration: 1 }
        );

        // --- ANIMAÇÃO PIN PRINCIPAL ---
        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=380%",
                pin: true,
                scrub: true,
                anticipatePin: 1,
            },
        });

        // --- ANIMAÇÃO ENTRE IMAGENS BEGONHA ---
        const begonhaTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: begonhaSectionRef.current,
                start: "20% 60%",
                end: "40% 40%",
                scrub: 1,
            },
        });

        begonhaTimeline
            .fromTo(
                begonhaImage2Ref.current,
                { clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" },
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1,
                    ease: "power2.inOut",
                }
            )
            .to(
                begonhaText1Ref.current,
                { opacity: 0, y: -20, duration: 0.5, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(
                begonhaText2Ref.current,
                { opacity: 0, yPercent: 0 },
                { opacity: 1, duration: 0.5, ease: "power2.out" },
                "-=0.3"
            );

        // --- ANIMAÇÃO DAS LINHAS DOURADAS ---
        const lines = gsap.utils.toArray(".bg-gradient-to-r");

        lines.forEach((line) => {
            gsap.fromTo(
                line,
                { scaleX: 0, transformOrigin: "left center", opacity: 0 },
                {
                    scaleX: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: line,
                        start: "top 85%",
                        end: "top 65%",
                        scrub: false,
                    },
                }
            );
        });

        const trocaSplit = gsap.timeline({
            scrollTrigger: {
                trigger: begonhaSectionRef.current,
                start: "bottom 20%",
                end: "bottom top",
                scrub: 1,
                markers: false
            },
        })
            .fromTo(
                splitImage2Ref.current,
                { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1,
                    ease: "power2.inOut",
                }
            )

        gsap.timeline({
            scrollTrigger: {
                trigger: begonhaSectionRef.current,
                start: "bottom -80%",
                end: "bottom -150%",
                scrub: 1,
                markers: false
            }
        })
            .fromTo(splitImage3Ref.current,
                { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, ease: "power2.inOut" }
            );

        gsap.fromTo(
            particlesRef.current,
            { opacity: 1 },
            {
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: realizandoRef.current, // agora segue até o fim da seção funkson
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );



    }, []);

    return (
        <>
            <div className="relative">
                {/* Grid de fundo sutil */}
                <div className="fixed inset-0 bg-[linear-gradient(rgba(228,140,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(228,140,8,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0"></div>

                {/* Partículas flutuantes */}
                <div ref={particlesRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        ></div>
                    ))}
                </div>

                <section
                    ref={sectionRef}
                    className="flex h-[100vh] w-[40%] z-40 pointer-events-none "
                >
                    <div
                        ref={imageRef}
                        className="absolute w-[100vw] h-full pointer-events-none overflow-hidden"
                    >
                        <img
                            src="images/split.png"
                            alt="split 1"
                            className="w-full h-full object-cover"
                        />
                        <img
                            ref={splitImage2Ref}
                            src="images/split2.png"
                            alt="split 2"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                            }}
                        />
                        <img
                            ref={splitImage3Ref}
                            src="images/split3.png"
                            alt="split 3"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            style={{
                                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                            }}
                        />
                    </div>

                </section>

                <div className="w-[110%] h-0.5  -ml-10 bg-gradient-to-r from-[#000000] via-[#1d1600] to-[#ffc400]"></div>


                {/* --- CONTEÚDO --- */}
                <div
                    id="funkson"
                    className="absolute top-0 right-0 w-6/10 h-full flex items-center justify-center  p-10 z-30"
                >
                    <div
                        ref={contentRef}
                        className="font-poppins w-[100vw] text-gray-200 mt-50  tracking-wider "
                    >
                        <div id="title">
                            <h2 className="font-bebas text-[180px] font-bold  orange mb-6 text-center">
                                <span className="text-white">QUEM</span> SOMOS
                            </h2>
                            <h3 className="text-2xl -mt-20 pb-30 text-center tracking-widest font-light">
                                <span className="orange">UM POUCO SOBRE</span> A NOSSA HISTÓRIA
                            </h3>
                        </div>

                        <div id="paixao-tornou-negocio" className="p-10">
                            <h2 className="font-bebas subtitle ">PAIXÃO QUE SE TORNOU NEGÓCIO</h2>
                            <p className="mb-4 paragraph uppercase pb-30">
                                "Desde pequeno sempre fui fascinado por motores e design automotivo.
                                O que começou como um<span className="orange"> hobby</span> se transformou
                                em uma missão: oferecer <span className="orange">experiências únicas</span> a
                                quem compartilha a mesma <span className="orange">paixão</span> por máquinas
                                de alto desempenho."
                            </p>
                            <div className="w-[700px] h-0.5 -translate-x-57 bg-gradient-to-r from-[#e48c08] to-[#c57b0b] mt-6"></div>
                        </div>

                        {/* --- ANIMAÇÃO DE LINHA ENTRE IMAGENS --- */}
                        <div
                            id="conheca-begonha"
                            ref={begonhaSectionRef}
                            className="mt-80 mb-90 relative "
                        >
                            <div className="relative w-full ml-50 mt-4">
                                <h2
                                    ref={begonhaText1Ref}
                                    className="font-gilda absolute w-full bottom-2"
                                >
                                    Thiago Begonha, fundador da{" "}
                                    <span className="orange">TB Motors</span>
                                </h2>
                                <h2 ref={begonhaText2Ref} className="z-30 opacity-0 absolute -bottom-182 left-0 right-0 text-center font-gilda ">
                                    Thiago Begonha, e sua{" "}
                                    <span className="orange">Família</span>
                                </h2>
                            </div>

                            <div className="relative w-[700px] h-[700px] mx-auto overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    ref={begonhaImage1Ref}
                                    src="images/begonha.png"
                                    alt="begonha"
                                    className="w-full h-full object-cover"
                                />
                                <img
                                    ref={begonhaImage2Ref}
                                    src="images/begonhafamilia.png"
                                    alt="begonha alternativa"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                    style={{
                                        clipPath: "polygon(0 0, 0 0, 0 0, 0 0)",
                                    }}
                                />

                            </div>
                        </div>

                        <div className="w-[700px] h-0.5 translate-x-110 bg-gradient-to-r from-[#e48c08] to-[#c57b0b]"></div>

                        <div id="mission" className="w-[45vw] ml-20 ">
                            <h2 className="pb-15 mt-30 font-poppins subtitle font-light text-[100px] whitespace-nowrap">
                                O que nos move?
                            </h2>

                            <p className="paragraph text-2xl pb-10">
                                Acreditamos que <span className="orange font-bold">cada detalhe</span>{" "}
                                conta. Buscamos sempre o máximo desempenho — nos veículos, nas entregas e
                                nas experiências que criamos.
                            </p>

                            <div className="mt-6 flex gap-8 items-start">
                                <div className="w-1/2">
                                    {percentage.map((item, index) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            className={`w-full text-left py-4 border-b border-[#7e5200] transform transition-transform duration-300 ease-in-out ${hoveredIndex === index
                                                ? "text-[#e48c08] scale-120 border-[#ffa600] border-b-2"
                                                : "text-[#686868] scale-110"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-2xl font-medium">{item.title}</span>
                                                    <span className="text-xl text-[#e48c08] ">⟶</span>
                                                </div>
                                                <span className="text-sm text-gray-500">100%</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                <div className="w-1/2  h-[2em]">
                                    <p
                                        ref={descriptionRef}
                                        className="mb-4 pl-10 pt-10 paragraph text-2xl pb-20 text-gray-200"
                                        key={hoveredIndex}
                                    >
                                        {percentage[hoveredIndex].description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="realizando-sonhos" ref={realizandoRef} className="pt-130">
                            <div className="w-[700px] h-0.5 -translate-x-57 bg-gradient-to-r from-[#111111] to-[#c57b0b] mt-6"></div>

                            <h2 className="text-9xl tracking-wide font-bebas text-center h-30 pt-1">
                                REALIZANDO SONHOS
                            </h2>
                            <div className="w-[700px] h-0.5 translate-x-110 bg-gradient-to-r from-[#e48c08] to-[#111111] "></div>

                            <p className="paragraph text-3xl font-bold uppercase leading-12 ml-10 orange w-[88%] pt-30 pb-40">
                                A <span className="text-white">verdadeira recompensa</span> do nosso
                                trabalho está <span className="text-white">no rosto do cliente</span>: no
                                instante em que o <span className="text-white">sonho se realiza</span> e a
                                felicidade transborda. É aí que{" "}
                                <span className="text-white">todo esforço faz sentido</span>.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-30px) translateX(20px); }
                    50% { transform: translateY(-60px) translateX(-20px); }
                    75% { transform: translateY(-30px) translateX(20px); }
                }
            `}</style>
        </>
    );
};

export default SplitScreen;