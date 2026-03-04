"use client";

import { useState } from "react";
import LiquidGlass from "liquid-glass-react";
import { IconMenu2, IconSparkles, IconX } from "@tabler/icons-react";

const navItems = [
  { name: "Home", link: "#" },
  { name: "Features", link: "#features" },
  { name: "How it Works", link: "#how-it-works" },
  { name: "Creators", link: "#creators" },
];

export default function AjentlyLiquidNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-2 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative hidden h-[62px] w-full lg:block">
          <LiquidGlass
            mode="prominent"
            displacementScale={58}
            blurAmount={0.1}
            saturation={155}
            aberrationIntensity={1.8}
            elasticity={0}
            cornerRadius={999}
            padding="0"
            style={{ position: "absolute", top: "50%", left: "50%" }}
          >
            <div className="flex w-[min(96vw,72rem)] items-center justify-between rounded-full px-6 py-3">
              <a href="#" className="flex items-center gap-2 text-base font-semibold text-[#f6f9ff] [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2567ff]">
                  <IconSparkles className="h-4 w-4" />
                </span>
                Ajently
              </a>

              <nav className="flex items-center gap-9 text-sm font-medium text-[#eef4ff] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                {navItems.map((item) => (
                  <a key={item.name} href={item.link} className="transition hover:text-white">
                    {item.name}
                  </a>
                ))}
              </nav>

              <a
                href="#waitlist"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#10254a] transition hover:bg-[#eef3ff]"
              >
                Join Waitlist
              </a>
            </div>
          </LiquidGlass>
        </div>

        <div className="lg:hidden">
          <div className="relative h-[58px] w-full">
            <LiquidGlass
              mode="prominent"
              displacementScale={52}
              blurAmount={0.08}
              saturation={150}
              aberrationIntensity={1.5}
              elasticity={0}
              cornerRadius={999}
              padding="0"
              style={{ position: "absolute", top: "50%", left: "50%" }}
            >
              <div className="flex w-[calc(100vw-2rem)] items-center justify-between rounded-full px-4 py-3 sm:w-[min(95vw,40rem)]">
                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-[#f6f9ff]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2567ff]">
                    <IconSparkles className="h-4 w-4" />
                  </span>
                  Ajently
                </a>
                <button
                  type="button"
                  onClick={() => setMobileOpen((v) => !v)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white"
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
                </button>
              </div>
            </LiquidGlass>
          </div>

          {mobileOpen && (
            <div className="relative mt-2 h-[260px] w-full">
              <LiquidGlass
                mode="prominent"
                displacementScale={48}
                blurAmount={0.08}
                saturation={150}
                aberrationIntensity={1.5}
                elasticity={0}
                cornerRadius={24}
                padding="0"
                style={{ position: "absolute", top: "50%", left: "50%" }}
              >
                <div className="flex w-[calc(100vw-2rem)] flex-col gap-3 rounded-2xl px-4 py-4 text-[#eef4ff] sm:w-[min(95vw,40rem)]">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-white/10"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#waitlist"
                    onClick={() => setMobileOpen(false)}
                    className="mt-1 rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-[#10254a]"
                  >
                    Join Waitlist
                  </a>
                </div>
              </LiquidGlass>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
