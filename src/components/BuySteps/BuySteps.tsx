"use client";
import { useState } from 'react';
import './BuySteps.css';

export const BuySteps: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 4000); // Reset after 2 seconds
            })
            .catch(err => console.error('Failed to copy text:', err));
    };
    return (
        <div className='w-full h-auto bg-black relative' id="buy-myid">
            <div className="buy-steps-section w-full bg-black">
                <div className="buy-steps-top w-full flex flex-col items-center justify-center pb-3">
                    <h2 className="tokens-heading font-bold text-xl">Buy MY IDENTITY Coin</h2>
                </div>

                <div className="buy-steps-center w-full lg:px-[6rem] md:px-[6rem] px-6 pt-20">
                    <div className="steps-section md:px-[6rem]">

                        <div className="outer-line relative md:h-[12rem] h-auto">
                            <div className="step-one w-full flex md:flex-row flex-col items-center">
                                <div className="s1-left md:w-[60%] w-full md:pl-[2rem] pl-4 md:pr-10 pr-3 pb-3">
                                    <h2 className='feature-title font-semibold text-lg'>Connect Wallet</h2>
                                    <p className='feature-para font-normal text-md text-white pt-3'>To begin, connect your wallet. Ensure you have Metamask, Trustwallet, myetherwallet or use a wallet supported by Wallet Connect.</p>
                                    <p className='feature-para font-normal text-md text-red-500'>WARNING: USE ONLY THE ETHEREUM NETWORK FOR PURCHASES.  USDT-erc20 or ETH.</p>
                                </div>
                                <div className="s1-right md:w-[40%] w-full md:pl-0 pl-4 md:pt-0 pt-3 md:pb-0 pb-20 flex xl:gap-5 md:gap-2 gap-5 items-center">
                                    <div className="token md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem]">
                                        <img src="/images/metamask-logo.png" alt="metamask" className="w-full h-full" />
                                    </div>
                                    <div className="token md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem]">
                                        <img src="/images/wc-logo.png" alt="metamask" className="w-full h-full" />
                                    </div>
                                    <div className="token md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem]">
                                        <img src="/images/tw-logo.png" alt="metamask" className="w-full h-full" />
                                    </div>
                                    <div className="token md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem]">
                                        <img src="/images/binance-logo.png" alt="metamask" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-[-0.5rem]">
                                <div className="dot w-[1rem] h-[1rem] rounded-full">

                                </div>
                            </div>
                        </div>

                        <div className="outer-line relative md:h-[10rem] h-auto">
                            <div className="step-two w-full flex md:flex-row flex-col items-center">
                                <div className="s1-left md:w-[60%] w-full md:pl-[2rem] pl-4 md:pr-10 pr-3 pb-3">
                                    <h2 className='feature-title font-semibold text-lg'>Buy MYID</h2>
                                    <p className='feature-para font-normal text-md text-white pt-3'>Once you have your preferred wallet ready, click “Connect Wallet” and select the appropriate option. You have 2 options for purchasing MYID: USDT or ETH.</p>
                                </div>
                                <div className="s1-right md:w-[40%] w-full md:pl-0 pl-4 md:pt-0 pt-3 md:pb-0 pb-20 flex gap-5 items-center">
                                    <div className="token md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem]">
                                        <img src="/images/eth-logo.png" alt="metamask" className="w-full h-full" />
                                    </div>
                                    <h2 className="font-medium text-lg text-white">or</h2>
                                    <div className="token md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem]">
                                        <img src="/images/usdt-logo.png" alt="metamask" className="w-full h-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1 left-[-0.5rem]">
                                <div className="dot w-[1rem] h-[1rem] rounded-full">

                                </div>
                            </div>
                        </div>

                        <div className="outer-line relative md:h-[25rem] h-auto">
                            <div className="step-three w-full flex md:flex-row flex-col items-center">
                                <div className="s1-left md:w-[60%] w-full md:pl-[2rem] pl-4 md:pr-10 pr-3 pb-3">
                                    <h2 className='feature-title font-semibold text-lg'>Add MYID Token to your wallet</h2>
                                    <p className='feature-para font-normal text-md text-white pt-3'> • Login to your wallet and locate the “import token” or “add custom asset” option.</p>
                                    <p className='feature-para font-normal text-md text-white pt-3'> • Copy the contract <span className='break-all cursor-pointer' onClick={() => handleCopy('0x5273063725a43A323300C502478C22FbB4e92C2D')}>address: 0x5273063725a43A323300C502478C22FbB4e92C2D</span> and click “add token” to make it visible.</p>
                                </div>
                                <div className="s1-right md:w-[40%] md:flex hidden w-full md:pl-0 pl-4 md:pt-0 pt-3 md:pb-0 pb-5 flex gap-5 items-center xl:gap-[1rem] md:gap-[0.5rem] gap-[1rem]">
                                    <div className="mm-step w-full flex flex-col gap-2">
                                        <h2 className="text-center text-white">Metamask</h2>
                                        <div className="token w-full h-[20rem]">
                                            <img src="/images/metamask-screenshot.png" alt="metamask" className="w-full h-full" />
                                        </div>
                                    </div>
                                    <div className="mm-step w-full flex flex-col gap-2">
                                        <h2 className="text-center text-white">Trust</h2>
                                        <div className="token w-full h-[20rem]">
                                            <img src="/images/trust-screenshot.png" alt="metamask" className="w-full h-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute 2xl:top-[6.3rem] xl:top-[5.5rem] lg:top-[5.5rem] md:top-[4rem] top-1 left-[-0.5rem]">
                                <div className="dot w-[1rem] h-[1rem] rounded-full">

                                </div>
                            </div>
                        </div>
                        <div className="s1-right md:hidden w-full md:pl-0 pl-4 md:pt-0 pt-3 md:pb-0 pb-5 flex gap-5 items-center gap-[1rem]">
                            <div className="mm-step w-full flex flex-col gap-2">
                                <h2 className="text-center text-white">Metamask</h2>
                                <div className="token w-full h-[20rem]">
                                    <img src="/images/metamask-screenshot.png" alt="metamask" className="w-full h-full" />
                                </div>
                            </div>
                            <div className="mm-step w-full flex flex-col gap-2">
                                <h2 className="text-center text-white">Trust</h2>
                                <div className="token w-full h-[20rem]">
                                    <img src="/images/trust-screenshot.png" alt="metamask" className="w-full h-full" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {copied && <div id="toast-success" className="flex fixed top-[6.5rem] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[6rem] items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="sr-only">Check icon</span>
                </div>
                <div className="ms-3 text-sm font-normal flex flex-col"><h2>Copied MYID Address!</h2><p className='text-xs font-normal'>Import MYID to your wallet.</p></div>
                <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close" onClick={() => setCopied(false)}>
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>}
        </div>
    )
}