    import React, { useRef, useState } from "react";
    import gsap from 'gsap';
    import { useGSAP } from "@gsap/react";
    import { ScrollTrigger } from "gsap/all";

    gsap.registerPlugin(ScrollTrigger);

    const Machine = () => {

        return (
            <div id="porshe" className='relative w-full overflow-hidden p-50 '>
                
                
                <h2 id="title" className="text-[8em] uppercase font-poppins font-bold  tracking-tight leading-none">
                    Quando potência e <br /> desejo se <br /> encontram em <span className="text-blue-700 tracking-widest"> {">>>"} </span>
                </h2>
                <h1 className="uppercase font-bebas font-extrabold text-[#006dff] text-[9em] text-center pt-20">Porshe
                    <span className="bg-gradient-to-r text-[1.5em] from-[#003172] via-[#8ab4ec] to-[#003780] bg-clip-text text-transparent "> 718</span> Caymann</h1>
                <img src="images/porshe718.png" alt="porshe"  />

            </div>

        );
    };

    export default Machine;