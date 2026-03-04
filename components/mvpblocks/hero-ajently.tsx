import { Button } from '@/components/ui/button';
import { IconArrowRight, IconSparkles } from '@tabler/icons-react';
import Image from 'next/image';

export default function HeroAjently() {
  return (
    <section className="bg-white px-3 pb-16 md:px-4 md:pb-20">
      <div className="mx-auto w-full max-w-[84rem]">
        <div className="relative overflow-hidden rounded-t-none rounded-b-[3rem] border border-[#17284b] bg-[radial-gradient(circle_at_70%_50%,rgba(37,103,255,0.45),transparent_45%),linear-gradient(180deg,#071025_0%,#0a1b3f_55%,#0e47b8_100%)] px-8 py-18 shadow-[0_10px_40px_rgba(4,10,26,0.35)] md:px-12 md:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-xl text-left">
              <p className="inline-flex items-center gap-1.5 rounded-full border border-[#2d4472] bg-[#0e1f45]/70 px-3 py-1 text-xs font-medium text-[#d6e4ff]">
                <IconSparkles className="h-3 w-3" />
                AI on demand
              </p>
              <h1 className="mt-7 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Your AI Workforce
                <span className="mt-2 block font-medium text-[#d8e7ff]">
                  On demand
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#d2def4] md:text-lg">
                Discover, use and monetize powerful AI agents for work,
                creativity and automation, all in one place.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white px-7 text-[#10254a] hover:bg-[#edf3ff]"
                >
                  <a href="#waitlist">
                    Get Early Access
                    <IconArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#5f7dbc] bg-[#0f2552]/80 px-7 text-white hover:bg-[#16356f]"
                >
                  <a href="#waitlist">Join Waitlist</a>
                </Button>
              </div>
            </div>
            <div className="relative h-80 w-full lg:h-[28rem]">
              <Image
                src="/skew-heroimg.png"
                alt="Hero Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
