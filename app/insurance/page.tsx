const coverages = [
  {
    title: "火災・地震補償",
    description:
      "戸建・マンション・投資用物件まで対応。地震保険の付帯や家財補償の組み合わせをご提案します。",
  },
  {
    title: "工事中リスク保険",
    description:
      "リフォーム・解体・新築工事時の第三者賠償・労災・設備損害をカバー。施工中のリスクを最小化します。",
  },
  {
    title: "賃貸経営サポート",
    description:
      "入居者様向けの火災・家財保険、オーナー向けの家賃保証・設備保守保険をセットで提案します。",
  },
];

const flow = [
  "ヒアリング（保険の目的・対象物件・現在の補償内容）",
  "保険会社・商品選定、補償範囲と保険料シミュレーション",
  "補償プランのご提案（パンフレット・比較表のご提示）",
  "お申し込み手続きと証券発行、アフターフォロー",
];

export default function InsurancePage() {
  return (
    <div className="bg-[#f8fbff]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 lg:px-10">
      <header className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Insurance
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          取扱保険のご案内
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          リフォーム・不動産取引と連動し、火災保険・地震保険・工事保険・賃貸オーナー向け保険など幅広く提案。最適な補償内容を一緒に設計します。
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {coverages.map((item) => (
          <article
            key={item.title}
            className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">ご提案の流れ</h2>
        <ol className="mt-5 space-y-4 text-sm text-slate-600">
          {flow.map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-emerald-500 text-center text-xs font-semibold leading-6 text-white">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  </div>
  );
}
