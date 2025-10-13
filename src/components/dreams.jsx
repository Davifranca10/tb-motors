import React, { useRef, useState } from 'react';
import { dreamsData } from "../../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import gsap from "gsap";



const Dreams = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const paralaxRef = useState(null);


        useGSAP(() => {

            gsap.to(paralaxRef.current, {
                yPercent: -30,
                scrollTrigger: {
                    trigger: paralaxRef.current,
                    start: "top center",
                    end: "40% center",
                    markers: false,
                    scrub: 2,
                },
            });

        }, []);



        return (
            <div ref={paralaxRef} className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center pt-[40em] py-16 px-4">
                <h2 className="text-9xl tracking-wide font-bebas font-bold h-28">SONHOS REALIZADOS</h2>
                <p className="text-xl mb-30 font-gilda font-bold">
                    O MOMENTO EM QUE O <span className="text-yellow-400">SONHO</span> SE TORNA <span className="text-yellow-400">REALIDADE</span>
                </p>

                <div className="flex justify-center items-stretch gap-4 h-[650px] w-[100]">
                    {dreamsData.map((dream, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'flex-[2]' : hoveredIndex !== null ? 'flex-[0.8]' : 'flex-1'
                                }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="h-full flex flex-col">
                                <div className="relative h-5/6">
                                    <a
                                        href="https://www.instagram.com/tb_motors_sc/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute top-3 left-3 bg-black bg-opacity-60 text-white p-2 rounded-md text-sm z-10
                                    hover:text-yellow-400 transition-colors duration-300"
                                    >
                                        @tb_motors_sc
                                    </a>
                                    <img
                                        src={dream.image}
                                        alt={dream.carInfo}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>

                                <div className="flex justify-between -mt-8 items-center h-1/6 z-10">
                                    <p className="text-left w-1/2 font-poppins font-light">
                                        {dream.carInfo}{" "}
                                        <span
                                            className={`font-medium transition-colors duration-300 ${hoveredIndex === index ? dream.color : 'text-white'
                                                }`}
                                        >
                                            {dream.span}
                                        </span>
                                    </p>

                                    <p
                                        className={`text-3xl font-bold w-1/2 text-right transition-colors duration-300 font-poppins ${hoveredIndex === index ? dream.color : 'text-white'
                                            }`}
                                    >
                                        {dream.customer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default Dreams;