"use client";

import { useState } from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
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
        <div className='w-full h-auto bg-black relative'>
            <div className="footer-section w-full bg-black" id="know-more">

                <div className="footer-outer lg:rounded-3xl rounded-2xl mb-20 lg:mx-[7rem] md:mx-[6rem] mt-20 mx-3">
                    <div className="footer-layer lg:rounded-3xl rounded-2xl bg-black">
                        <div className="info-box lg:rounded-3xl rounded-2xl flex md:flex-row flex-col items-center xl:gap-[6rem] lg:gap-[5rem] md:gap-[3rem] gap-[2rem] xl:p-[3.5rem] lg:[3rem] md:p-[2rem] p-[1rem]">
                            <div className="info-logo xl:h-[18rem] xl:w-[18rem] lg:h-[12rem] lg:w-[12rem] md:h-[10rem] md:w-[10rem] h-[13rem] w-[13rem] my-[1rem]">
                                <img src="/images/footer-logo.png" alt="myid" className="w-full h-full object-contain" />
                            </div>
                            <div className="info-text md:w-auto w-full">
                                <h2 className='md:font-bold font-semibold footer-heading lg:text-3xl md:text-2xl text-lg md:text-left text-center'>My Identity Coin Contract Information</h2>
                                <p className='footer-para font-medium lg:text-xl text-md mt-5'>To add the MYID token to your wallet, use the following: </p>
                                <p className='footer-para font-medium lg:text-xl text-md break-all'>Address: <span className='foo-span cursor-pointer' onClick={() => handleCopy('0x5273063725a43A323300C502478C22FbB4e92C2D')}>0x5273063725a43A323300C502478C22FbB4e92C2D</span></p>
                                <p className='footer-para font-medium lg:text-xl text-md'>Decimals: <span className='foo-span'>18</span></p>
                                <p className='footer-para font-medium lg:text-xl text-md'>Token symbol: <span className='foo-span'>MYID</span></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="copy-right w-full py-[2.5rem]">
                    <h3 className='text-center md:font-semibold font-medium md:text-md text-sm'>© 2024, My Identity Coin LTD. All rights reserved</h3>
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