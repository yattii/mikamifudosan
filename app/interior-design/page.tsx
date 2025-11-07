import Link from "next/link";

const interiorServices = [
  {
    title: "インテリアコーディネート",
    description:
      "住まい・オフィス・店舗など用途に応じた家具・照明・ファブリック選定を行い、3Dパースやサンプルボードで具体的なイメージを共有します。",
  },
  {
    title: "オーダー家具・造作",
    description:
      "キッチンカウンター、造作収納、ワークスペース、建具など、素材や寸法をオーダーメイドで製作。施工と一体で進められます。",
  },
  {
    title: "モデルルーム・ホームステージング",
    description:
      "分譲・賃貸・民泊物件の販売促進を目的に、コンセプト立案から撮影・販促物制作までワンストップで対応します。",
  },
];

const flow = [
  "ヒアリング・現地調査（既存家具・間取り・ライフスタイル確認）",
  "コンセプトメイク、レイアウト案、概算費用のご提示",
  "家具・内装材・照明の選定 / 必要に応じたオーダー製作",
  "納品・施工・スタイリング、完了後のアフターサポート",
];

const furniturePlans = [
  {
    title: "プロジェクト別家具コーディネート",
    description:
      "リフォームやインテリアデザインと連動し、空間に合わせた家具・照明・ラグ・アートをまとめてプランニングします。",
  },
  {
    title: "造作家具・オーダー制作",
    description:
      "収納、TVボード、ワークデスク、パントリーなど、採寸から製作・設置までワンストップで対応します。",
  },
  {
    title: "家具リース / モデルルーム演出",
    description:
      "短期間の展示や撮影向けに、家具・雑貨のリースやスタイリングを提供。ホームステージングにも対応しています。",
  },
];

const furnitureSupport = [
  "国内外ブランド家具・照明の仕入れ",
  "グリーン・アート・カーテンのコーディネート",
  "搬入経路の確認、配送・組立・設置の手配",
  "メンテナンス・入替のご相談",
];

export default function InteriorDesignPage() {
  return (
    <div className="bg-[#f8fbff]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 lg:px-10">
      <header className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Interior Design
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          インテリアデザイン
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          リフォームと連携したトータルコーディネートから、家具・照明の個別提案まで幅広く対応。空間価値を高めるためのデザインと施工を三上不動産が一貫してプロデュースします。
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">インテリアサービス</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {interiorServices.map((service) => (
            <article
              key={service.title}
              className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">家具・インテリア用品</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {furniturePlans.map((plan) => (
            <article
              key={plan.title}
              className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {plan.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{plan.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">家具・備品サポート</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          {furnitureSupport.map((item) => (
            <li key={item}>・ {item}</li>
          ))}
        </ul>
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

      <section className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-8 text-sm text-slate-600">
        写真付きの事例紹介は準備中です。ご希望の雰囲気や参考イメージがあれば、お問い合わせ時に共有いただけると具体的なご提案につながります。ショールーム同行やカタログの共有も対応していますので、お気軽にご相談ください。
      </section>

      <section className="space-y-4 rounded-3xl bg-gradient-to-br from-emerald-500 via-sky-500 to-sky-400 px-8 py-12 text-center text-white shadow-lg shadow-emerald-200">
        <h2 className="text-2xl font-semibold">インテリア・家具のご相談を受け付けています</h2>
        <p className="text-sm text-white/90">
          住まい・店舗・オフィスのイメージアップを検討中の方は、まずは無料相談をご利用ください。ご予算や導入予定時期を共有いただくとスムーズです。
        </p>
        <Link
          href="/contact?type=other"
          className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-white"
        >
          無料で相談する
        </Link>
      </section>
    </main>
  </div>
  );
}
