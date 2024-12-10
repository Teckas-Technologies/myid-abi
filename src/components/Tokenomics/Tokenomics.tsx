import InlineSVG from 'react-inlinesvg';
import './Tokenomics.css';

export const Tokenomics: React.FC = () => {
    return (
        <div className='w-full h-auto bg-black'>
            <div className="tokenomics-section w-full h-auto md:pt-20 pt-1 pb-10 bg-black" id="tokenomics"> {/* lg:px-[6rem] md:px-[6rem] px-3 */}
                <div className="tokens-top w-full flex flex-col items-center justify-center pb-3">
                    <h2 className="tokens-heading font-bold text-xl">Tokenomics</h2>
                    <p className='para font-normal'>Introducing first Identity coin, My Identity coin</p>
                </div>
                <div className="tokens-center w-full flex md:flex-row flex-col items-center mt-10">
                    <div className="tokens-left md:w-[50%] w-full h-auto flex justify-center items-center">
                        <div className="tokens-bg w-full md:h-[23rem] h-auto xl:pl-[10rem] lg:pl-[6rem] md:pl-[4rem] flex justify-center md:justify-start">
                            <div className="tokenomics-img xl:w-[24rem] xl:h-[24rem] lg:w-[22rem] lg:h-[22rem] md:w-[20rem] md:h-[20rem] h-[12rem] w-[12rem]">
                                <img src="/images/tokenomics-logo.png" alt="tokenomics" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                    <div className="tokens-right md:w-[50%] xl:ml-[-5rem] lg:ml-[-6rem] md:ml-[-4rem] xl:pr-0 md:pr-[2rem] flex flex-col gap-3 md:mt-0 mt-10 md:px-0 px-6">
                        <div className="outer w-full rounded-2xl">
                            <div className="layer-2 w-full rounded-2xl bg-black">
                                <div className="tokens-box w-full rounded-2xl px-[2rem] py-[1rem]">
                                    <h2 className='feature-title font-semibold text-md'>Total Supply</h2>
                                    <p className='feature-para font-normal text-sm text-white pt-3'>Maximum Supply: 100 billion MYID Coins (MYID)</p>
                                </div>
                            </div>
                        </div>

                        <div className="outer w-full rounded-2xl">
                            <div className="layer-2 w-full rounded-2xl bg-black">
                                <div className="tokens-box w-full rounded-2xl px-[2rem] py-[1rem]">
                                    <h2 className='feature-title font-semibold text-md'>Distribution</h2>
                                    <p className='feature-para font-normal text-sm text-white pt-3'>Team and Advisors: 20% of coins (20 billion MYID) reserved for the founding team. - Ecosystem Development: 20% of coins (20 billion MYID) allocated for partnerships, marketing, and ecosystem growth. -Public Purchases: 60% of coins (60 billion) are available for public purchase.</p>
                                </div>
                            </div>
                        </div>

                        <div className="outer w-full rounded-2xl">
                            <div className="layer-2 w-full rounded-2xl bg-black">
                                <div className="tokens-box w-full rounded-2xl px-[2rem] py-[1rem]">
                                    <h2 className='feature-title font-semibold text-md'>Inflation</h2>
                                    <p className='feature-para font-normal text-sm text-white pt-3'>No inflation (fixed supply).</p>
                                </div>
                            </div>
                        </div>

                        <div className="outer w-full rounded-2xl">
                            <div className="layer-2 w-full rounded-2xl bg-black">
                                <div className="tokens-box w-full rounded-2xl px-[2rem] py-[1rem]">
                                    <h2 className='feature-title font-semibold text-md'>Token Utility</h2>
                                    <p className='feature-para font-normal text-sm text-white pt-3'>Transaction Fees: Users pay transaction fees on the Clarus blockchain in MYID. - Staking: Users can stake MYID to participate in securing the network and earn rewards.</p>
                                </div>
                            </div>
                        </div>

                        <div className="outer w-full rounded-2xl">
                            <div className="layer-2 w-full rounded-2xl bg-black">
                                <div className="tokens-box w-full rounded-2xl px-[2rem] py-[1rem]">
                                    <h2 className='feature-title font-semibold text-md'>Incentives</h2>
                                    <p className='feature-para font-normal text-sm text-white pt-3'>Staking Rewards: Users who stake their MYID coins earn an annual yield in the form of distributed MYID Coins. - Liquidity Mining: Liquidity providers on decentralized exchanges (DEXs) earn rewards in MYID.</p>
                                </div>
                            </div>
                        </div>

                        <div className="outer w-full rounded-2xl">
                            <div className="layer-2 w-full rounded-2xl bg-black">
                                <div className="tokens-box w-full rounded-2xl px-[2rem] py-[1rem]">
                                    <h2 className='feature-title font-semibold text-md'>ZeroBorder</h2>
                                    <p className='feature-para font-normal text-sm text-white pt-3'>Only 10% of the total supply will be listed on exchanges, while the remaining coins will be available exclusively at market value during ZeroBorder account setups. This scarcity is designed to create massive demand and drive the price higher, rewarding early MYID holders with exceptional value and gains! The rush is on—get your MYID now before prices soar and join the future of secure, self-banking with ZeroBorder!</p>
                                </div>
                            </div>
                        </div>

                        <div className="buy-coin-btn md:hidden w-full px-5">
                            <a
                                href="#buy"
                                className="text-white font-medium cursor-pointer text-sm"
                            >
                                <div className="connect-btn flex items-center justify-center gap-[0.3rem] px-[1.5rem] py-[1rem] rounded-[4rem] cursor-pointer">
                                    <h2 className="text-black font-semibold text-md">Buy Coin</h2>
                                    <InlineSVG
                                        src="/icons/right-arrow.svg"
                                        className="w-3 h-3"
                                    />
                                </div>
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}