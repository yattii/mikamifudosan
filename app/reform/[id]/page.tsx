import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatCurrencyJPY,
  getReform,
  isMicroCMSEnabled,
  type MicroCMSImage,
} from "@/lib/microcms";

export const dynamic = "force-dynamic";

type ParamsInput =
  | Promise<{ id: string }>
  | { id: string }
  | undefined;

type ReformDetailPageProps = {
  params?: ParamsInput;
};

function renderImage(image: MicroCMSImage, alt: string) {
  return (
    <div key={image.url} className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-slate-100">
      <Image
        src={image.url}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}

export default async function ReformDetailPage({
  params,
}: ReformDetailPageProps) {
  if (!isMicroCMSEnabled) {
    notFound();
  }

  const resolvedParams = await Promise.resolve(params ?? { id: "" });
  const identifier = resolvedParams?.id;

  console.log("Reform detail params.id", identifier);
  const reform = await getReform(identifier).catch((error) => {
    console.error("microCMS reform fetch error", error);
    throw error;
  });

  if (!reform) {
    notFound();
  }

  // microCMS のカテゴリが配列で返ってくるケースに対応
  const categoryLabel = Array.isArray(reform.category)
    ? reform.category.join(" / ")
    : reform.category;

  const costLabel = formatCurrencyJPY(reform.cost);

  return (
    <div className="bg-[#f8fbff]">
      <main className="mx-auto flex max-w-4xl flex-col gap-12 px-6 py-20 lg:px-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Reform Detail
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          {reform.title}
        </h1>
        <div className="text-sm text-slate-600">
          <span className="mr-4 inline-block rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            {categoryLabel}
          </span>
          {costLabel ? <span className="mr-4">費用目安：{costLabel}</span> : null}
          {reform.period ? <span>工期：{reform.period}</span> : null}
        </div>
      </header>

      {reform.thumbnail ? (
        <div className="relative aspect-8/5 w-full overflow-hidden rounded-3xl bg-slate-100">
          <Image
            src={reform.thumbnail.url}
            alt={`${reform.title} サムネイル`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 75vw, 100vw"
          />
        </div>
      ) : null}

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">施工内容</h2>
        {reform.body ? (
          <div
            className="prose prose-sm max-w-none text-slate-700 prose-headings:text-slate-900"
            dangerouslySetInnerHTML={{ __html: reform.body }}
          />
        ) : (
          <p className="text-sm text-slate-600">
            詳細な本文は未登録です。microCMS の「body」フィールドに内容を追加するとここに表示されます。
          </p>
        )}
      </section>

      {reform.beforeImages && reform.beforeImages.length > 0 ? (
        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Before</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {reform.beforeImages.map((image, index) =>
              renderImage(image, `${reform.title} Before ${index + 1}`)
            )}
          </div>
        </section>
      ) : null}

      {reform.afterImages && reform.afterImages.length > 0 ? (
        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">After</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {reform.afterImages.map((image, index) =>
              renderImage(image, `${reform.title} After ${index + 1}`)
            )}
          </div>
        </section>
      ) : null}

      <section className="space-y-4 rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-sm text-slate-600">
        <p>
          施工内容について詳しく知りたい場合は、図面やお写真をご用意いただけるとスムーズです。現地調査・お見積りまでは無料で対応いたします。
        </p>
        <Link
          href="/contact?type=reform"
          className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          この内容で相談する
        </Link>
      </section>
    </main>
  </div>
  );
}
