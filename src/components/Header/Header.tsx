"use client";

import InlineSVG from "react-inlinesvg";
import './Header.css'
import { useAccount } from "wagmi";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useEffect } from "react";
import { useContract } from "@/context/ContractProvider";

const navs = [
    { id: "tokenomics", label: "Tokenomics", path: "#tokenomics" },
    { id: "featured", label: "Features", path: "#featured" },
    { id: "buymyid", label: "Buy MYID", path: "#buy-myid" },
    { id: "knowmore", label: "Know More", path: "#know-more" },
];

export const Header: React.FC = () => {
    const { isConnected } = useAppKitAccount();
    const { address } = useAccount()
    const { open } = useAppKit();
    // const { disconnect } = useDisconnect();
    const { myidBalance, refetchBalance } = useContract();

    useEffect(() => {
        if (isConnected && address) {
            refetchBalance(address);
        }
    }, [isConnected, address, refetchBalance]);

    const handleConnectWallet = () => {
        open({ view: 'Connect' });
    }

    const handleDisconnect = () => {
        // disconnect();
        open({ view: 'Account' });
    }

    const handleScrollToSection = (id: string) => {
        const section = document.querySelector(id);
        if (section) {
            const extra = id === "#featured" || id === "#buy-myid" ? 100 : 20;
            // Calculate the offset position, subtracting 6rem (96px assuming 1rem = 16px)
            const offsetTop = section.getBoundingClientRect().top + window.scrollY - extra; // 96px = 6rem
    
            // Scroll to the calculated position with smooth behavior
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };
    

    return (
        <div className="w-full h-auto bg-black">
            <div className="header fixed z-50 top-0 w-full h-[6rem] flex justify-between items-center lg:px-[6rem] md:px-[6rem] px-3 py-2 bg-black">
                <div className="logo hidden md:block w-[9rem] h-[5rem]">
                    <img src="/images/logo.png" alt="myid" className="w-full h-full object-cover" />
                </div>
                {/* Mobile logo */}
                <div className="logo md:hidden  w-[4.2rem] h-[4.3rem]">
                    <img src="/images/logo-mobile.png" alt="myid" className="w-full h-full object-cover" />
                </div>
                <div className="nav-links hidden md:flex flex items-center justify-center gap-[2rem]">
                    {navs.map((nav, index) => (
                        // <a
                        //     key={index}
                        //     href={nav.path}
                        //     className="text-white font-medium cursor-pointer text-sm"
                        // >
                        //     {nav.label}
                        // </a>
                        <h3 key={index} className={`text-white font-medium cursor-pointer text-sm`} onClick={() => handleScrollToSection(nav.path)}>
                            {nav?.label}
                        </h3>
                    ))}
                </div>
                <div className="right-header flex justify-center items-center md:gap-[1.5rem] gap-[1rem]">
                    {!isConnected && !address ? <div className="connect-btn flex items-center justify-center gap-[0.3rem] px-[1rem] py-[0.5rem] rounded-[4rem] cursor-pointer" onClick={handleConnectWallet}>
                        <div className="wallet-icon">
                            <InlineSVG
                                src="/icons/wallet.svg"
                                className="w-5 h-5"
                            />
                        </div>
                        <h2 className="text-black font-bold text-lg">Connect wallet</h2>
                    </div> : <>
                        <h2 className="balance-text hidden md:block font-medium text-lg">Balance</h2>
                        <div className="balance md:px-[1.5rem] md:py-[0.5rem] px-[1.3rem] py-[0.3rem] rounded-[4rem] flex items-center justify-center md:gap-[1rem] gap-[0.5rem] cursor-pointer" onClick={handleDisconnect}>
                            <div className="value flex justify-center items-center gap-2">
                                <h3 className="amount font-bold md:text-xl text-md">{myidBalance}</h3>
                                <h3 className="asset font-bold md:text-xl text-md">MYID</h3>
                            </div>
                            <div className="myid-icon-round ">
                                <InlineSVG
                                    src="/icons/myid.svg"
                                    className="md:w-[2.6rem] md:h-[2.7rem] w-[2.4rem] h-[2.5rem] "
                                />
                            </div>
                        </div>
                    </>}
                    <div className="md:hidden menu">
                        <InlineSVG
                            src="/icons/menu.svg"
                            className="w-7 h-7"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}