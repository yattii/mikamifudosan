const companyData = [
  { term: "会社名", detail: "株式会社 三上不動産" },
  { term: "所在地", detail: "〒614-8087 京都府八幡市八幡柿ケ谷53-12" },
  { term: "設立年月日", detail: "2020年4月24日" },
  { term: "代表取締役", detail: "三上 孝太郎" },
  {
    term: "事業内容",
    detail: `一、不動産の分譲、売買、賃貸及び管理ならびにこれらの仲介及びコンサルティング
一、インテリアデザインの企画及び設計ならびに内装に関するデザイン
一、家具及びインテリア用品の企画、製造、販売及び輸出入
一、傷害保険代理店及び生命保険の募集に関する業務`,
  },
  {
    term: "登録・免許",
    detail: `宅地建物取引業 京都府知事(1)第123456号
建設業 京都府知事許可(般-4)第987654号`,
  },
  {
    term: "加盟団体",
    detail:
      "(公社)全国宅地建物取引業協会連合会 / (一社)リフォーム推進協議会",
  },
];

export default function CompanyPage() {
  return (
    <div className="bg-[#f8fbff]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 lg:px-10">
      <header className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Company
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          株式会社 三上不動産 会社概要
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          京都府八幡市を拠点に、不動産の売買・賃貸・管理からリフォーム、インテリア、保険までワンストップで提供しています。地域に根ざした提案で、暮らしと事業の価値向上をサポートします。
        </p>
      </header>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <dl className="grid gap-6 text-sm text-slate-600 md:grid-cols-2">
          {companyData.map((item) => (
            <div key={item.term}>
              <dt className="font-semibold text-slate-900">{item.term}</dt>
              <dd className="mt-2 whitespace-pre-line">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">代表挨拶</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            私たちは「暮らしの価値を最大化する」ことをミッションとし、リフォーム・不動産取引・インテリアを一体化したソリューションを提供しています。
            地域に密着しながらも最新のテクノロジーを活用し、お客様の理想の住まいや事業戦略の実現を支援いたします。
          </p>
        </div>
        <div className="space-y-4">
          
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-inner">
            <iframe
              title="株式会社 三上不動産 アクセスマップ"
              src="https://maps.google.com/maps?q=〒614-8087%20京都府八幡市八幡柿ケ谷53-12&z=16&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
  );
}
