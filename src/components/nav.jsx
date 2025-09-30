import React, { useState, useEffect, useRef } from 'react';
import { navLinks } from '../../constants/index.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Nav = () => {

    useGSAP(() => {

        gsap.from("nav", {
            y: -100,           
            opacity: 0,        
            duration: 1.0,
            ease: "power3.out",
            delay: 3.0         
        });
    }, []);

    return (

        <nav className='fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 h-18 '>
            <div className=" ml-12 -mt-14">
                <a href="#home">
                    <img src="/images/logotb.png" alt="logotb" className="w-28 h-38" />
                </a>





                <ul className='flex gap-30 -mr-40 -mt-2 font-gilda'>
                    {navLinks.map((link) => (
                        <li key={link.id}> {/* ✅ */}
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>



        </nav>
    );
};

export default Nav;