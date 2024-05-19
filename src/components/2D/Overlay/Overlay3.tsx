import "../../../../public/styles/ff7-ui-fonts.css";
import TextAnimator from '../Text/TextAnimator';

export default function Overlay3() {
  return (
    <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto centered-text">
      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
        <div className="ff7-text">
          <TextAnimator
            text={`
          On a mission to build products developers love, and along the
          way, teach the next generation of developers. Here's a summary of my
          work so far.`} />
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Arcana Markets</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm ff7-text">
          Co-founder and developer, 2023 - present
        </p>
        <br />
        <div className="ff7-text">
          <TextAnimator
            text={`I joined Vercel early to grow Next.js and our developer community.
            I built our Developer Relations team to teach our community about our
            products. Since I joined Vercel in 2020, Next.js active developers have grown
            1000 percent, now at around 900k. Next.js is now a top 10 software 
            project on GitHub with. It&apos;s used by Walmart, ChatGPT, Starbucks, Okta,
            Datastax, Notion, and more.`} />
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Mako Labs</h2>
        <p className="text-neutral-600 ff7-text dark:text-neutral-400 text-sm">
          Freelance Web Developer, 2022 to present
        </p>
        <br />
        <div className="ff7-text">
          <TextAnimator
            text={`Workiva WK is a cloud platform for data reporting and compliance.
            During my time at Workiva, I gained my first production experience
            using React. I worked on tooling to help predict and alert and
            regressions in our SaaS platform, building a product similar to
            open-source tools like Sentry.`} />
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">SolApe DEX</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm ff7-text">
          Fullstack Engineer, Operations, 2020 to 2022
        </p>
        <br />
        <div className="ff7-text">
          <TextAnimator
            text={`Hy-Vee, an almost 100-year-old grocery chain in the United States,
            wanted to build a new version of their digital storefront. I joined a
            team of product engineers
            working across web and mobile to rebuild their legacy .NET application
            around 500k MAU with React and React Native.
            On the frontend, I led our move from a custom webpack and React
            configuration to Next.js and the latest React patterns. In the
            process, I shared my learnings online, helping educate members of the
            React and Next.js community by creating courses.`} />
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Scan Global Logistics</h2>
        <p className="text-neutral-600 ff7-text dark:text-neutral-400 text-sm">
          Business Development Manager, 2017 to 2020
        </p>
        <br />
        <div className="ff7-text">
          <TextAnimator
            text={`Workiva WK is a cloud platform for data reporting and compliance.
            During my time at Workiva, I gained my first production experience
            using React. I worked on tooling to help predict and alert and
            regressions in our SaaS platform, building a product similar to
            open-source tools like Sentry.`} />
        </div>
      </div>
    </div>
  );
}
