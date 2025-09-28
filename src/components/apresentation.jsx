import React from "react";

const Apresentation = () => {
    return (
        <div
            id="apresentation"
            className="relative h-[100vh] w-screen bg-black flex items-center justify-center overflow-hidden overflow-y-hidden scale-65"
        >
            {/* Vídeo central de fundo */}
            <video
                src="videos/apresentation1.mp4"
                autoPlay
                loop
                muted
                className="absolute w-[60%] h-auto rounded-4xl shadow-lg"
            />
            <h1 className="absolute text-white text-7xl font-extrabold opacity-30 text-center">
                POWER
            </h1>

            {/* Vídeo superior esquerdo */}
            <div className="absolute top-10 right-280">
                <div className="relative">
                    <video
                        src="videos/apresentation2.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-[550px] h-auto object-cover rounded-xl shadow-lg"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        SPEED
                    </span>
                </div>
            </div>

            {/* Vídeo inferior direito */}
            <div className="absolute bottom-10 left-280">
                <div className="relative">
                    <video
                        src="videos/apresentation3.mp4"
                        autoPlay
                        loop
                        muted
                        className="w-[550px] h-auto object-cover rounded-xl shadow-lg"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        COMFORT
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Apresentation;