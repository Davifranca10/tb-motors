import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-screen h-[85vh] overflow-hidden z-1">
            <video
                src="/videos/drone.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default Hero;