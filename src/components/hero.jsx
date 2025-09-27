import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-screen h-[85vh] overflow-hidden">
            <video
                src="/videos/drone.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full h-full"
            />

            <div className="font-gothic absolute inset-0 flex items-center justify-center -mt-100 z-20">
                <h1 className="absolute text-[10rem] text-white font-bold [letter-spacing:0.1em] [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]"> <span className='text-[#e1aa26]'>TB</span>MOTORS</h1>
                <p className='font-poppins absolute mt-45 text-[20px] [letter-spacing:0.8em] [text-shadow:0_4px_10px_rgba(0,0,0,0.4)]'><span className='text-[#e1aa26]'>EXCLUSIVIDADE</span> EM MOVIMENTO</p>
                <p className='font-poppins absolute text-[20px] mt-[110vh] [letter-spacing:0.5em] [text-shadow:0_4px_10px_rgba(0,0,0,0.4)]'>NÃO PERCA ESSA <span className='text-[#e1aa26]'>OPORTUNIDADE!</span></p>
            </div>

            <button onclick="document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })" 
                className="circle absolute bottom-[3rem] left-1/2 translate-x-[85vh] z-50">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
            </button>
        </div>
    );
};

export default Hero;