"use client"

import InlineSVG from 'react-inlinesvg';
import './Info.css';
import { useEffect, useState } from 'react';

export const Info: React.FC = () => {
    const [targetId, setTargetId] = useState("#buy");

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            setTargetId(isMobile ? "#buy" : "#buy-now");
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full justify-center bg-black">
            <div className="info-new w-full lg:px-[6rem] md:px-[6rem] px-3">
                <h3 className="text-white md:text-center text-left font-semibold md:text-[3rem] md:leading-[3.5rem] py-1 text-[1.7rem] leading-[2rem]">Upcoming <span className="bold-text">Exchange Listing Price: $0.01 USD/MYID</span> - December 26, 2024.</h3>
                {/* <h4 className="text-white md:text-center text-justify mt-5 font-medium md:text-lg text-md"><span className="bold-text">🚀 Previous All-Time High:</span> $0.33 USD/MYID! </h4> */}
                <p className="text-white md:text-center text-justify mt-5 font-normal md:text-[1rem] text-[0.9rem] 2xl:px-[18rem] xl:px-[7rem] lg:px-[5rem] md:px-[3rem] px-0">Don&apos;t miss your chance to join the <span className="bold-text">Presale</span> for an exclusive opportunity to potentially 10x your investment or more! Act now before it hits the exchanges again!</p>
                
                <p className="text-white md:text-center text-justify mt-3 font-normal md:text-[1rem] text-[0.9rem] 2xl:px-[5rem] xl:px-[4rem] lg:px-[3rem] md:px-[2rem] px-0">Only 10% of the total MYID supply will be listed on exchanges—the rest can only be claimed at market value during ZeroBorder account setups. This limited availability is set to skyrocket demand, driving prices higher and delivering huge gains to early holders. Don&apos;t miss out—secure your MYID now before prices surge and be part of the future of secure, self-banking with ZeroBorder!</p>

                <h6 className="text-white md:text-center text-left mt-3 font-medium md:text-[1rem] text-[0.9rem]">LIMITED PRESALE SUPPLY OF 5% OF TOTAL MYID.</h6>
                <div className="w-full flex justify-center md:mb-[5rem] mb-[3rem] mt-5">
                    <a href={targetId} className="connect-btn flex items-center justify-center gap-[0.3rem] px-[3.5rem] py-[1rem] rounded-[4rem] cursor-pointer">
                        <h2 className="text-black font-semibold text-md">Buy Now</h2>
                        <InlineSVG
                            src="/icons/right-arrow.svg"
                            className="w-3 h-3"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}