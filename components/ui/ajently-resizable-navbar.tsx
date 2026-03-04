"use client";

import { useState } from "react";
import { IconSparkles } from "@tabler/icons-react";
import LiquidGlass from "liquid-glass-react";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavItems,
  Navbar,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "#" },
  { name: "Features", link: "#features" },
  { name: "How it Works", link: "#how-it-works" },
  { name: "Creators", link: "#creators" },
];

export default function AjentlyResizableNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full px-6 md:px-10">
      <Navbar className="!fixed !top-0">
        <div className="relative z-[60] mx-auto hidden w-full max-w-6xl items-center justify-center lg:flex">
          <div className="relative h-[60px] w-[min(96vw,72rem)]">
            <LiquidGlass
              mode="prominent"
              displacementScale={56}
              blurAmount={0.085}
              saturation={145}
              aberrationIntensity={1.6}
              elasticity={0}
              cornerRadius={999}
              padding="0"
              style={{ position: "absolute", top: "50%", left: "50%" }}
            >
              <div className="flex w-[min(96vw,72rem)] items-center justify-between rounded-full px-6 py-3 text-white">
                <a href="#" className="relative z-20 flex items-center gap-2 text-base font-semibold text-[#f4f8ff] [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2567ff]">
                    <IconSparkles className="h-4 w-4" />
                  </span>
                  Ajently
                </a>
                <div className="relative flex flex-1 items-center justify-center">
                  <NavItems
                    items={navItems}
                    className="text-sm font-medium text-[#e7efff] [text-shadow:0_1px_8px_rgba(0,0,0,0.45)] hover:text-white"
                  />
                </div>
                <NavbarButton
                  href="#waitlist"
                  variant="primary"
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#10254a] hover:bg-[#eef3ff]"
                >
                  Join Waitlist
                </NavbarButton>
              </div>
            </LiquidGlass>
          </div>
        </div>

        <MobileNav className="rounded-2xl border border-white/25 bg-[#08142d]/75 px-4 py-3 text-white shadow-[0_8px_30px_rgba(2,8,22,0.35)] backdrop-blur-2xl">
          <MobileNavHeader>
            <a href="#" className="relative z-20 flex items-center gap-2 text-base font-semibold text-white">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2567ff]">
                <IconSparkles className="h-4 w-4" />
              </span>
              Ajently
            </a>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-[#0b1833] text-white"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base text-[#d6e4ff]"
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              href="#waitlist"
              variant="primary"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full rounded-full bg-white text-sm font-semibold text-[#10254a]"
            >
              Join Waitlist
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}
