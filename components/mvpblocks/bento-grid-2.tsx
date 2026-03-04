'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BentoItem {
  title: string;
  description: string;
  image: string;
  span: string;
}

const itemsSample: BentoItem[] = [
  {
    title: 'Advanced Analytics',
    description: 'Track growth and performance. Get insights to optimize your strategy.',
    image: '/1.png',
    span: 'md:col-span-2',
  },
  {
    title: 'CRM Integration',
    description: 'Manage your customers easily. Build lasting relationships with ease.',
    image: '/2.png',
    span: 'md:col-span-2',
  },
  {
    title: 'Email Campaigns',
    description: 'Automate your outreach. Boost engagement with targeted emails.',
    image: '/3.png',
    span: 'md:col-span-2 lg:col-span-1',
  },
  {
    title: 'Workflow Automation',
    description: 'Streamline your processes. Save time with smart automations.',
    image: '/4.png',
    span: 'md:col-span-2 lg:col-span-1',
  },
  {
    title: 'Live Chat',
    description: 'Engage visitors instantly. Support and convert in real time.',
    image: '/5.png',
    span: 'md:col-span-2 lg:col-span-1',
  },
  {
    title: 'Data Visualization',
    description: 'See trends at a glance. Make data-driven decisions quickly.',
    image: '/6.png',
    span: 'md:col-span-2',
  },
  {
    title: 'Inbox Management',
    description: 'Organize communications. Stay on top of every conversation.',
    image: '/3.png',
    span: 'md:col-span-2',
  },
];

export default function BentoGrid() {
  return (
    <section className="relative overflow-hidden bg-[#020816] px-6 py-16 md:px-10 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,86,173,0.2),transparent_58%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Get Features You
          </h2>
          <p className="mt-2 text-4xl font-medium italic tracking-tight text-[#3f82f6] md:text-5xl">
            Wish You Had
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#b4c6ea] md:text-base">
            From campaign automation to audience targeting, our tools are built
            to help wellness brands grow faster and market smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {itemsSample.map((item, index) => (
            <motion.article
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl border border-[#1b2e50] bg-[#040c1d] ${item.span}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_25%,rgba(73,126,214,0.3),transparent_42%),radial-gradient(circle_at_88%_90%,rgba(59,115,214,0.26),transparent_38%),linear-gradient(135deg,rgba(12,33,70,0.7),rgba(2,8,20,0.98))]" />
              <div className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen bg-[radial-gradient(ellipse_at_20%_75%,rgba(100,157,255,0.25),transparent_33%),radial-gradient(ellipse_at_70%_40%,rgba(58,114,208,0.22),transparent_35%)]" />

              <div className="relative flex h-full min-h-[320px] flex-col p-6">
                <h3 className="text-3xl font-medium leading-tight text-white md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-6 text-[#c2d4f7] md:text-base">
                  {item.description}
                </p>

                <div className="relative mt-auto flex justify-center pt-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={340}
                    height={240}
                    className="h-auto w-full max-w-[340px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
