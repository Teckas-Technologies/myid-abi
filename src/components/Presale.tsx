"use client"
import { useState, useEffect } from "react";
import { ethers, providers } from "ethers";
import { useAccount, useDisconnect } from "wagmi";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

import { MYIDPresaleABI } from "@/constants/ABI";
import { constant } from "@/constants/constants";

declare global {
    interface Window {
        ethereum?: providers.ExternalProvider;
    }
}

// Define your contract address
const MYIDPresaleAddress = constant.presaleAddress; // Replace with your actual deployed contract address

export default function PresalePage() {
    const { isConnected } = useAppKitAccount();
    const { address } = useAccount();
    const { open } = useAppKit();
    const { disconnect } = useDisconnect();

    const [contract, setContract] = useState<ethers.Contract | null>(null);
    //   const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
    const [ethToTokens, setEthToTokens] = useState(0);

    // Initialize contract and provider
    useEffect(() => {
        if (isConnected && ethers && address && typeof window !== "undefined" && window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(MYIDPresaleAddress, MYIDPresaleABI, signer);
            //   setProvider(provider);
            setContract(contractInstance);
        }
    }, [isConnected, address]);

    // Function to contribute in USDT
    //   const contributeUSDT = async (usdtAmount: string) => {
    //     if (!contract) return;
    //     try {
    //       const tx = await contract.contributeUSDT(usdtAmount);
    //       await tx.wait();
    //       console.log("USDT contribution successful:", tx);
    //     } catch (error) {
    //       console.error("USDT contribution failed:", error);
    //     }
    //   };

    const getPresaleStage = async () => {
        if (!contract) return;
        const stage = await contract.getStage();
        console.log("Current presale stage:", stage.toString());
        return stage;
    };

    const getPresaleInfo = async () => {
        if (!contract) return;
        const [progress, stage, ethToUsd, endTime, raisedUsdt, tokensPerUsdt] = await contract.genInfo();
        console.log("Presale progress:", progress.toString());
        console.log("Current stage:", stage.toString());
        console.log("ETH to USD rate for 10 ETH:", ethers.utils.formatUnits(ethToUsd, 18));
        console.log("Presale end time:", new Date(endTime * 1000));
        console.log("Total USDT raised:", raisedUsdt.toString());
        console.log("Tokens per USDT:", tokensPerUsdt.toString());
        return { progress, stage, ethToUsd, endTime, raisedUsdt, tokensPerUsdt };
    };

    // const getBalances = async (account: string) => {
    //     if (!contract) return;
    //     const [ethBalance, usdtBalance, tokenBalance, boughtTokens] = await contract.balancesOf(account);
    //     console.log("ETH Balance:", ethers.utils.formatEther(ethBalance));
    //     console.log("USDT Balance:", ethers.utils.formatUnits(usdtBalance, 18));
    //     console.log("Token Balance:", ethers.utils.formatUnits(tokenBalance, 18));
    //     console.log("Bought Tokens:", ethers.utils.formatUnits(boughtTokens, 18));
    //     return { ethBalance, usdtBalance, tokenBalance, boughtTokens };
    // };



    // Function to contribute in ETH
    const contributeETH = async (ethAmount: string) => {
        if (!contract) return;
        try {
            if (!address) return;
            getPresaleStage();
            getPresaleInfo();
            const isPresaleActive = await contract.presaleSuccessful();
            console.log("Is Presale Active?", isPresaleActive);
            const presaleTokenBalance = await contract.tokensAllocatedForPresale();
            console.log("Tokens allocated for presale:", presaleTokenBalance);
            // const balances = await getBalances(address.toString());
            const ethAmountBigNumber = ethers.utils.parseEther(ethAmount);
            console.log("ethAmountBigNumber :", ethAmountBigNumber);
            // const tx = await contract.contributeEth(ethAmountBigNumber); ethers.utils.hexlify(500000)
            const tx = await contract.contributeEth({ value: ethAmountBigNumber });

            console.log("tx :", tx)
            const receipt = await tx.wait();
            console.log("ETH contribution successful:", receipt);
        } catch (error) {
            console.error("ETH contribution failed:", error);
        }
    };

    // Get ETH to Tokens rate
    const getEthToTokens = async (ethAmount: string) => {
        if (!contract) return;
        try {
            console.log("ethAmount :", ethAmount)
            const ethAmountBigNumber = ethers.utils.parseEther(ethAmount);
            console.log("ethAmountBigNumber :", ethAmountBigNumber)
            const tokenAmount = await contract.ethToTokens(ethAmountBigNumber);
            console.log("ETH to Token :", tokenAmount)
            setEthToTokens(Number(ethers.utils.formatUnits(tokenAmount, 18))); // Assuming the token has 18 decimals
        } catch (error) {
            console.error("Failed to fetch ETH to Tokens rate:", error);
        }
    };

    return (
        <div>
            <h1>MYID Presale</h1>
            {isConnected ? (
                <div>
                    <p>Connected: {address}</p>
                    <button className="bg-red-500" onClick={() => disconnect()}>Disconnect</button>
                </div>
            ) : (
                <button className="bg-green-500" onClick={() => open({ view: "Connect" })}>Connect Wallet</button>
            )}

            <div>
                <h2>Contribute ETH</h2>
                <button className="bg-sky-500" onClick={() => contributeETH("0.000001")}>Contribute 0.0001 ETH</button>
            </div>

            <div>
                <h2>ETH to Tokens Conversion</h2>
                <input type="text" placeholder="Enter ETH amount" onChange={(e) => getEthToTokens(e.target.value)} />
                <p>Tokens: {ethToTokens}</p>
            </div>
        </div>
    );
}
