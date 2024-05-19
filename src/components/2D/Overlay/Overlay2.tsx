import Link from 'next/link';
import Image from 'next/image';
import style from "./Overlay.module.css";
import { useEffect, useState } from 'react';
import gohan from '../../../../public/images/gifs/gohan2-optimize.gif';
import aerith from '../../../../public/images/gifs/aerithz.gif';
import jerry from '../../../../public/images/gifs/jerry.gif';
import donchic from '../../../../public/images/gifs/donchic.gif';
import hammers from '../../../../public/images/gifs/hammers.gif';
import trunks from '../../../../public/images/gifs/trunks.gif';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Overlay2() {
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButtons(true);
    }, 3000);
  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section>
      <div className="antialiased  max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto centered-text">
      <h1 className="mb-8 text-2xl font-medium tracking-tighter ">
        about me ⚡️
      </h1>
      <div className="ff7-text prose prose-neutral dark:prose-invert">
        I&apos;m a frontend developer, optimist, and community builder. 
        I currently work Vercel where I help teach the Next.js
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
      <div className="ff7-text">
          I create educational content for developers, teaching them about web
          development, JavaScript and TypeScript, React and Next.js, and more.
          This comes in all forms: blog posts, videos, tweets, conference talks,
          and workshops. You can watch some of my favorites below.
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">

      </div>
      <div className="ff7-text">
          Over the past decade, I&apos;ve written content on my blog and newsletter.
          I try to keep things simple. You&apos;ll find writing about technologies
          I&apos;m interested in at the time, or how I&apos;m learning and growing in my
          career, sharing knowledge along the way.
      </div>
      <div className="ff7-text">
          I&apos;ve worked with and advised companies on{' '}
          <Link href="/blog/developer-marketing">developer marketing</Link>,{' '}
          <Link href="/blog/devrel">developer relations</Link>, building
          open-source communities, product-led growth, and more.
      </div>
      <div className={style.overlay_button_container}>
        <div className={style.overlay_button_row}>
          <Link href="/work">
             <button className={style.button}>Next page</button>
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Overlay2;
