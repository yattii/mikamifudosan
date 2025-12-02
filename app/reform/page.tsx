import Link from "next/link";
import {
  extractPlainText,
  formatCurrencyJPY,
  getReforms,
  isMicroCMSEnabled,
} from "@/lib/microcms";

const categories = [
  { label: "すべて", value: undefined },
  { label: "キッチン", value: "キッチン" },
  { label: "水回り", value: "水回り" },
  { label: "内装", value: "内装" },
  { label: "外構", value: "外構" },
  { label: "全面", value: "全面" },
];

type SearchParamsInput =
  | Promise<{ category?: string }>
  | { category?: string }
  | undefined;

type ReformPageProps = {
  searchParams?: SearchParamsInput;
};

export default async function ReformPage({ searchParams }: ReformPageProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {});
  const selectedCategory = resolvedSearchParams?.category;

  if (!isMicroCMSEnabled) {
    return (
      <div className="bg-[#f8fbff]">
        <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-20 lg:px-10">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Reform
          </p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            施工実績一覧
          </h1>
        </header>
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-sm leading-relaxed text-slate-600">
          microCMS の環境変数が設定されていないため、施工実績を取得できません。
          <code className="mx-1 rounded bg-slate-100 px-2 py-1 text-xs">
            MICROCMS_SERVICE_DOMAIN
          </code>
          と
          <code className="mx-1 rounded bg-slate-100 px-2 py-1 text-xs">
            MICROCMS_API_KEY
          </code>
          を
          <code className="mx-1 rounded bg-slate-100 px-2 py-1 text-xs">
            .env.local
          </code>
          に設定し、再起動してください。
        </div>
        </main>
      </div>
    );
  }

  // category は複数選択の可能性があるため contains でフィルタ
  const filters = selectedCategory
    ? `category[contains]${selectedCategory}`
    : undefined;

  const reformsResponse = await getReforms({
    limit: 30,
    orders: "-publishedAt",
    filters,
  });

  const reforms = reformsResponse.contents;
  const totalCount = reformsResponse.totalCount;

  return (
    <div className="bg-[#f8fbff]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 lg:px-10">
      <header className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Reform
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          施工実績一覧
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          カテゴリを選択すると該当する施工事例を表示します。費用・工期・詳しい内容は各詳細ページをご覧ください。
        </p>
      </header>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">カテゴリで絞り込み</h2>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
          {categories.map((category) => {
            const isActive = category.value === selectedCategory;
            const href = category.value
              ? `/reform?category=${encodeURIComponent(category.value)}`
              : "/reform";
            return (
              <Link
                key={category.label}
                href={href}
                className={`rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-emerald-500 bg-emerald-500 text-white shadow shadow-emerald-200"
                    : "border-emerald-100 bg-white hover:border-emerald-200"
                }`}
              >
                {category.label}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {reforms.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-sm text-slate-600 md:col-span-2">
            該当する施工実績がまだ表示できません。microCMS の
            <code className="mx-1 rounded bg-slate-100 px-2 py-1 text-xs">
              reforms
            </code>
            コレクションに公開済みコンテンツがあるか、キャッシュが残っていないかをご確認ください。
            <span className="ml-2 text-xs text-slate-500">
              （microCMS totalCount: {totalCount}）
            </span>
          </div>
        ) : (
          reforms.map((reform) => {
            const excerpt = extractPlainText(reform.body, 110);
            const costLabel = formatCurrencyJPY(reform.cost);
            const categoryLabel = Array.isArray(reform.category)
              ? reform.category.join(" / ")
              : reform.category;
            return (
              <article
                key={reform.id}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {categoryLabel}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">
                  {reform.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600">{excerpt}</p>
                <div className="mt-4 text-sm text-slate-600">
                  {costLabel ? <div>費用目安：{costLabel}</div> : null}
                  {reform.period ? <div>工期：{reform.period}</div> : null}
                </div>
                <div className="mt-auto flex flex-col gap-3 pt-6">
                  <Link
                    href={`/reform/${encodeURIComponent(reform.id)}`}
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
              </article>
            );
          })
        )}
      </section>
    </main>
  </div>
  );
}
