import "../../../../public/styles/ff7-ui-fonts.css";
import TextAnimator from '../Text/TextAnimator';

export default function Overlay3() {
  return (
    <div className="antialiased absolute max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto centered-text">
      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <h1 className="font-medium text-2xl mb-8 tracking-tighter fade-in-text">my work</h1>
        <div className="fade-in-text">
          On a mission to build products developers love, and along the
          way, teach the next generation of developers. Here&apos;s a summary of my
          work so far.
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Arcana Markets</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm ff7-text">
          Co-founder and developer, 2023 to present
        </p>
        <br />
        <div>
          <TextAnimator
            text={`▪ Securing partnerships with industry leaders
            ▪ Competing in and winning hackathon events
            ▪ Rust & TS Development
            ▪ Managing team dynamics and social accounts
            ▪ Supporting developers, attending workshops, networking with IL’s.`} />
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Mako Labs</h2>
        <p className="text-neutral-600 ff7-text dark:text-neutral-400 text-sm">
          Freelance Web Developer, 2023 to present
        </p>
        <br />
        <div>
          <TextAnimator
            text={`▪ Secured contracted project for Solana-based exchange
            ▪ Networking and relationship building
            ▪ Open source contributions
            ▪ Workshops and educational conferences`} />
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">SolApe DEX</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm ff7-text">
          Fullstack Engineer, Chief of Operations, 2020 to 2023
        </p>
        <br />
        <div>
          <TextAnimator
            text={`▪ Responsible for securing new DEX partnerships and token listings
            ▪ Contributions to GitHub repositories
            ▪ Hosting community town-hall & twitter space events
            ▪ Producing an NFT collection
            ▪ Attending Solana conferences and promoting the brand/exchange`} />
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Scan Global Logistics</h2>
        <p className="text-neutral-600 ff7-text dark:text-neutral-400 text-sm">
          Business Development Manager, 2017 to 2020
        </p>
        <br />
        <div>
          <TextAnimator
            text={`▪ Meeting monthly KPI’s and establishing leads with new business
            ▪ Maintaining relationships and building upon existing accounts
            ▪ Trained in EDI Enterprise software, responsible for entering in operational and account related data.
            ▪ Responsible for managing the accounts of top clients in the technology sector
            ▪ Responsible for charging out and providing spreadsheet breakdowns of monthly costing to clients
            `} />
        </div>
      </div>
    </div>
  );
}
