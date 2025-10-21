import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MobApresentation = () => {

    useGSAP(() => {
        ScrollTrigger.getAll().forEach((st) => st.kill());

        gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#about",
                    start: "-90% bottom",
                    end: "-90% 70%",
                    scrub: 1,
                },
            }).to("#about", { yPercent: -400, ease: "power1.out" });

            ['#exclusividade-section', '#elegancia-section', '#paixao-section'].forEach((section, i) => {
                gsap.from(section, {
                    opacity: 0,
                    y: 50,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom center",
                        toggleActions: "play none none reverse",
                    }
                });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#container2",
                    start: "20% center",
                    end: "bottom 90%",
                    scrub: 1,
                    pin: false,
                    markers: false,
                }
            });

            tl.to("#video-container2", { scale: 1.2, opacity: 1 })
                .to("#tb1", { y: "-100%", opacity: 0 }, 0)
                .to("#tb3", { y: "100%", opacity: 0 }, 0)
                .to("#tb2", { scale: 1.5, opacity: 0 }, 0.1)
                .fromTo("#subtitle-container2", { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, 0.3);
        });

        return () => ScrollTrigger.getAll().forEach(st => st.kill());
    }, []);

    return (
        <div id="apresentation-container" className="bg-black">
            <div id="apresentation-slider" className="flex flex-col relative -mt-96">
                <div id="about-div" className="w-full z-20">
                    <h2 id="desktop" className="font-bebas font-extrabold text-[#7A7A7A] text-center text-8xl -translate-y-100 opacity-70 tracking-wide">TBMOTORS</h2>
                    <h1 id="about" className="font-poppins font-extralight text-6xl text-center -translate-y-10">O que nossa loja oferece?</h1>
                </div>

                <div
                    id="content1"
                    className="min-w-screen h-auto -bottom-50 bg-black relative flex items-center justify-center font-poppins -translate-y-40 flex-col gap-8 py-20"
                >


                    <div id="elegancia-section" className="relative top-auto right-auto w-4/5">
                        <div className="relative translate-x-0 flex justify-center items-center">
                            <video id="elegancia" src="videos/apresentation2.mp4" autoPlay loop muted className="opacity-100 w-full rounded-xl shadow-lg" />
                            <span id="title-elegancia" className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-70 z-10">ELEGÂNCIA</span>
                        </div>
                    </div>

                    <div id="exclusividade-section" className="relative flex justify-center items-center w-5/5">
                        <video id="exclusividade" src="videos/apresentation1.mp4" autoPlay loop muted className="relative translate-y-0 opacity-100 w-full rounded-xl shadow-lg" />
                        <h1 id="title-exclusividade" className="z-20 absolute text-ao-redor text-4xl font-extrabold text-center opacity-90">EXCLUSIVIDADE</h1>
                    </div>

                    <div id="paixao-section" className="relative bottom-auto left-auto translate-y-0 w-4/5">
                        <div className="relative flex justify-center items-center">
                            <video id="paixao" src="videos/apresentation3.mp4" autoPlay loop muted className="translate-y-0 opacity-100 w-full rounded-xl shadow-lg" />
                            <span id="title-paixao" className="absolute font-bold inset-0 flex items-center justify-center text-white text-4xl opacity-70">PAIXÃO</span>
                        </div>
                    </div>
                </div>

                <div
                    id="container2"
                    className="min-w-screen h-screen relative flex flex-col items-center justify-center bg-black overflow-hidden pb-70"
                >
                    <video
                        id="video-container2"
                        src="videos/mustaPresentation.mp4"
                        autoPlay
                        loop
                        muted
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto object-cover brightness-80 opacity-0"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h1 id="tb1" className="font-poppins font-bold text-[8vh] leading-tight tracking-normal text-center text-white">TBMOTORS</h1>
                        <h1 id="tb2" className="font-poppins font-bold text-[8vh] leading-tight tracking-normal text-center text-white">TBMOTORS</h1>
                        <h1 id="tb3" className="font-poppins font-bold text-[8vh] leading-tight tracking-normal text-center text-white">TBMOTORS</h1>
                    </div>
                    <h2 id="subtitle-container2" className="absolute bottom-45 font-poppins font-bold text-3xl text-center text-white opacity-0">EXCLUSIVIDADE EM MOVIMENTO</h2>
                </div>
            </div>
        </div>
    );
};

export default MobApresentation;