import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Apresentation = () => {
    const sliderRef = useRef(null);
    const sectionsRef = useRef([]);

    useGSAP(() => {
        const slider = sliderRef.current;
        const sections = sectionsRef.current;
        const telaAtual = window.innerWidth;

        ScrollTrigger.getAll().forEach((st) => st.kill());

        const sliderTl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
                trigger: slider,
                pin: true,
                scrub: 2,
                markers: false,
                start: "20% 20%",
                end: () =>
                    telaAtual > 1024
                        ? "+=" + slider.offsetWidth * 0.3
                        : "+=" + slider.offsetWidth * 0.8,
            },
        });

        sliderTl.to(slider, {
            x: `${(sections.length - 1) * -100}vw`,
        });

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#about",
                    start: "top bottom",
                    end: "top 80%",
                    scrub: 1,
                    markers: false,
                },
            })
            .to("#about", { yPercent: -562.331, ease: "power1.inOut" });

        const titles = gsap.timeline({
            scrollTrigger: {
                trigger: "#container1-apresentation",
                start: "top center",
                end: "center 20%",
                scrub: false,
                markers: false,
                toggleActions: "play none none reverse",
            },
        });

        titles
            .fromTo(
                "#title-exclusividade",
                { yPercent: -30, opacity: 0 },
                { yPercent: 0, opacity: 1, ease: "power1.inOut" },
                0
            )
            .fromTo(
                "#title-elegancia",
                { yPercent: -30, color: "#e1aa26", opacity: 0 },
                { yPercent: 0, color: "#FFFFFF", opacity: 0.7, ease: "power1.inOut" },
                0
            )
            .fromTo(
                "#title-paixao",
                { yPercent: -30, color: "#e1aa26", opacity: 0 },
                { yPercent: 0, color: "#FFFFFF", opacity: 0.7, ease: "power1.inOut" },
                0
            );

        const cont1tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#container1-apresentation",
                start: "top center",
                end: "20% 30%",
                markers: false,
            },
        });

        cont1tl
            .to("#exclusividade", { opacity: 1, duration: 0.9, yPercent: -40 })
            .to("#elegancia", { opacity: 1, duration: 0.5 }, "+=0.2")
            .to("#paixao", { opacity: 1, duration: 0.2 }, "+=0.4");

        const cont2Tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#container2",
                start: "98% 40%",
                end: "center center",
                scrub: 2,
                markers: false,
                ease: "power1.inOut",
            },
        });

        cont2Tl
            .to("#tb1", { opacity: 0, yPercent: -10, duration: 0.8 }, 0)
            .to("#tb3", { opacity: 0, yPercent: -10, duration: 0.8 }, 0.1)
            .to("#subtitle-container2", { opacity: 1, duration: 0.7 }, 0.5)
            .to("#video-container2", { zIndex: 1, opacity: 0, duration: 0.7 }, 0.5);

        const cont2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#container2",
                start: "100% center",
                end: "200% 65%",
                scrub: true,
                markers: false,
            },
        });

        cont2.to("#container2", { yPercent: 60, ease: "power1.inOut" }, 0)
        cont2.to("#tb2", { scale:0.8, ease: "power1.inOut" }, 0);
        cont2.to("#subtitle-container2", {scale:1.2, letterSpacing: "0.1em", ease: "power1.inOut" }, 0)

        return () => ScrollTrigger.killAll();
    }, []);

    return (



        <div id="container1-apresentation" ref={sliderRef} className="flex relative ">
            {/* Container 1 */}
            <div id="about-div" className="absolute w-full -translate-y-190">
                <h2 className="font-gothic font-extrabold text-[#7A7A7A] text-center text-9xl opacity-70 tracking-wide">TBMOTORS</h2>


                <h1 id="about" className="font-poppins font-extralight text-6xl text-center translate-y-60">O que nossa loja oferece?</h1>
            </div>
            <div
                ref={(el) => (sectionsRef.current[0] = el)}
                className="min-w-screen h-[100vh] -bottom-50 bg-black relative flex items-center justify-center font-poppins"
            >

                <video id="exclusividade"
                    src="videos/apresentation1.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute w-[1000px] h-auto rounded-4xl shadow-lg translate-y-50 opacity-0"
                />
                <h1 id="title-exclusividade" className="z-20 absolute text-ao-redor text-7xl font-extrabold text-center opacity-90 ">
                    EXCLUSIVIDADE
                </h1>



                <div id="eleganciadiv" className="absolute top-10 right-[1180px]   ">
                    <div className="relative translate-x-20">
                        <video
                            id="elegancia"
                            src="videos/apresentation2.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-[700px] h-auto object-cover rounded-xl shadow-lg  opacity-0 relative z-0"
                        />
                        <span id="title-elegancia" className="absolute inset-0 flex items-center justify-center text-white text-7xl font-bold opacity-70 z-10">
                            ELEGÂNCIA
                        </span>
                    </div>
                </div>

                <div id="paixaodiv" className="absolute bottom-10 left-[1180px] translate-y-50 ">
                    <div className="relative">
                        <video
                            id="paixao"
                            src="videos/apresentation3.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-[700px] h-auto object-cover rounded-xl shadow-lg -translate-y-50 opacity-0"
                        />
                        <span id="title-paixao" className="absolute font-bold inset-0 flex items-start justify-center text-white text-7xl opacity-70">
                            PAIXÃO
                        </span>
                    </div>
                </div>
            </div>

            {/* Container 2 */}
            <div
                id="container2"
                ref={(el) => (sectionsRef.current[1] = el)}
                className="min-w-screen h-[100vh] -bottom-50 relative flex flex-col items-center justify-center gap-[-5] bg-black"
            >


                <h1 id="tb1" className="font-poppins font-bold text-[32vh] tracking-wider text-center orange opacity-100">
                    TBMOTORS
                </h1>
                <h1 id="tb2" className="font-poppins font-bold text-[32vh] tracking-wider text-center orange -mt-50 z-10">
                    TBMOTORS
                </h1>
                <h1 id="tb3" className="font-poppins font-bold text-[32vh] tracking-wider text-center orange -mt-50 opacity-100">
                    TBMOTORS
                </h1>
                <h2 id="subtitle-container2" className="font-poppins font-bold text-7xl relative -translate-y-90 opacity-0">
                    EXCLUSIVIDADE EM MOVIMENTO
                </h2>

                <video
                    id="video-container2"
                    src="videos/tbmotors3.mp4"
                    autoPlay
                    loop
                    muted
                    className="z-20 absolute top-1/2 transform -translate-y-1/2 w-[900px] h-auto object-cover rounded-xl shadow-lg opacity-100"
                />

            </div>
            <div className="h-[200vh] bg-transparent"></div>

        </div>
    );
};

export default Apresentation;