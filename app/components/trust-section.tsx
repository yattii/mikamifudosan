import Link from "next/link";

export type FaqPreview = {
  question: string;
  answer: string;
  category: string;
};

type FaqPreviewSectionProps = {
  faqs: FaqPreview[];
};

export default function FaqPreviewSection({ faqs }: FaqPreviewSectionProps) {
  return (
    <section id="faq-preview" className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            よくあるご質問（抜粋）
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            リフォームの進め方や費用感、買取査定との違いなど、お客様から寄せられるご質問の一部をご紹介します。
          </p>
        </div>
        <Link
          href="/faq"
          className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
        >
          FAQをすべて見る
        </Link>
      </div>
      <div className="grid gap-5 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-lg shadow-emerald-50 md:grid-cols-2">
        {faqs.map((faq) => (
          <article key={faq.question} className="space-y-3">
            <p className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
              {faq.category}
            </p>
            <h3 className="text-base font-semibold text-slate-900">
              {faq.question}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
