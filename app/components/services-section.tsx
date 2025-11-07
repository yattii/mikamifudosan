import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import interiorDesignImage from "@/public/gallery/リフォーム.png";
import insuranceImage from "@/public/gallery/不動産.png";
import landImage from "@/public/gallery/hero.png";
import type { MicroCMSImage } from "@/lib/microcms";

type ServiceMenu = {
  name: string;
  label: string;
  href: string;
  description: string;
  points: string[];
  image?: {
    src: StaticImageData;
    alt: string;
  };
};

const serviceMenus: ServiceMenu[] = [
  {
    name: "土地仲介",
    label: "SERVICE 01",
    href: "/real-estate",
    description:
      "「土地仲介」とはお持ちの土地を当社が仲介し、買主さまとお繋ぎすることで有効活用を促進する方法です。豊富な情報と仲介実績にもとづき、土地活用に興味のある方との出会いづくりから契約まで伴走します。",
    points: [
      "買主ネットワークを活かしたスピーディーなマッチング",
      "交渉・契約書作成・引き渡しまで一貫したサポート",
      "活用事例や最新市況を踏まえたご提案を継続共有",
    ],
    image: {
      src: insuranceImage,
      alt: "土地仲介の相談イメージ",
    },
  },
  {
    name: "土地売買",
    label: "SERVICE 02",
    href: "/sell",
    description:
      "「土地買取」とはお持ちの土地を当社が買い取ることで有効活用する方法です。住宅や駐車場、工業用地などに転換することで、土地のポテンシャルを引き出します。いくらで売れるだろうと感じたらお気軽にご相談ください。",
    points: [
      "現地調査にもとづく査定と活用プランのご提案",
      "住宅・駐車場・工業用地などへの転換をサポート",
      "売却手続きや関係各所との調整まで一括対応",
    ],
    image: {
      src: landImage,
      alt: "土地売買で活用される住宅地の景観",
    },
  },
  {
    name: "インテリア内装",
    label: "SERVICE 03",
    href: "/interior-design",
    description:
      "お客さまにとって快適な住空間を創るため、家具や照明、小物をご提案し、「人」と「モノ」が調和する空間をご紹介します。今のお住まいを変えてみようかな、どんな空間ができるんだろうと感じたらぜひご相談ください。",
    points: [
      "家具・照明・小物を含めたトータルコーディネート",
      "暮らしやすさとデザイン性を両立するご提案",
      "オンライン・訪問どちらの打ち合わせにも対応",
    ],
    image: {
      src: interiorDesignImage,
      alt: "インテリア内装のコーディネート事例",
    },
  },
  {
    name: "保険代理申請",
    label: "SERVICE 04",
    href: "/insurance",
    description:
      "土地や物件といった不動産に関連する保険は当社にお任せください。お客さまのお手間をかけず、状況に合った保険をチョイスしご紹介します。申請時も当社が代行できるので安心です。",
    points: [
      "火災・地震・賠償など不動産関連保険の最適プランをご提案",
      "申請書類の準備や提出を代行し手間を軽減",
      "契約後の見直しや更新手続きも継続サポート",
    ],
    image: {
      src: insuranceImage,
      alt: "保険代理申請に関する打ち合わせの様子",
    },
  },
];

const flowItems = [
  "お問い合わせ（電話 / フォーム）・ヒアリング",
  "現地調査・採寸・課題の可視化",
  "プラン設計・お見積り・スケジュール提案",
  "ご契約後の着工準備（近隣挨拶・申請）",
  "施工・検査・お引き渡し",
  "アフターフォロー（定期点検 / 保証）",
];

type ServicesSectionProps = {
  featureImages?: MicroCMSImage[];
};

export default function ServicesSection({ featureImages: _featureImages }: ServicesSectionProps) {
  void _featureImages;
  return (
    <section
      id="services"
      className="space-y-10 overflow-hidden rounded-3xl bg-linear-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-lg shadow-sky-50 sm:p-10"
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Business
        </p>
        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            事業内容
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            不動産の専門知識と地域密着のノウハウを活かし、インテリア、保険、土地活用まで一貫してサポートしています。事業の詳細は各ページをご覧ください。
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {serviceMenus.map((menu) => (
          <article
            key={menu.name}
            className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/90 p-8 shadow-lg shadow-emerald-50"
          >
            {menu.image ? (
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/60 bg-slate-100">
                <Image
                  src={menu.image.src}
                  alt={menu.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20vw, 80vw"
                />
              </div>
            ) : null}
            <div className="mt-5 flex flex-col gap-3">
              <p className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                {menu.label}
              </p>
              <h3 className="text-lg font-semibold text-slate-900">
                {menu.name}
              </h3>
              <p className="text-sm text-slate-600">{menu.description}</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              {menu.points.map((point) => (
                <li key={point}>・ {point}</li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Link
                href={menu.href}
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-600"
              >
                詳細を確認する
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="grid gap-6 rounded-3xl border border-white/60 bg-white/90 p-8 shadow-lg shadow-emerald-50 lg:grid-cols-[0.6fr,1fr]">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-900">工事の流れ</h3>
          <p className="text-sm text-slate-600">
            迅速な初動と丁寧なコミュニケーションで、着工までの不安を解消します。工程ごとのチェックリストと写真共有を標準化しています。
          </p>
        </div>
        <ol className="grid gap-3 text-sm text-slate-600">
          {flowItems.map((item, index) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-emerald-500 text-center text-xs font-semibold leading-6 text-white">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="rounded-3xl border border-dashed border-emerald-200 bg-white/80 p-6 text-sm text-slate-600">
        サービスページでは、カテゴリ別の料金シミュレーション、補助金・減税情報、注意点、よくある質問を掲載予定です。
      </div>
    </section>
  );
}
