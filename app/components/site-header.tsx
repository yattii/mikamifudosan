"use client";

import Link from "next/link";
import { useState } from "react";

export type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navItems: NavItem[];
};

export default function SiteHeader({ navItems }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="flex items-center justify-between gap-4 rounded-full border border-emerald-100 bg-white/90 px-5 py-3 text-sm text-slate-700 shadow-lg shadow-emerald-50 backdrop-blur lg:px-6">
        <Link
          href="/"
          className="shrink-0 text-[clamp(0.75rem,1vw,0.95rem)] font-semibold uppercase tracking-[0.2em] text-emerald-600"
          onClick={handleCloseMenu}
        >
          Mikami Fudosan
        </Link>
        <nav className="hidden flex-1 basis-0 items-center justify-center gap-3 lg:flex xl:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-1 text-[clamp(0.65rem,0.9vw,0.85rem)] font-medium leading-tight text-slate-600 transition hover:text-emerald-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Link
            href="/contact?type=reform"
            className="rounded-full border border-emerald-200 px-3 py-1.5 text-[clamp(0.68rem,0.75vw,0.8rem)] font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
          >
            リフォーム相談
          </Link>
          <Link
            href="/sell"
            className="rounded-full bg-emerald-500 px-3 py-1.5 text-[clamp(0.68rem,0.75vw,0.8rem)] font-semibold text-white shadow shadow-emerald-200 transition hover:bg-emerald-600"
          >
            買取査定
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="メニューを開閉"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-600 transition hover:bg-emerald-50 focus:outline-none lg:hidden"
          style={{ cursor: "pointer" }}
        >
          <span className="sr-only">メニューを開閉</span>
          <span className="flex flex-col items-center justify-center gap-1.5">
            <span
              aria-hidden
              className={`block h-0.5 w-6 rounded-full bg-emerald-600 transition-transform ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              aria-hidden
              className={`block h-0.5 w-6 rounded-full bg-emerald-600 transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden
              className={`block h-0.5 w-6 rounded-full bg-emerald-600 transition-transform ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {isMenuOpen ? (
        <div className="mt-4 flex flex-col gap-5 rounded-3xl border border-emerald-100 bg-white p-6 text-sm text-slate-700 shadow-lg shadow-emerald-50 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 font-medium transition hover:bg-emerald-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact?type=reform"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              リフォーム相談
            </Link>
            <Link
              href="/sell"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow shadow-emerald-200 transition hover:bg-emerald-600"
            >
              買取査定
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
