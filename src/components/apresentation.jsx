import React from 'react';

const Apresentation = () => {
    return (
        <div id='apresentation' className='h-[100vh] w-screen flex items-center  bg-black'>


            <div id='content2'>
                <video src="videos/apresentation2.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-20 h-20"></video>

            </div>

            <div id='content1'>
                <video src="videos/apresentation1.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-60 h-60"></video>

            </div>

            <div id='content3'>
                <video src="videos/apresentation3.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-20 h-20"></video>

            </div>
        </div>
    );
};

export default Apresentation;