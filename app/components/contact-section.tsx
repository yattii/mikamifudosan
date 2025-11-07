const contactTypes = [
  { value: "reform", label: "リフォーム" },
  { value: "property", label: "物件相談" },
  { value: "other", label: "その他" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-10">
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          ご相談・お問い合わせ
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-slate-600">
          リフォーム・リノベーションのご相談を中心に、買取査定や物件に関するお問い合わせまでワンストップで受け付けています。フォーム送信後24時間以内に担当者よりご連絡いたします。
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <form className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-900"
              >
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="山田 太郎"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-900"
              >
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@mikami.co.jp"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-slate-900"
              >
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="075-000-0000"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-slate-900"
              >
                ご相談種別 <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              >
                <option value="">選択してください</option>
                {contactTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-slate-900"
              >
                住所（市区） <span className="text-xs font-normal text-slate-400">任意</span>
              </label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="京都市中京区 / 大阪市北区 など"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-semibold text-slate-900"
              >
                ご希望の時期 <span className="text-xs font-normal text-slate-400">任意</span>
              </label>
              <input
                id="timeline"
                name="timeline"
                type="text"
                placeholder="例：3か月以内 / 2025年春ごろ"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-semibold text-slate-900"
            >
              ご予算帯 <span className="text-xs font-normal text-slate-400">任意</span>
            </label>
            <input
              id="budget"
              name="budget"
              type="text"
              placeholder="例：300〜500万円程度"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-slate-900"
            >
              ご相談内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="ご希望の工事内容やお困りごと、現況などをできる範囲でご記入ください。"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div>
            <label
              htmlFor="attachments"
              className="block text-sm font-semibold text-slate-900"
            >
              参考資料（任意）
            </label>
            <input
              id="attachments"
              name="attachments"
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
              送信いただくことで、プライバシーポリシーに同意したものとみなします。反社会的勢力の方からのご依頼はお断りしております。
            </p>
            <p>reCAPTCHA v3 などのスパム対策は本番環境で実装予定です。</p>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
          >
            入力内容を送信
          </button>
        </form>
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              お電話でのご相談
            </h3>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              06-6123-4567
            </p>
            <p className="text-xs text-slate-500">受付時間 9:00〜18:00（日・祝定休）</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              メールでの相談
            </h3>
            <p className="mt-2">contact@mikamifudosan.com</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              セミナー・イベント情報
            </h3>
            <p className="mt-2">
              売却・リフォーム勉強会を定期開催。ニュースレター登録とInstagramで最新情報をお届けします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
