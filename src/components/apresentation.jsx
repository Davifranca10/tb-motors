import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Apresentation = () => {
    const sliderRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
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

                end: () => {
                    if (telaAtual > 1024) {
                        return "+=" + slider.offsetWidth * 0.3;
                    } else {
                        return "+=" + slider.offsetWidth * 0.8;
                    }
                },
            },
        });

        sliderTl.to(slider, {
            x: ((sections.length - 1) * -100) + "vw",
        });

        const cont1tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#container1-apresentation",
                start: "20% center",
                end: "20% 30%",
                duration: 5,
                markers: true
            },
        })
            .to("#exclusividade", { opacity: 1, duration: 0.5, yPercent: -40 })
            .to("#elegancia", { opacity: 1, duration: 1.3, xPercent: -10 })

        return () => ScrollTrigger.killAll();
    }, []);

    return (
        <div id="container1-apresentation" ref={sliderRef} className="flex relative ">
            {/* Container 1 */}
            <div
                ref={(el) => (sectionsRef.current[0] = el)}
                className="min-w-screen h-[100vh] bg-black relative flex items-center justify-center overflow-hidden font-poppins "
            >

                <video id="exclusividade"
                    src="videos/apresentation1.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute w-[1000px] h-auto rounded-4xl shadow-lg translate-y-50 opacity-0"
                />
                <h1 className="absolute text-ao-redor text-white text-7xl font-extrabold text-center opacity-0">
                    EXCLUSIVIDADE
                </h1>



                <div id="eleganciadiv" className="absolute top-10 right-[1180px]   ">
                    <div className="relative">
                        <video
                            id="elegancia"
                            src="videos/apresentation2.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-[700px] h-auto object-cover rounded-xl shadow-lg translate-x-20 opacity-0"
                        />
                        <span className="absolute font-bold inset-0 flex items-center justify-center text-white text-7xl">
                            ELEGÂNCIA
                        </span>
                    </div>
                </div>

                <div id="paixao" className="absolute bottom-10 left-[1180px] translate-y-50 opacity-0">
                    <div className="relative">
                        <video
                            src="videos/apresentation3.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-[700px] h-auto object-cover rounded-xl shadow-lg"
                        />
                        <span className="absolute font-bold inset-0 flex items-center justify-center text-white text-7xl">
                            PAIXÃO
                        </span>
                    </div>
                </div>
            </div>

            {/* Container 2 */}
            <div
                id="container2"
                ref={(el) => (sectionsRef.current[1] = el)}
                className="min-w-screen h-[100vh] relative flex flex-col items-center justify-center gap-[-5] bg-black"
            >
                <h1 className="font-poppins font-bold text-[32vh] tracking-wider text-center text-[#e1aa26] opacity-100">
                    TBMOTORS
                </h1>
                <h1 className="font-poppins font-bold text-[32vh] tracking-wider text-center text-[#e1aa26] -mt-50">
                    TBMOTORS
                </h1>
                <h1 className="font-poppins font-bold text-[32vh] tracking-wider text-center text-[#e1aa26] -mt-50 opacity-100">
                    TBMOTORS
                </h1>
                <h2 className="font-poppins font-bold text-7xl relative -translate-y-90 opacity-0">
                    EXCLUSIVIDADE EM MOVIMENTO
                </h2>

                <video
                    src="videos/tbmotors3.mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute top-1/2 transform -translate-y-1/2 w-[900px] h-auto object-cover rounded-xl shadow-lg opacity-100"
                />
            </div>
        </div>
    );
};

export default Apresentation;
