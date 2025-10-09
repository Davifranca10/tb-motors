import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SplitScreen = () => {

    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);


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
                { width: "40vw", ease: "power2.inOut", duration: 2 },
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
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Lado direito - Texto (absoluto, escondido até animar) */}
            <div
                id="funkson" className="absolute top-0 right-0 w-6/10 h-full flex items-center justify-center p-10  bg-[#111] z-10"
                
            >   

                <div ref={contentRef} className="font-poppins max-w-3xl text-gray-200 -translate-y-10 tracking-wider ">

                    <div id="title">
                        <h2 className="font-gothic text-[180px] font-bold orange mb-6 text-center">
                            <span className="text-white">QUEM</span> SOMOS
                        </h2>
                        <h3 className="text-2xl -translate-y-20 text-center tracking-widest font-light"><span className="orange">UM POUCO SOBRE</span> A NOSSA HISTÓRIA</h3>
                    </div>


                    <div id="paixao-tornou-negocio">

                        <h2 className="font-gothic subtitle">PAIXÃO QUE SE TORNOU NEGÓCIO</h2>
                        <p className="mb-4 leading-relaxed">
                            Somos uma empresa apaixonada por carros de alto padrão e performance.
                            Nosso objetivo é proporcionar experiências únicas, realizando sonhos
                            sobre quatro rodas.
                        </p>
                        <p className="leading-relaxed">
                            Trabalhamos com excelência e dedicação para entregar sempre o melhor.
                        </p>

                    </div>


                </div>
            </div>
        </div>
        </>
    );
};

export default SplitScreen;
