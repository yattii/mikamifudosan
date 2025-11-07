import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-emerald-100 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_70%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-slate-600 lg:flex-row lg:items-center lg:px-10">
        <div className="space-y-2">
          <p className="text-base font-semibold text-emerald-600">
            株式会社 三上不動産
          </p>
          <p className="mt-1">〒614-8087 京都府八幡市八幡柿ケ谷53-12</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          <Link href="/reform" className="transition hover:text-emerald-600">
            施工実績
          </Link>
          <Link href="/real-estate" className="transition hover:text-emerald-600">
            不動産事業
          </Link>
          <Link href="/interior-design" className="transition hover:text-emerald-600">
            インテリア・家具
          </Link>
          <Link href="/insurance" className="transition hover:text-emerald-600">
            保険
          </Link>
          <Link href="/sell" className="transition hover:text-emerald-600">
            買取査定
          </Link>
          <Link href="/faq" className="transition hover:text-emerald-600">
            FAQ
          </Link>
          <Link href="/company" className="transition hover:text-emerald-600">
            会社概要
          </Link>
          <Link href="/contact" className="transition hover:text-emerald-600">
            お問い合わせ
          </Link>
        </nav>
        <p className="text-xs text-slate-500">
          © {year} Mikami Real Estate Co., Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
