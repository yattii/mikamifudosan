import Link from "next/link";

const services = [
  {
    title: "売却サポート / 仲介業務",
    description:
      "市場分析と適正価格査定をベースに、売却戦略の立案から契約・引き渡しまでをワンストップで支援します。",
    points: ["現地調査と査定レポートのご提供", "販売戦略の立案・広告出稿", "契約・決済・引き渡しのフォロー"],
  },
  {
    title: "不動産買取 / 早期換金",
    description:
      "お急ぎで現金化したい場合は三上不動産による直接買取にも対応。空家・収益物件・法人資産の売却もご相談ください。",
    points: ["最短24時間の簡易査定", "現況のままの買取にも対応", "リフォーム前提の買取再販プラン"],
  },
  {
    title: "賃貸・管理 / 運用コンサルティング",
    description:
      "賃貸経営の収益改善や空室対策、管理体制の見直しをご提案。保険やリフォームと組み合わせたトータルサポートが可能です。",
    points: ["賃料査定・市場分析", "リノベーション提案で収益最大化", "管理・サブリースのご相談"],
  },
];

export default function RealEstatePage() {
  return (
    <div className="bg-[#f8fbff]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 lg:px-10">
      <header className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Real Estate
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          不動産事業のご案内
        </h1>
        <p className="max-w-4xl text-base leading-relaxed text-slate-600">
          京都・大阪エリアを中心に、売却・買取・賃貸運用までトータルにサポートしています。物件掲載は行っていないため、すべてのお問い合わせはフォームまたはお電話にて承っております。
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {service.points.map((point) => (
                <li key={point}>・ {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">ご相談の流れ</h2>
          <p className="text-sm text-slate-600">
            物件の状況や目的に合わせて、最適な進め方をご提案いたします。査定やプランニングまではすべて無料で対応しています。
          </p>
        </div>
        <ol className="space-y-3 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-slate-900">1. お問い合わせ・ヒアリング</span>
            <br />
            現状の課題や希望条件をお聞かせください。オンライン面談も可能です。
          </li>
          <li>
            <span className="font-semibold text-slate-900">2. 現地調査・プラン提示</span>
            <br />
            物件の状況や市場環境を分析し、売却・買取・賃貸運用など複数プランをご提示します。
          </li>
          <li>
            <span className="font-semibold text-slate-900">3. ご契約・実行</span>
            <br />
            契約手続き、リフォームや解体が必要な場合のコーディネート、引き渡しまでを伴走します。
          </li>
        </ol>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">よくあるご相談</h2>
        <ul className="space-y-3 text-sm text-slate-600">
          <li>・ 空家を相続したが、売却か賃貸か迷っている。</li>
          <li>・ リフォームをしてから売った場合と、現況で売る場合の差を知りたい。</li>
          <li>・ 店舗・事務所の移転に伴い、原状回復や居抜きでの売却を検討している。</li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl bg-gradient-to-br from-emerald-500 via-sky-500 to-sky-400 px-8 py-12 text-center text-white shadow-lg shadow-emerald-200">
        <h2 className="text-2xl font-semibold">不動産に関するご相談はすべてフォームで承ります</h2>
        <p className="text-sm text-white/90">
          図面や写真があれば添付いただけます。24時間以内に担当者よりご連絡いたします。
        </p>
        <Link
          href="/contact?type=property"
          className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-white"
        >
          無料で相談する
        </Link>
      </section>
    </main>
  </div>
  );
}
