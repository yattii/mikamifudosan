import Link from "next/link";

const steps = [
  {
    title: "STEP 1. ヒアリング・査定依頼",
    description:
      "フォーム・電話・オンライン相談から受付。物件状況やご希望条件を伺い、最短24時間で概算査定をご提示します。",
  },
  {
    title: "STEP 2. 現地調査・価格提案",
    description:
      "現地訪問・周辺取引事例・建物診断をもとに、リフォーム提案を含めた売却プランをご提案します。",
  },
  {
    title: "STEP 3. ご契約・お手続き",
    description:
      "条件合意後は契約書作成・ローン手続き・各種登記までワンストップでサポート。秘密厳守で迅速に進めます。",
  },
];

const strengths = [
  {
    title: "スピード査定",
    description: "オンライン簡易査定は最短24時間以内。現地査定も48時間以内に対応。",
  },
  {
    title: "リフォーム連動",
    description:
      "自社施工部と連携し、リフォーム提案型の高値売却や買取再販プランを選択可能。",
  },
  {
    title: "安心のサポート",
    description:
      "弁護士・税理士・司法書士と連携し、相続・住み替え・任意売却など複雑な案件も対応します。",
  },
];

const faqItems = [
  {
    question: "査定に費用はかかりますか？",
    answer:
      "簡易査定・訪問査定ともに無料です。査定結果をもとに売却・買取・リフォームの複数プランをご提示します。",
  },
  {
    question: "築年数が古い・雨漏りがある場合も相談できますか？",
    answer:
      "はい。現状のまま買取するプランや、リフォーム後の販売プランなど、物件の状態に応じて最適な方法をご提案します。",
  },
  {
    question: "他社で売り出し中でも相談できますか？",
    answer:
      "専任媒介契約の状況などを確認しながら、買取・共同仲介・リフォーム提案など柔軟に対応いたします。",
  },
];

const propertyTypes = ["戸建", "マンション", "土地", "事業用", "その他"];
const occupancyStatuses = ["居住中", "賃貸中", "空室・空家", "その他"];
const contactMethods = ["メール", "電話", "どちらでも"];

export default function SellPage() {
  return (
    <div className="bg-[#f8fbff]">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20 lg:px-10">
      <header className="space-y-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 px-8 py-16 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
          Sell
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl">
          不動産買取査定・売却サポート
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-100">
          京都・大阪エリアの戸建・マンション・土地・事業用不動産に対応。最短24時間での買取査定と、
          リフォームを活用した高値売却プランをご用意しています。
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="#sell-form"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/20 transition hover:translate-y-[1px] hover:bg-slate-100"
          >
            無料査定を申し込む
          </Link>
          <Link
            href="/contact?type=property"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            売却の相談をする
          </Link>
        </div>
      </header>

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-3">
        {strengths.map((item) => (
          <div key={item.title} className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h2>
            <p className="text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section
        id="sell-form"
        className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <h2 className="text-xl font-semibold text-slate-900">査定の流れ</h2>
        <div className="space-y-5">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">買取査定フォーム</h2>
          <p className="text-sm text-slate-600">
            必須項目をご入力のうえ送信してください。面積や築年数が不明な場合は「不明」と記載いただければ構いません。
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="ownerName"
                className="block text-sm font-semibold text-slate-900"
              >
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                id="ownerName"
                name="ownerName"
                type="text"
                placeholder="山田 太郎"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="ownerEmail"
                className="block text-sm font-semibold text-slate-900"
              >
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                id="ownerEmail"
                name="ownerEmail"
                type="email"
                placeholder="katayamakensetsu.mikami@gmail.com"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="ownerPhone"
                className="block text-sm font-semibold text-slate-900"
              >
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                id="ownerPhone"
                name="ownerPhone"
                type="tel"
                placeholder="075 981 7170"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="propertyAddress"
                className="block text-sm font-semibold text-slate-900"
              >
                物件所在地（市区まで） <span className="text-red-500">*</span>
              </label>
              <input
                id="propertyAddress"
                name="propertyAddress"
                type="text"
                placeholder="京都市伏見区 / 大阪市西区 など"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-semibold text-slate-900"
              >
                種別 <span className="text-red-500">*</span>
              </label>
              <select
                id="propertyType"
                name="propertyType"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              >
                <option value="">選択してください</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="siteArea"
                className="block text-sm font-semibold text-slate-900"
              >
                面積 <span className="text-xs font-normal text-slate-400">任意</span>
              </label>
              <input
                id="siteArea"
                name="siteArea"
                type="text"
                placeholder="例：土地80㎡ / 建物95㎡"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="builtYear"
                className="block text-sm font-semibold text-slate-900"
              >
                築年 <span className="text-xs font-normal text-slate-400">任意（不明可）</span>
              </label>
              <input
                id="builtYear"
                name="builtYear"
                type="text"
                placeholder="例：1998年（平成10年）築 / 不明"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-semibold text-slate-900"
              >
                現況 <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                name="status"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              >
                <option value="">選択してください</option>
                {occupancyStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-semibold text-slate-900"
              >
                売却希望時期 <span className="text-red-500">*</span>
              </label>
              <input
                id="timeline"
                name="timeline"
                type="text"
                placeholder="例：半年以内 / 具体的時期未定"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="contactMethod"
                className="block text-sm font-semibold text-slate-900"
              >
                ご希望の連絡方法 <span className="text-red-500">*</span>
              </label>
              <select
                id="contactMethod"
                name="contactMethod"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              >
                <option value="">選択してください</option>
                {contactMethods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="floorPlan"
                className="block text-sm font-semibold text-slate-900"
              >
                間取り <span className="text-xs font-normal text-slate-400">任意</span>
              </label>
              <input
                id="floorPlan"
                name="floorPlan"
                type="text"
                placeholder="例：3LDK / ワンルーム"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="nearestStation"
                className="block text-sm font-semibold text-slate-900"
              >
                最寄駅・交通 <span className="text-xs font-normal text-slate-400">任意</span>
              </label>
              <input
                id="nearestStation"
                name="nearestStation"
                type="text"
                placeholder="例：京阪本線「石清水八幡宮」徒歩8分"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="expectedPrice"
              className="block text-sm font-semibold text-slate-900"
            >
              希望価格帯 <span className="text-xs font-normal text-slate-400">任意</span>
            </label>
            <input
              id="expectedPrice"
              name="expectedPrice"
              type="text"
              placeholder="例：4,000〜4,500万円程度"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-semibold text-slate-900"
            >
              売却理由 <span className="text-xs font-normal text-slate-400">任意</span>
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={4}
              placeholder="例：住み替え / 相続 / 資産整理 など"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div>
            <label
              htmlFor="sellAttachments"
              className="block text-sm font-semibold text-slate-900"
            >
              図面・写真など（任意）
            </label>
            <input
              id="sellAttachments"
              name="sellAttachments"
              type="file"
              multiple
              accept=".jpg,.jpeg,.png,.pdf"
              className="mt-2 w-full text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-emerald-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-emerald-600"
            />
            <p className="mt-2 text-xs text-slate-400">
              jpg / png / pdf（各5MB以内・最大5点）をご添付いただけます。
            </p>
          </div>
          <div className="space-y-2 text-xs text-slate-500">
            <p>
              お送りいただいた内容はプライバシーポリシーに基づき厳重に管理いたします。反社会的勢力に関わる案件はお断りしております。
            </p>
            <p>reCAPTCHA v3 やスパム対策は本番環境で実装予定です。</p>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            査定を依頼する
          </button>
        </form>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">よくある質問</h2>
        <div className="space-y-4">
          {faqItems.map((faq) => (
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
      </section>
    </main>
  </div>
  );
}
