import type { Metadata } from "next";
import Script from "next/script";
import HeroSection, { type HeroStat } from "./components/hero-section";
import HighlightsSection, {
  type ReformHighlight,
} from "./components/highlights-section";
import ServicesSection from "./components/services-section";
import StrengthsSection, { type Strength } from "./components/strengths-section";
import FaqPreviewSection, { type FaqPreview } from "./components/trust-section";
import ContactSection from "./components/contact-section";
import {
  extractPlainText,
  formatCurrencyJPY,
  getReforms,
  isMicroCMSEnabled,
  type MicroCMSImage,
} from "@/lib/microcms";
import { localGalleryImages } from "@/lib/local-gallery";

export const metadata: Metadata = {
  title: "京都・大阪・八幡の不動産とリフォーム | 株式会社 三上不動産",
  description:
    "三上不動産は京都府八幡市を拠点に、大阪・京都・八幡エリアで不動産仲介・買取、リフォーム、インテリアまでワンストップで対応。大阪 不動産・京都 不動産・八幡 不動産、そして大阪 リフォーム・京都 リフォーム・八幡 リフォームのご相談を受け付けています。",
  keywords: [
    "三上不動産",
    "大阪 不動産",
    "京都 不動産",
    "八幡 不動産",
    "大阪 リフォーム",
    "京都 リフォーム",
    "八幡 リフォーム",
    "物件 大阪",
  ],
};

const heroStats: HeroStat[] = [
  { label: "年間施工実績", value: "120件" },
  { label: "プラン提示最短", value: "48時間" },
  { label: "対応エリア", value: "京都府・大阪府" },
];

const strengths: Strength[] = [
  {
    title: "地域密着の専任チーム",
    description:
      "京都・大阪エリアの建物特性や条例を熟知。現地下見からプラン提案まで迅速に対応します。",
  },
  {
    title: "設計・施工・アフターまで一貫管理",
    description:
      "自社ディレクターと職人ネットワークが連携。工事中の進捗共有とアフターメンテナンスを標準化しています。",
  },
  {
    title: "コストと品質の見える化",
    description:
      "詳細見積と3Dプランでイメージを共有。Before/Afterと費用実績を公開し、納得感のある意思決定を支援します。",
  },
];

const faqPreview: FaqPreview[] = [
  {
    question: "現地調査から見積提示まで、どれくらい時間がかかりますか？",
    answer:
      "一般的な戸建・マンションであれば、調査後48時間以内に概算プランとお見積りをご提示します。大規模改修の場合は1週間程度のお時間をいただきます。",
    category: "施工",
  },
  {
    question: "リフォームと買取査定を同時に相談できますか？",
    answer:
      "可能です。リフォーム後に住み続けるケースと売却するケースを比較し、費用対効果の高いプランをご提案します。",
    category: "査定",
  },
  {
    question: "補助金や減税のサポートはありますか？",
    answer:
      "はい。省エネ・耐震・バリアフリー改修など条件を満たす場合、申請サポートまで対応します。最新情報はサービスページでご案内予定です。",
    category: "共通",
  },
];

export default async function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "株式会社 三上不動産",
    url: "https://mikamifudosan.com/",
    image: "https://mikamifudosan.com/icon-512.png",
    description:
      "京都府八幡市を拠点に、大阪・京都エリアで不動産仲介・買取、リフォーム、インテリアを提供する三上不動産。大阪 不動産・京都 不動産・八幡 不動産、物件 大阪のご相談に対応します。",
    address: {
      "@type": "PostalAddress",
      addressRegion: "京都府",
      addressLocality: "八幡市",
      addressCountry: "JP",
    },
    areaServed: ["大阪府", "京都府", "八幡市"],
    makesOffer: [
      "不動産仲介",
      "不動産買取",
      "住宅リフォーム",
      "店舗リフォーム",
      "インテリアコーディネート",
    ],
  };

  const highlightResponse = isMicroCMSEnabled
    ? await getReforms({ limit: 3, orders: "-publishedAt" })
    : null;

  const galleryImages: MicroCMSImage[] = (
    highlightResponse?.contents.flatMap((content) => [
      content.thumbnail,
      ...(content.afterImages ?? []),
      ...(content.beforeImages ?? []),
    ]) ?? []
  ).filter((image): image is MicroCMSImage => !!image && typeof image.url === "string");

  const featureImages: MicroCMSImage[] =
    galleryImages.length > 0
      ? galleryImages
      : localGalleryImages.map((image) => ({ url: image.url }));

  if (highlightResponse) {
    console.log(
      "microCMS highlight response",
      JSON.stringify(highlightResponse, null, 2)
    );
  } else {
    console.log("microCMS highlight response is null (isMicroCMSEnabled = %s)", isMicroCMSEnabled);
  }

  const reformHighlights: ReformHighlight[] =
    highlightResponse?.contents.map((content) => ({
      id: content.id,
      title: content.title,
      category: Array.isArray(content.category)
        ? content.category.join(" / ")
        : content.category,
      excerpt: extractPlainText(content.body),
      costLabel: formatCurrencyJPY(content.cost),
      period: content.period,
      thumbnail: content.thumbnail,
    })) ?? [];

  return (
    <div className="bg-[#f8fbff]">
      <Script id="mikami-fudosan-ldjson" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(structuredData)}
      </Script>
      <HeroSection heroStats={heroStats} featureImages={featureImages} />
      <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6 py-20 lg:px-10">
        <HighlightsSection
          highlights={reformHighlights}
          totalCount={highlightResponse?.totalCount}
        />
        <ServicesSection featureImages={featureImages.slice(0, 4)} />
        <StrengthsSection strengths={strengths} />
        <FaqPreviewSection faqs={faqPreview} />
        <ContactSection />
      </main>
    </div>
  );
}

// git status                    
// git add .                       
// git commit -m "Fix something"  
// git push
