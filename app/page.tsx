'use client';

import { useEffect, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [ethBalance, setEthBalance] = useState<string>('0');

  useEffect(() => {
    const fetchBalance = async () => {
      if (isConnected && address) {
        const provider = new ethers.providers.Web3Provider(window.ethereum as any);
        const balance = await provider.getBalance(address);
        setEthBalance(ethers.utils.formatEther(balance));
      }
    };
    fetchBalance();
  }, [address, isConnected]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-4">SwaplystFi</h1>

      <ConnectButton />

      {isConnected && (
        <div className="mt-4 text-center">
          <p className="mb-2">Wallet: {address}</p>
          <p>ETH Balance: {ethBalance}</p>
          {/* Anda boleh letak komponen swap sebenar di sini nanti */}
        </div>
      )}
    </main>
  );
}
