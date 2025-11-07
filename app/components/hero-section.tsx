import Image from "next/image";
import Link from "next/link";
import type { MicroCMSImage } from "@/lib/microcms";
import { localGalleryImages } from "@/lib/local-gallery";

export type HeroStat = {
  label: string;
  value: string;
};

type HeroSectionProps = {
  heroStats: HeroStat[];
  featureImages?: MicroCMSImage[];
};

export default function HeroSection({ heroStats, featureImages }: HeroSectionProps) {
  const images =
    featureImages?.filter((image) => !!image?.url).slice(0, 3) ??
    localGalleryImages.slice(0, 3).map((image) => ({ url: image.url }));

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-100 via-white to-emerald-50 text-slate-900">
      <div className="absolute inset-0">
        <Image
          src="/gallery/hero.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_55%)]" />
      <div className="absolute inset-y-0 left-1/2 hidden w-1/2 -translate-x-[15%] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18),transparent_60%)] blur-3xl lg:block" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 lg:flex-row lg:items-center lg:gap-24 lg:px-10">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600">
            京都・大阪エリアを中心に対応
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-snug tracking-tight text-slate-900 sm:text-5xl">
            リフォームで、
            <span className="block text-emerald-600">暮らしと事業の未来を描き直す</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700">
            株式会社 三上不動産は、京都府八幡市を拠点に大阪・京都の戸建・マンション・店舗リフォームを専門に対応。
            設計・施工・インテリア・保険まで一貫したチーム体制と、買取査定まで見据えたご提案で理想の空間づくりを支援します。
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact?type=reform"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:translate-y-px hover:bg-emerald-600"
            >
              リフォーム相談をする
        </Link>
        <Link
          href="/reform"
          className="inline-flex items-center justify-center rounded-full bg-emerald-50 px-7 py-3 text-sm font-semibold text-emerald-700 shadow-inner transition hover:bg-emerald-100"
        >
          施工実績を見る
        </Link>
        <Link
          href="/sell"
          className="inline-flex items-center justify-center rounded-full bg-sky-50 px-7 py-3 text-sm font-semibold text-sky-700 shadow-inner transition hover:bg-sky-100"
        >
          買取査定を申し込む
        </Link>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-6 text-sm text-slate-600 sm:grid-cols-3 sm:text-left text-center">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-semibold text-slate-900">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-emerald-600">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl shadow-emerald-100 backdrop-blur">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(14,116,144,0.12),transparent_70%)]" />
          <div className="relative grid gap-5">
            <div className="grid grid-cols-2 gap-4">
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div
                    key={image.url}
                    className={`relative h-28 overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 h-40" : ""}`}
                  >
                    <Image
                      src={image.url}
                      alt={`リフォーム事例 ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))
              ) : (
                <>
                  <div className="rounded-2xl bg-linear-to-br from-sky-200 via-sky-100 to-white p-6 text-sm font-medium text-sky-900 shadow-inner">
                    最新の施工写真を随時アップデートしています。
                  </div>
                  <div className="rounded-2xl bg-linear-to-br from-emerald-200 via-emerald-100 to-white p-6 text-sm font-medium text-emerald-900 shadow-inner">
                    before / after をわかりやすく公開中。
                  </div>
                </>
              )}
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white/90 p-6 text-slate-700 shadow-lg shadow-emerald-50">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500">
                Recent Works
              </p>
              <h2 className="mt-2 text-lg font-semibold text-slate-900">
                暮らしと事業を整えるリノベーション
              </h2>
              <p className="mt-3 text-sm leading-relaxed">
                オフィス・住居・店舗まで一貫対応。最新の工事事例や、before / after の詳細をわかりやすくご紹介します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
