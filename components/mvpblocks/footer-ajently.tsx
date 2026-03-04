'use client';

import type React from 'react';
import Link from 'next/link';
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconSparkles,
} from '@tabler/icons-react';

export default function FooterAjently() {
  const handleSpotlightMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mx', `${x}%`);
    e.currentTarget.style.setProperty('--my', `${y}%`);
    e.currentTarget.style.setProperty('--r', '220px');
    e.currentTarget.style.setProperty('--o', '1');
  };

  const handleSpotlightLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--r', '0px');
    e.currentTarget.style.setProperty('--o', '0');
  };

  return (
    <footer className="bg-[#040913] px-6 pt-8 pb-0 text-white md:px-10">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-[#152543] bg-[radial-gradient(circle_at_70%_120%,rgba(28,82,203,0.35),transparent_45%),linear-gradient(180deg,#060d1a_0%,#050b15_100%)] p-8 md:p-10">
        <div className="mb-10 flex flex-wrap items-center gap-4 rounded-full border border-[#162a4f] bg-[#08142d]/70 px-5 py-3 backdrop-blur-lg">
          <p className="flex items-center gap-2 text-base font-semibold">
            <IconSparkles className="h-4 w-4 text-[#6ea0ff]" />
            Ajently
          </p>
          <div className="ml-auto flex flex-wrap items-center gap-6 text-sm text-[#bfd2f4]">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-white">
              How it Works
            </a>
            <a href="#creators" className="hover:text-white">
              Creators
            </a>
            <a href="#waitlist" className="hover:text-white">
              Waitlist
            </a>
          </div>
        </div>



        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-[#89b1ff]">Ajently</h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#9cb2d8]">
              Marketplace and operating system for AI agents. Discover, run,
              and monetize powerful agent workflows.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Platform</h4>
            <div className="mt-4 space-y-3 text-sm text-[#9cb2d8]">
              <a href="#features" className="block hover:text-white">
                Agent Marketplace
              </a>
              <a href="#how-it-works" className="block hover:text-white">
                Instant Runs
              </a>
              <a href="#creators" className="block hover:text-white">
                Creator Monetization
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <div className="mt-4 space-y-3 text-sm text-[#9cb2d8]">
              <Link href="#" className="block hover:text-white">
                About
              </Link>
              <Link href="#" className="block hover:text-white">
                Blog
              </Link>
              <Link href="#" className="block hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="mt-4 space-y-3 text-sm text-[#9cb2d8]">
              <p className="flex items-center gap-2">
                <IconMail className="h-4 w-4 text-[#6ea0ff]" />
                hello@ajently.com
              </p>
              <p className="flex items-center gap-2">
                <IconPhone className="h-4 w-4 text-[#6ea0ff]" />
                +1 (555) 123-9012
              </p>
              <p className="flex items-center gap-2">
                <IconMapPin className="h-4 w-4 text-[#6ea0ff]" />
                Remote-first, Global
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#152543] pt-6 text-sm text-[#8da4ce]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p>&copy; {new Date().getFullYear()} Ajently</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 mb-0 flex w-full max-w-6xl justify-center">
        <div
          onMouseMove={handleSpotlightMove}
          onMouseLeave={handleSpotlightLeave}
          className="relative w-full select-none [--mx:50%] [--my:50%] [--r:0px] [--o:0]"
        >
          <svg
            viewBox="0 0 1200 330"
            className="h-auto w-full"
            aria-label="Ajently"
            role="img"
            preserveAspectRatio="xMidYMax meet"
          >
            <text
              x="50%"
              y="285"
              textAnchor="middle"
              className="fill-[#b7c8eb] text-[300px] tracking-tight opacity-18 [font-family:var(--font-bricolage)]"
              style={{
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Ajently
            </text>
          </svg>

          <svg
            viewBox="0 0 1200 330"
            className="pointer-events-none absolute inset-0 h-auto w-full transition-[mask-image,opacity] duration-200"
            style={{
              opacity: 'var(--o)',
              WebkitMaskImage:
                'radial-gradient(circle var(--r) at var(--mx) var(--my), rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0) 78%)',
              maskImage:
                'radial-gradient(circle var(--r) at var(--mx) var(--my), rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 45%, rgba(0,0,0,0) 78%)',
            }}
            aria-hidden="true"
            preserveAspectRatio="xMidYMax meet"
          >
            <defs>
              <linearGradient id="ajently-rainbow-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff3366" />
                <stop offset="20%" stopColor="#ff9f1a" />
                <stop offset="40%" stopColor="#ffe066" />
                <stop offset="60%" stopColor="#4dd0ff" />
                <stop offset="80%" stopColor="#8a63ff" />
                <stop offset="100%" stopColor="#ff3366" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="285"
              textAnchor="middle"
              className="fill-transparent text-[300px] tracking-tight [font-family:var(--font-bricolage)]"
              style={{
                stroke: 'url(#ajently-rainbow-stroke)',
                strokeWidth: 1.7,
                strokeLinejoin: 'round',
                strokeLinecap: 'round',
                strokeMiterlimit: 1,
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Ajently
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
