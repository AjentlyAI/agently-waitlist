import Link from 'next/link';
import { IconSparkles } from '@tabler/icons-react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Creators', href: '#creators' },
];

export default function NavbarAjently() {
  return (
    <header className="sticky top-4 z-50 px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/25 bg-[#08142d]/65 px-4 py-3 text-white shadow-[0_8px_30px_rgba(2,8,22,0.35)] backdrop-blur-xl md:px-6">
        <Link href="#" className="flex items-center gap-2 text-base font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2567ff]">
            <IconSparkles className="h-4 w-4" />
          </span>
          Ajently
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#d6e4ff] transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#waitlist"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#10254a] transition hover:bg-[#eef3ff]"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
