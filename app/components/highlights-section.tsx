import Image from "next/image";
import Link from "next/link";
import type { MicroCMSImage } from "@/lib/microcms";

export type ReformHighlight = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  costLabel?: string;
  period?: string;
  thumbnail?: MicroCMSImage;
};

type HighlightsSectionProps = {
  highlights: ReformHighlight[];
  totalCount?: number;
};

export default function HighlightsSection({
  highlights,
  totalCount,
}: HighlightsSectionProps) {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden rounded-3xl bg-linear-to-br from-white via-sky-50 to-emerald-50 px-6 py-12 shadow-lg shadow-emerald-50 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Highlights
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              最新の施工実績ピックアップ
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
              最新の施工実績から3件をピックアップしています。費用や工期の目安、詳細事例は施工実績ページからご覧ください。
            </p>
          </div>
          <Link
            href="/reform"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            施工実績をもっと見る
          </Link>
        </div>
      </div>
      {highlights.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-sky-200 bg-white/80 p-8 text-sm text-slate-600">
          施工実績がまだ表示できません。microCMS 上で公開済みコンテンツがあるか、キャッシュが残っていないかをご確認ください。
          {typeof totalCount === "number" ? (
            <span className="ml-1 text-xs text-slate-500">
              （microCMS totalCount: {totalCount}）
            </span>
          ) : null}
        </div>
      ) : (
        <div className="relative z-10 mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/90 p-6 shadow-xl shadow-emerald-50 transition hover:-translate-y-1 hover:shadow-emerald-100"
            >
              {highlight.thumbnail ? (
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={highlight.thumbnail.url}
                    alt={`${highlight.title} のサムネイル`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-600 shadow">
                    {highlight.category}
                  </span>
                </div>
              ) : null}
              <div className="mt-5 flex flex-1 flex-col gap-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {highlight.title}
                </h3>
                <p className="rounded-2xl bg-sky-50/80 px-4 py-3 text-sm text-slate-600 shadow-inner">
                  {highlight.excerpt}
                </p>
                {(highlight.costLabel || highlight.period) && (
                  <p className="text-sm font-medium text-emerald-600">
                    {[highlight.costLabel, highlight.period]
                      .filter(Boolean)
                      .join(" / ")}
                  </p>
                )}
                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href={`/reform/${encodeURIComponent(highlight.id)}`}
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-5 py-2 text-xs font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                  >
                    詳細を見る
                  </Link>
                  <Link
                    href="/contact?type=reform"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600"
                  >
                    この内容で相談する
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
