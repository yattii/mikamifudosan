export type Strength = {
  title: string;
  description: string;
};

type StrengthsSectionProps = {
  strengths: Strength[];
};

export default function StrengthsSection({
  strengths,
}: StrengthsSectionProps) {
  return (
    <section
      id="strengths"
      className="grid gap-10 rounded-3xl bg-gradient-to-br from-sky-100 via-white to-emerald-50 px-8 py-12 text-slate-800 shadow-lg shadow-emerald-50 lg:grid-cols-2"
    >
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Strengths
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            選ばれる理由
            <span className="block text-emerald-600">三上不動産の強み</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            リフォームと買取査定の双方を熟知した専任コンサルタントが、資産価値と暮らしの質を両立させる提案を行います。
            物件の状態調査から補助金対応、アフターサポートまでワンチームで伴走します。
          </p>
        </div>
        <ul className="mt-10 space-y-4 text-sm text-slate-600">
          {strengths.map((strength) => (
            <li key={strength.title}>
              <div className="flex gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-inner shadow-emerald-50">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                  ◎
                </span>
                <div>
                  <span className="font-semibold text-slate-900">{strength.title}</span>
                  <br />
                  {strength.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-4">
        <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-lg shadow-emerald-50">
          <h3 className="text-base font-semibold text-slate-900">
            拠点 &amp; アクセス
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            〒614-8087 京都府八幡市八幡柿ケ谷53-12
            <br />
            京阪本線「石清水八幡宮」駅 徒歩12分 / 京阪バス「さつき近隣公園前」停 徒歩2分
          </p>
        </div>
        <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-lg shadow-emerald-50">
          <h3 className="text-base font-semibold text-slate-900">対応エリア</h3>
          <p className="mt-3 text-sm text-slate-600">
            【大阪府】大阪市・北摂・堺・泉州・東大阪 ほか
            <br />
            【京都府】京都市・長岡京・向日市・宇治 ほか
            <br />
            周辺市区町村もご相談ください。
          </p>
        </div>
        <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-lg shadow-emerald-50">
          <h3 className="text-base font-semibold text-slate-900">
            お客様の声（抜粋）
          </h3>
          <p className="mt-3 text-sm italic text-slate-600">
            「築古マンションをリノベして想定以上の価格で成約できました。工程ごとの説明が明確で安心でした。」
            ― 京都市左京区・I様
          </p>
        </div>
      </div>
    </section>
  );
}
