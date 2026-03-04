import { Card } from '@/components/ui/card';
import { IconArrowRight } from '@tabler/icons-react';
import HeroAjently from '@/components/mvpblocks/hero-ajently';
import FeaturesAjently from '@/components/mvpblocks/features-ajently';
import WaitlistPage from '@/components/mvpblocks/waitlist';
import BentoGrid from '@/components/mvpblocks/bento-grid-2';
import FooterAjently from '@/components/mvpblocks/footer-ajently';
import AjentlyLiquidNavbar from '@/components/ui/ajently-liquid-navbar';


const problems = [
  'AI tools are scattered across too many platforms',
  'Workflows are hard to reuse across tools and teams',
  'There is no central place to discover quality AI agents',
  'Creators struggle to monetize the agents they build',
];

export default function Home() {
  return (
    <main className="bg-white text-[#1d304f]">
      <AjentlyLiquidNavbar />
      <HeroAjently />

      <FeaturesAjently />
      <BentoGrid />

      <section
        id="how-it-works"
        className="bg-white px-6 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 space-y-3 text-center">
            <p className="text-sm font-medium text-[#1d304f]">How it works</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1d304f] md:text-4xl">
              Start in minutes
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { step: '1', title: 'Discover an agent' },
              { step: '2', title: 'Run it instantly' },
              { step: '3', title: 'Get results and save time' },
            ].map((item) => (
              <Card
                key={item.step}
                className="rounded-2xl border-[#dbe4f1] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-[#6f8fbc]">
                  Step {item.step}
                </p>
                <p className="mt-2 text-lg font-medium text-[#1d304f]">
                  {item.title}
                </p>
                <IconArrowRight className="mt-6 h-4 w-4 text-[#6f8fbc]" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="creators" className="bg-[#f5f7fa] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-5xl rounded-3xl border border-[#dbe4f1] bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-medium text-[#1d304f]">For creators</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d304f] md:text-4xl">
            Build once. Earn forever.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Publish your AI agents to Ajently, reach users actively looking for
            automation, and monetize every time your agent runs.
          </p>
        </div>
      </section>

      <WaitlistPage />

      <FooterAjently />
    </main>
  );
}
