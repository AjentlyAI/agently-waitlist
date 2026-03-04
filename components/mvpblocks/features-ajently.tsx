import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  IconArrowsShuffle,
  IconBuildingStore,
  IconCurrencyDollar,
  IconPlayerPlay,
  IconRobot,
  IconShieldCheck,
} from '@tabler/icons-react';

const features = [
  {
    title: 'Discover AI Agents',
    description: 'Find trusted agents for content, coding, research, and more.',
    icon: IconRobot,
  },
  {
    title: 'Build & Publish Agents',
    description: 'Turn your workflows into reusable agents anyone can run.',
    icon: IconBuildingStore,
  },
  {
    title: 'Monetize Your Work',
    description: 'Set pricing, publish once, and earn from every usage.',
    icon: IconCurrencyDollar,
  },
  {
    title: 'Run Instantly (no setup)',
    description: 'Launch agents in seconds without installs or complex tools.',
    icon: IconPlayerPlay,
  },
  {
    title: 'Own Your Data (decentralized storage)',
    description: 'Keep control of outputs and workflows with secure storage.',
    icon: IconShieldCheck,
  },
  {
    title: 'Automate Tasks Easily',
    description: 'Replace repetitive work with dependable, reusable agents.',
    icon: IconArrowsShuffle,
  },
];

export default function FeaturesAjently() {
  return (
    <section id="features" className="bg-[#f5f7fa] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-sm font-medium text-[#1d304f]">Features</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d304f] md:text-4xl">
            Everything you need to run an AI workforce
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="rounded-2xl border-[#dbe4f1] bg-white py-0 shadow-sm"
              >
                <CardHeader className="space-y-4 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef3fb]">
                    <Icon className="h-5 w-5 text-[#1d304f]" />
                  </div>
                  <CardTitle className="text-base text-[#1d304f]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <p className="text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
