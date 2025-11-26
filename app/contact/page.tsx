"use client";

import { useState, type FormEvent } from "react";
import { sendContactEmail } from "@/lib/contact-email";

const contactTypes = [
  { value: "reform", label: "リフォーム" },
  { value: "property", label: "物件相談" },
  { value: "other", label: "その他" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      await sendContactEmail(formData);
      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "送信に失敗しました。時間をおいて再度お試しください。"
      );
      setStatus("error");
    }
  }

  return (
    <div className="bg-[#f8fbff]">
      <main className="mx-auto flex max-w-4xl flex-col gap-12 px-6 py-20 lg:px-10">
        <header className="space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Contact
          </p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            お問い合わせフォーム
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            リフォーム・リノベーションのご相談を中心に、買取査定や物件に関するお問い合わせにも対応しています。送信後24時間以内に担当者よりご連絡いたします。
          </p>
        </header>

        <form
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
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
                placeholder="katayamakensetsu.mikami@gmail.com"
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
                placeholder="075 981 7170"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              />
            </div>
            <div>
              <label
                htmlFor="contactType"
                className="block text-sm font-semibold text-slate-900"
              >
                ご相談種別 <span className="text-red-500">*</span>
              </label>
              <select
                id="contactType"
                name="contactType"
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
              placeholder="ご希望条件や現状の課題などをご記入ください。"
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
              送信いただくことで、プライバシーポリシーに同意したものとみなします。反社会的勢力からのご依頼は一切お受けできません。
            </p>
            <p>reCAPTCHA v3 やレートリミットなどのスパム対策は本番環境で実装予定です。</p>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={status === "loading"}
          >
            {status === "loading" ? "送信中..." : "入力内容を送信する"}
          </button>
          {status === "success" && (
            <p className="text-sm text-emerald-600">
              送信が完了しました。担当者よりご連絡いたします。
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              {errorMessage ||
                "送信に失敗しました。時間をおいて再度お試しください。"}
            </p>
          )}
        </form>

        <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900">
            お電話でのお問い合わせ
          </h2>
          <p className="text-lg font-semibold text-slate-900">075 981 7170</p>
          <p>受付時間 9:00〜18:00（日・祝定休）</p>
          <p className="text-xs text-slate-400">
            フォーム送信後の自動返信メールや社内通知（メール / Slack など）は順次実装予定です。
          </p>
        </section>
      </main>
    </div>
  );
}
