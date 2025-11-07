import Image from "next/image";
import Link from "next/link";
import type { LocalGalleryImage } from "@/lib/local-gallery";

type GallerySectionProps = {
  images: LocalGalleryImage[];
};

export default function GallerySection({ images }: GallerySectionProps) {
  if (images.length === 0) {
    return null;
  }

  const featured = images.slice(0, 2);
  const rest = images.slice(2);

  return (
    <section
      id="gallery"
      className="overflow-hidden rounded-3xl bg-linear-to-br from-emerald-50 via-white to-sky-50 px-6 py-12 shadow-lg shadow-emerald-50 sm:px-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            Gallery
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            施工ギャラリーと現場のストーリー
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            リフォームのビフォーアフターや、現地での打ち合わせ風景をピックアップしました。写真では伝えきれないこだわりポイントや課題解決のプロセスを、現場担当者が文章で補足しています。
          </p>
        </div>
        <Link
          href="/contact?type=reform"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:translate-y-px hover:bg-emerald-600"
        >
          施工の相談をしてみる
        </Link>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr,1fr]">
        <div className="grid gap-6">
          {featured.map((image, index) => (
            <article
              key={image.url}
              className={`group relative overflow-hidden rounded-3xl border border-white/50 bg-white/90 shadow-xl shadow-emerald-50 transition ${index === 0 ? "aspect-4/3" : "aspect-square"}`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority={index === 0}
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 space-y-3 text-white drop-shadow">
                <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
                  {image.category}
                </span>
                <h3 className="text-lg font-semibold">{image.alt}</h3>
                <p className="text-sm text-white/90">{image.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {rest.map((image) => (
            <article
              key={image.url}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/90 shadow-lg shadow-emerald-50 transition hover:-translate-y-1 hover:shadow-emerald-100"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-600 shadow">
                  {image.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  {image.alt}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {image.description}
                </p>
                <Link
                  href="/reform"
                  className="mt-auto inline-flex w-fit items-center justify-center rounded-full border border-emerald-200 px-4 py-2 text-xs font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  類似事例を見る
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
