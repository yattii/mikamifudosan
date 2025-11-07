export default function CompanySection() {
  return (
    <section
      id="company"
      className="space-y-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Company
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          会社概要
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">
          京都府八幡市を拠点に、不動産の分譲・売買・賃貸、リフォーム、インテリアや保険まで総合的に提案する「株式会社 三上不動産」の会社情報です。
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <dl className="space-y-4 text-sm text-slate-600">
          <div>
            <dt className="font-semibold text-slate-900">会社名</dt>
            <dd className="mt-1">株式会社 三上不動産</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">所在地</dt>
            <dd className="mt-1">〒614-8087 京都府八幡市八幡柿ケ谷53-12</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">設立年月日</dt>
            <dd className="mt-1">2020年4月24日</dd>
          </div>
        </dl>
        <dl className="space-y-4 text-sm text-slate-600">
          <div>
            <dt className="font-semibold text-slate-900">事業内容</dt>
            <dd className="mt-2 space-y-2">
              <p>
                一、不動産の分譲、売買、賃貸及び管理ならびにこれらの仲介及びコンサルティング
              </p>
              <p>
                一、インテリアデザインの企画及び設計ならびに内装に関するデザイン
              </p>
              <p>
                一、家具及びインテリア用品の企画、製造、販売及び輸出入
              </p>
              <p>
                一、傷害保険代理店及び生命保険の募集に関する業務
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
