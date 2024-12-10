"use client"

import { useState } from 'react';
import './Exchanges.css';

export const Exchanges: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <div className='w-full h-auto bg-black'>
            <div className="exchanges-section w-full h-auto pt-10 pb-10 lg:px-[6rem] md:px-[6rem] bg-black">
                <div className="exchanges-top w-full flex flex-col items-center justify-center pb-3">
                    <h2 className="tokens-heading font-bold text-xl">Exchanges</h2>
                    <p className='para font-semibold text-center'>MYID will be listed for trade on December 26, 2024.</p>
                </div>

                <div className="exchanges-center w-full flex md:flex-row flex-col justify-center items-center px-10 mt-20">
                    <div className="switchdex px-5 py-1">
                        <div className="switchdex-logo md:w-[20rem] md:h-[5rem] w-[18rem] h-[5rem] mb-0">
                            <img src="/images/switchdex-logo.png" alt="switchdex logo" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* <div className="coinstore px-5 py-1">
                        <div className="coinstore-logo md:w-[20rem] md:h-[5rem] w-[18rem] h-[5rem] mt-2 relative overflow-hidden">
                            <img
                                src="/icons/coinstore-icon.svg"
                                alt="coinstore logo"
                                className="w-full h-full object-cover transform scale-150 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    </div> */}
                </div>

                <h2 className='exchange-para hidden md:block text-center font-medium text-xl xl:px-[22%] lg:px-[20%] md:px-[15%] pt-20'>
                    MYID is the foundation of ZeroBorder, fueling our platforms to revolutionize global financial and social systems
                </h2>

                <div className="section w-full md:px-[6rem] mt-20">
                    <div className="video-section w-full rounded-2xl md:py-8 py-4">
                        <div className="youtube-video relative w-full xl:h-[30rem] lg:h-[28rem] md:h-[25rem] h-[17rem]">
                            {!isPlaying && (
                                <div className="play-btn absolute z-40 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex justify-center items-center rounded-full cursor-pointer pl-3" onClick={handlePlayVideo}>
                                    <div className="play md:w-[3.5rem] md:h-[3.5rem] w-[2.6rem] h-[2.6rem]">
                                        <img src="/images/play.png" alt="play" className='w-full h-full' />
                                    </div>
                                </div>
                            )}
                            {isPlaying && (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/SXgD1vk5Jsk?autoplay=1&controls=0&rel=0&modestbranding=1&showinfo=0"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
