import React from "react";
import "../../../../public/styles/ff7-ui-fonts.css";
import Image from 'next/image';

function Overlay4() {
  return (
<div className="antialiased absolute max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto centered-text z-30">
  <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
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
            <a href="https://github.com" target="_blank" className="text-xs font-medium text-gray-300"> GitHub </a>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="https://github.com/arcana-markets/arcana-ui" target="_blank" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">arcana-ui</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
        The arcana markets web app
        </p>
      </a>
    </li>
  </ul>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="https://github.com/kizmt/dex-explorer" target="_blank" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">dex-explorer</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
        An interface for exploring solana dex markets
        </p>
      </a>
    </li>
  </ul>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="https://github.com/arcana-markets/arcana-trading-bot" target="_blank" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">arcana-trading-bot</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
        Local Web GUI for providing liquidity on Solana decentralized exchanges.
        </p>
      </a>
    </li>
  </ul>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="https://github.com/openbook-dex/openbook-v2" target="_blank" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">openbook-v2</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
        openbook-v2 monorepo, contains solana program and ts client
        </p>
      </a>
    </li>
  </ul>

  <ul className="mt-4 space-y-2">
    <li>
      <a href="https://github.com/arcana-markets/spl-token-faucet" target="_blank" className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
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
