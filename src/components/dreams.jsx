import React, { useRef, useState } from 'react';
import { dreamsData } from "../../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import gsap from "gsap";

const Dreams = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const paralaxRef = useState(null);

    return (
        <div ref={paralaxRef} className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center pt-[40em] py-16 px-4 max-md:pt-16">
            <h2 className="text-9xl tracking-wide font-bebas font-bold max-md:text-7xl h-28 max-md:h-auto">SONHOS REALIZADOS</h2>
            <p className="text-xl mb-30 font-gilda font-bold max-md:mb-16">
                O MOMENTO EM QUE O <span className="text-yellow-400">SONHO</span> SE TORNA <span className="text-yellow-400">REALIDADE</span>
            </p>

            <div className="flex p-10 max-md:p-0 justify-center items-stretch gap-4 h-[750px] w-full max-md:flex-col max-md:h-auto max-md:gap-12">
                {dreamsData.map((dream, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-500 ease-in-out md:flex-1 ${hoveredIndex === index ? 'md:flex-[2]' : hoveredIndex !== null ? 'md:flex-[1.3]' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="h-full flex flex-col">
                            <div className="relative h-5/6 max-md:aspect-square">
                                <a
                                    href="https://www.instagram.com/tb_motors_sc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-3 left-3 bg-black bg-opacity-60 text-white p-2 rounded-md text-sm z-10 hover:text-yellow-400 transition-colors duration-300"
                                >
                                    @tb_motors_sc
                                </a>
                                <img
                                    src={dream.image}
                                    alt={dream.carInfo}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="flex justify-between -mt-8 items-center h-1/6 z-10 max-md:flex-col max-md:items-start max-md:-mt-0 max-md:h-auto max-md:gap-2 max-md:pt-4">
                                <p className="text-left w-1/2 font-poppins font-light max-md:w-full">
                                    {dream.carInfo}{" "}
                                    <span className={`font-medium transition-colors duration-300 ${hoveredIndex === index ? dream.color : 'text-white'}`}>
                                        {dream.span}
                                    </span>
                                </p>

                                <p className={`text-3xl font-bold w-1/2 text-right transition-colors duration-300 font-poppins max-md:w-full max-md:text-left max-md:text-2xl ${hoveredIndex === index ? dream.color : 'text-white'}`}>
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
