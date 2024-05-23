import React from "react";
import "../../../../public/styles/ff7-ui-fonts.css";
import Image from 'next/image';

function Overlay4() {
  return (
<div className="max-w-7xl px-4 sm:px-6 lg:px-8 antialiased absolute z-50 max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto centered-text fade-in-text">
<div className="mx-auto lg:max-w-none">
<h2 className="font-medium text-2xl mb-8 tracking-tighter fade-in-text text-center">Code</h2>    
<div className="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div className="flex items-center gap-4 ">
    <Image
      alt=""
      src="/logo.png"
      width="100"
      height="100"
      className="size-16 rounded-full object-cover"
    />
    <div>
      <h3 className="text-lg font-medium text-white">kizmt</h3>
      <div className="flow-root">
        <ul className="-m-1 flex flex-wrap">
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300"> GitHub </a>
          </li>
          <li className="p-1 leading-none">
            <a href="#" className="text-xs font-medium text-gray-300">Website</a>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">arcana-ui</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
        The arcana markets web app
        </p>
      </a>
    </li>
  </ul>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">dex-explorer</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
        An interface for exploring solana dex markets
        </p>
      </a>
    </li>
  </ul>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">arcana-trading-bot</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
        Local Web GUI for providing liquidity on Solana decentralized exchanges.
        </p>
      </a>
    </li>
  </ul>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">openbook-v2</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
        openbook-v2 monorepo, contains solana program and ts client
        </p>
      </a>
    </li>
  </ul>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="#" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">spl-token-faucet</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
        Request devnet SPL tokens for testing
        </p>
      </a>
    </li>
  </ul>

</div>
</div>
</div>
  );
}

export default Overlay4;
