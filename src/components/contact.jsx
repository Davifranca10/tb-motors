import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
    const componentRef = useRef(null);
    const contentRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(contentRef.current, 
            { y: "100%" },
            {
                y: "0%",
            }
        );
    }, { scope: componentRef });
    return (
        <div ref={componentRef} className="h-screen bg-black text-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-gray-800 opacity-30 z-0">
                <p>TB MOTORS</p>
                <p>TB MOTORS</p>
                <p>TB MOTORS</p>
            </div>
            <div ref={contentRef} className="absolute inset-0 flex justify-center items-center z-10">
                 <img src="/public/images/contact.png" alt="Contact Information" className="max-w-6xl w-full" />
            </div>
        </div>
    );
};
export default Contact;
