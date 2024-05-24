import "../../../../public/styles/ff7-ui-fonts.css";
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
    <div className="antialiased absolute max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto centered-text">
      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <h1 className="fade-in-text mb-4 text-2xl font-medium tracking-tighter">
          about me ⚡️
        </h1>
        <div className="font-medium">
          <TextAnimator
            text={`Jack of all trades; I'm a developer, project manager, and chief operator. I'm currently building Arcana Markets, a yield-optimizing DeFi protocol on the Solana blockchain.`}/>
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
        <div className="font-medium fade-in-text">
          I create educational content for developers, teaching them about web
          development, JavaScript and TypeScript, React and Next.js, and more.
          This comes in all forms: blog posts, videos, tweets, conference talks,
          and workshops. You can watch some of my favorites below.
        </div>
        <div className="my-4 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"></div>
        <div className="font-medium fade-in-text">
          Over the past decade, I&apos;ve written content on my blog and newsletter.
          I try to keep things simple. You&apos;ll find writing about technologies
          I&apos;m interested in at the time, or how I&apos;m learning and growing in my
          career, sharing knowledge along the way.
        </div>
        <div className="font-medium fade-in-text">
          I&apos;ve worked with and advised companies on
          developer marketing developer relations, 
          building open-source communities, product-led growth, and more.
        </div>
        <br></br>
        <div className="font-medium fade-in-text">
          Over the past decade, I&apos;ve written content on my blog and newsletter.
          I try to keep things simple. You&apos;ll find writing about technologies
          I&apos;m interested in at the time, or how I&apos;m learning and growing in my
          career, sharing knowledge along the way.
        </div>
      </div>
    </div>
  );
}

export default Overlay2;
