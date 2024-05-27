import "../../../../public/styles/ff7-ui-fonts.css";
import style from "./Overlay.module.css";
import TextAnimator from '../Text/TextAnimator';
import Image from 'next/image';
import gohan from '../../../../public/images/gifs/gohan2-optimize.gif';
import aerith from '../../../../public/images/gifs/aerithz.gif';
import jerry from '../../../../public/images/gifs/jerry.gif';
import donchic from '../../../../public/images/gifs/donchic.gif';
import hammers from '../../../../public/images/gifs/hammers.gif';
import trunks from '../../../../public/images/gifs/trunks.gif';

function Overlay2() {
  return (
    <div className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto z-50 centered-text-2">
      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <h1 className="fade-in-text mb-4 text-2xl font-medium tracking-tighter">
          about me ⚡️
        </h1>
        <div className="font-medium">
          <TextAnimator
            text={`Jack of all trades; I'm a developer, project manager, and chief operator. I'm currently 
            building Arcana Markets, a yield-optimizing DeFi protocol on the Solana blockchain.
            You can learn more about that below`}/>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
          <div className="relative h-40">
            <Image
              alt="tom n jerry"
              src={jerry}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative sm:row-span-2 row-span-1">
            <Image
              alt="aerith ff7 remake"
              src={aerith}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover object-top sm:object-center"
            />
          </div>
          <div className="relative">
            <Image
              alt="gohan ssj2"
              src={gohan}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative row-span-2">
            <Image
              alt="Luka"
              src={donchic}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover sm:object-center"
            />
          </div>
          <div className="relative row-span-2">
            <Image
              alt="west ham"
              src={hammers}
              fill
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative h-40">
            <Image
              alt="trunks ssj"
              src={trunks}
              sizes="(max-width: 768px) 213px, 33vw"
              priority
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="my-4 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"></div>
        <div className="font-medium fade-in-text">
        Outside of work, I enjoy retro cartoons, video games, a range of sports, and am a music 
        enthusiast trained in audio engineering. This diverse range of interests keeps me 
        inspired and balanced, fueling my passion for technology and creativity.
        </div>
        <br></br>
        <div className="font-medium fade-in-text">
        Over the last 5 years, I&apos;ve developed a deep interest in the blockchain space, working 
        in a variety of roles across different teams and continuously developing new skill sets. 
        My journey within the industry has been dynamic and fulfilling, allowing me to grow as a developer, 
        project manager, and all-round team player. 
        </div>
        <br></br>
        <div className="font-medium fade-in-text">
        Check out my latest work over @
        <a href="https://arcana.markets" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Arcana Markets
            </a>
        </div>
      </div>
    </div>
  );
}

export default Overlay2;
