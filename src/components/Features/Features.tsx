"use client"
import InlineSVG from 'react-inlinesvg';
import './Features.css';

export const Features: React.FC = () => {
    
    return (
        <div className='w-full h-auto bg-black'>
            <div className="features-section w-full lg:px-[6rem] md:px-[6rem] px-3 bg-black" id="featured">
                <div className="features-top w-full flex flex-col items-center justify-center pb-3">
                    <h2 className="features-heading font-bold text-xl">Features</h2>
                    <p className='para font-normal'>Your gateway to true financial freedom!</p>
                </div>

                {/* Desktop design */}
                <div className="features-center hidden md:flex w-full xl:h-[33rem] md:h-[29rem] pb-5 flex justify-center mt-10">

                    {/* Feature 1 */}
                    <div className="feature-item  flex flex-col justify-end bg-black xl:px-[2rem] md:px-[1rem] xl:py-[1rem] py-[0.5rem]">
                        <div className="outer xl:w-[23rem] md:w-[20rem] rounded-md">
                            <div className="layer-2 w-full rounded-md bg-black">
                                <div className="feature-box w-full xl:h-[19rem] md:h-[16rem] rounded-md xl:p-[3rem] md:p-[2rem]">
                                    <div className="feature-icon w-full flex justify-start">
                                        <InlineSVG
                                            src="/icons/exchange.svg"
                                            className="w-[3.6rem] h-[3.6rem]"
                                        />
                                    </div>
                                    <h2 className='feature-title font-semibold text-md pt-3'>Famous Exchanges</h2>
                                    <p className='feature-para font-normal text-sm text-white pt-3'>MYID will be available for trade on Switchdex and other trading platforms shortly after the conclusion of this final offering.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-item flex flex-col justify-between bg-black xl:px-[2rem] md:px-[1rem] xl:py-[1rem] py-[0.5rem]">
                        <div className="outer xl:w-[23rem] md:w-[20rem] rounded-md">
                            <div className="layer-2 w-full h-auto rounded-md bg-black">
                                <div className="feature-box w-full xl:h-[19rem] md:h-[16rem] rounded-md xl:p-[3rem] md:p-[2rem]">
                                    <div className="feature-icon w-full flex justify-start">
                                        <InlineSVG
                                            src="/icons/rocket.svg"
                                            className="w-[3.6rem] h-[3.6rem]"
                                        />
                                    </div>
                                    <h2 className='feature-title font-semibold text-md pt-3'>Empower Your Future</h2>
                                    <p className='feature-para font-normal text-sm text-white pt-3'>Don&apos;t wait—join the financial revolution today with MYID and secure your future!</p>
                                </div>
                            </div>
                        </div>
                        <div className="center-logo w-full flex justify-center">
                            <div className="center-img xl:w-[7rem] md:w-[6rem] xl:h-[7rem] md:w-[6rem]">
                                <img src="/images/center-logo.png" alt="" className='w-full h-full' />
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-item  flex flex-col justify-end bg-black xl:px-[2rem] md:px-[1rem] xl:py-[1rem] py-[0.5rem]">
                        <div className="outer xl:w-[23rem] md:w-[20rem] rounded-md">
                            <div className="layer-2 w-full h-auto rounded-md bg-black">
                                <div className="feature-box w-full xl:h-[19rem] md:h-[16rem] rounded-md xl:p-[3rem] md:p-[2rem]">
                                    <div className="feature-icon w-full flex justify-start">
                                        <InlineSVG
                                            src="/icons/control.svg"
                                            className="w-[3.6rem] h-[3.6rem]"
                                        />
                                    </div>
                                    <h2 className='feature-title font-semibold text-md pt-3'>Total Control</h2>
                                    <p className='feature-para font-normal text-sm text-white pt-3'>ZeroBorder self-banking accounts ensure your assets are fully controlled by you</p>
                                    {/* <p className='py-4'></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features-bottom hidden md:flex w-full xl:h-[30rem] md:h-[26rem] flex justify-center items-start pt-10 gap-[4rem]">
                <div className="feature-box feb xl:w-[23rem] md:w-[20rem] xl:h-[19rem] md:h-[16rem] rounded-md xl:p-[3rem] md:p-[2rem]">
                    <div className="feature-icon w-full flex justify-start">
                        <InlineSVG
                            src="/icons/extreme.svg"
                            className="w-[3.6rem] h-[3.6rem]"
                        />
                    </div>
                    <h2 className='feature-title font-semibold text-md pt-3'>Extreme Profits</h2>
                    <p className='feature-para font-normal text-sm text-white pt-3'>All time high $0.33 USD/MYID June 15, 2021 coinmarketcap.com, Bittrex Global.</p>
                </div>
                <div className="feature-box feb xl:w-[23rem] md:w-[20rem] xl:h-[19rem] md:h-[16rem] rounded-md xl:p-[3rem] md:p-[2rem]">
                    <div className="feature-icon w-full flex justify-start">
                        <InlineSVG
                            src="/icons/finance.svg"
                            className="w-[3.6rem] h-[3.6rem]"
                        />
                    </div>
                    <h2 className='feature-title font-semibold text-md pt-3'>Revolutionize your Finances</h2>
                    <p className='feature-para font-normal text-sm text-white pt-3'>Save 95% on fees, recover stolen crypto, enjoy AI assistance, and earn rewards with MYID—disrupting traditional banking.</p>
                </div>
            </div>

            {/* Features mobile design */}
            <div className="features-mobile md:hidden w-full flex flex-col gap-5 pt-10 px-10 bg-black">
                <div className="outer w-full rounded-md">
                    <div className="layer-2 w-full rounded-md bg-black">
                        <div className="feature-box w-full h-[19rem] rounded-md pl-[3rem] py-[3rem] pr-[1.5rem]">
                            <div className="feature-icon w-full flex justify-start">
                                <div className="fim w-[3.6rem] h-[3.6rem] rounded-full">
                                    <InlineSVG
                                        src="/icons/control.svg"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h2 className='feature-title font-semibold text-lg pt-3'>Total Control</h2>
                            <p className='feature-para font-normal text-md text-white pt-3'>ZeroBorder self-banking accounts ensure your assets are fully controlled by you</p>
                        </div>
                    </div>
                </div>

                <div className="outer w-full rounded-md">
                    <div className="layer-2 w-full rounded-md bg-black">
                        <div className="feature-box w-full h-[19rem] rounded-md pl-[3rem] py-[3rem] pr-[1.5rem]">
                            <div className="feature-icon w-full flex justify-start">
                                <div className="fim w-[3.6rem] h-[3.6rem] rounded-full">
                                    <InlineSVG
                                        src="/icons/finance.svg"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h2 className='feature-title font-semibold text-md pt-3'>Revolutionize your Finances</h2>
                            <p className='feature-para font-normal text-sm text-white pt-3'>Save 95% on fees, recover stolen crypto, enjoy AI assistance, and earn rewards with MYID—disrupting traditional banking.</p>
                        </div>
                    </div>
                </div>

                <div className="outer w-full rounded-md">
                    <div className="layer-2 w-full rounded-md bg-black">
                        <div className="feature-box w-full h-[19rem] rounded-md pl-[3rem] py-[3rem] pr-[1.5rem]">
                            <div className="feature-icon w-full flex justify-start">
                                <div className="fim w-[3.6rem] h-[3.6rem] rounded-full">
                                    <InlineSVG
                                        src="/icons/rocket.svg"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h2 className='feature-title font-semibold text-lg pt-3'>Empower Your Future</h2>
                            <p className='feature-para font-normal text-md text-white pt-3'>Don&apos;t wait—join the financial revolution today with MYID and secure your future!</p>
                        </div>
                    </div>
                </div>

                <div className="outer w-full rounded-md">
                    <div className="layer-2 w-full rounded-md bg-black">
                        <div className="feature-box w-full h-[19rem] rounded-md pl-[3rem] py-[3rem] pr-[1.5rem]">
                            <div className="feature-icon w-full flex justify-start">
                                <div className="fim w-[3.6rem] h-[3.6rem] rounded-full">
                                    <InlineSVG
                                        src="/icons/exchange.svg"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            <h2 className='feature-title font-semibold text-lg pt-3'>Famous Exchanges</h2>
                            <p className='feature-para font-normal text-md text-white pt-3'>MYID will be available for trade on Switchdex and other trading platforms shortly after the conclusion of this final offering.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fbm relative md:hidden w-full h-[13rem] pt-10 px-10">
            <div className="feature-box feb absolute z-40 w-auto h-[19rem] rounded-md pl-[3rem] py-[3rem] pr-[1.5rem] mr-10">
                    <div className="feature-icon w-full flex justify-start">
                        <div className="fim w-[3.6rem] h-[3.6rem] rounded-full">
                            <InlineSVG
                                src="/icons/extreme.svg"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                    <h2 className='feature-title font-semibold text-md pt-3'>Extreme Profits</h2>
                    <p className='feature-para font-normal text-sm text-white pt-3'>All time high $0.33 USD/MYID June 15, 2021 coinmarketcap.com, Bittrex Global.</p>
                </div>
            </div>
            
            <div className="features-bottom-mobile md:hidden w-full h-[13rem]">
                
            </div>
        </div>
    )
}