import type { Metadata } from "next";
import { Noto_Serif_JP, Roboto_Mono } from "next/font/google";
import SiteFooter from "./components/site-footer";
import SiteHeader, { type NavItem } from "./components/site-header";
import "./globals.css";
import {
  siteIconContentType,
  siteIconDimensions,
  siteIconPublicPath,
} from "@/lib/site-icon";

const siteIconAlt = "株式会社 三上不動産のロゴマーク";

const primaryFont = Noto_Serif_JP({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monoFont = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mikamifudosan.com"),
  title: {
    default: "株式会社 三上不動産 | 京都・大阪の不動産とリフォーム",
    template: "%s | 株式会社 三上不動産",
  },
  description:
    "京都府八幡市を拠点に、土地仲介・買取、インテリアコーディネート、保険代理、リフォームまでワンストップで提供する三上不動産の公式サイトです。",
  keywords: [
    "三上不動産",
    "京都八幡市",
    "土地仲介",
    "土地買取",
    "インテリアコーディネート",
    "保険代理店",
    "リフォーム",
  ],
  applicationName: "Mikami Fudosan",
  authors: [{ name: "株式会社 三上不動産" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://mikamifudosan.com/",
    siteName: "株式会社 三上不動産",
    title: "株式会社 三上不動産 | 京都・大阪の不動産とリフォーム",
    description:
      "京都・大阪エリアで土地仲介・買取、インテリア、保険、リフォームをトータルサポートする三上不動産。地域密着のノウハウで資産価値を最大化します。",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteIconAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社 三上不動産 | 京都・大阪の不動産とリフォーム",
    description:
      "土地仲介・買取からインテリアコーディネート、保険までワンストップでお手伝いします。",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://mikamifudosan.com/",
  },
  icons: {
    icon: [
      {
        url: siteIconPublicPath,
        sizes: `${siteIconDimensions.width}x${siteIconDimensions.height}`,
        type: siteIconContentType,
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: siteIconContentType,
      },
    ],
    apple: [
      {
        url: siteIconPublicPath,
        sizes: `${siteIconDimensions.width}x${siteIconDimensions.height}`,
        type: siteIconContentType,
      },
    ],
    shortcut: [siteIconPublicPath],
  },
};

const navItems: NavItem[] = [
  { label: "施工実績", href: "/reform" },
  { label: "不動産事業", href: "/real-estate" },
  { label: "インテリア・家具", href: "/interior-design" },
  { label: "保険", href: "/insurance" },
  { label: "買取査定", href: "/sell" },
  { label: "FAQ", href: "/faq" },
  { label: "会社概要", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${primaryFont.variable} ${monoFont.variable} min-h-screen bg-[#f8fbff] text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 overflow-hidden border-b border-white/60 bg-white/90 text-slate-800 shadow-lg shadow-emerald-50 backdrop-blur">
            <div className="relative mx-auto w-full max-w-6xl px-6 py-4 lg:px-10">
              <SiteHeader navItems={navItems} />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
