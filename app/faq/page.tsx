const faqCategories = [
  {
    title: "施工について",
    description: "工事期間や費用、住みながらのリフォームに関するご質問です。",
    items: [
      {
        question: "工事期間はどのくらいかかりますか？",
        answer:
          "規模によりますが、キッチン・水回りの部分リフォームで2〜4週間、全面リノベーションで2〜3か月が目安です。詳しいスケジュールは現地調査後にご案内します。",
      },
      {
        question: "工事中の騒音や埃が心配です。",
        answer:
          "養生や防塵対策を徹底し、近隣挨拶・掲示物の設置も弊社で実施します。工程ごとに掃除を行い、必要に応じて仮設洗面やトイレを手配します。",
      },
      {
        question: "住みながらの工事は可能ですか？",
        answer:
          "可能です。水回りを同時に改修する場合は短期の仮住まいをおすすめするケースもありますが、工程を分けるなど柔軟に対応します。",
      },
    ],
  },
  {
    title: "買取査定について",
    description: "リフォームと買取査定の連携に関するご質問です。",
    items: [
      {
        question: "買取と仲介のどちらが良いか迷っています。",
        answer:
          "買取はスピード重視・手間の少ない方法、仲介は市場価格に近い金額で売れる可能性が高い方法です。リフォームを組み合わせた高値売却プランも含め、複数シナリオで比較表をご提示します。",
      },
      {
        question: "築年数が古くても買い取ってもらえますか？",
        answer:
          "はい。雨漏りやシロアリなどの問題がある場合も現況のまま査定いたします。リノベーションをセットにした再販プランもご案内可能です。",
      },
      {
        question: "査定費用はかかりますか？",
        answer:
          "簡易査定・訪問査定ともに無料です。周辺相場やリフォーム提案を踏まえた価格プランを作成します。",
      },
    ],
  },
  {
    title: "共通のご質問",
    description: "支払い方法や保証、アフターサービスに関するご質問です。",
    items: [
      {
        question: "支払い方法はどのようになりますか？",
        answer:
          "工事内容に応じて契約時・着工時・中間・完了時に分割するケースが一般的です。リフォームローンのご紹介や補助金申請もサポートします。",
      },
      {
        question: "保証やアフターサービスはありますか？",
        answer:
          "工事内容に応じた保証書を発行し、半年・1年点検を標準で実施します。緊急対応が必要な場合も専用窓口で受け付けます。",
      },
      {
        question: "まず相談だけでも可能ですか？",
        answer:
          "もちろん可能です。オンラインでの無料相談も行っていますので、お気軽にお問い合わせください。",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-[#f8fbff]">
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-20 lg:px-10">
      <header className="space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          FAQ
        </p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          よくあるご質問
        </h1>
        <p className="text-base leading-relaxed text-slate-600">
          リフォーム・買取査定・サービス全般に関して多くいただくご質問をまとめました。記載のない内容についても、お気軽にお問い合わせください。
        </p>
      </header>

      <section className="space-y-10">
        {faqCategories.map((category) => (
          <article
            key={category.title}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">
                {category.title}
              </h2>
              <p className="text-sm text-slate-600">{category.description}</p>
            </div>
            <div className="space-y-4">
              {category.items.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          ご不明点はお気軽にお問い合わせください
        </h2>
        <p className="text-sm text-slate-600">
          担当者が24時間以内にご連絡いたします。図面や写真があれば合わせてお送りください。
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          お問い合わせフォームへ
        </a>
      </section>
    </main>
  </div>
  );
}
