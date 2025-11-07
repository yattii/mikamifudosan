export type LocalGalleryImage = {
  url: string;
  alt: string;
  category: string;
  description: string;
};

export const localGalleryImages: LocalGalleryImage[] = [
  {
    url: "/gallery/リフォーム.png",
    alt: "リビングダイニングのリフォーム事例",
    category: "リビング",
    description: "既存の壁を取り払い、アイランドキッチンと一体化したLDKへ。床暖房と調光照明で快適性を高めています。",
  },
  {
    url: "/gallery/キッチンafter.png",
    alt: "リフォーム後の木目調キッチン",
    category: "キッチン",
    description: "収納計画と家事動線にこだわったオーダーキッチン。食洗機やタッチレス水栓など最新設備を組み込みました。",
  },
  {
    url: "/gallery/キッチンbefore.png",
    alt: "リフォーム前のキッチン全景",
    category: "施工前",
    description: "既存のキッチンは老朽化と収納不足が課題でした。現地調査で排水経路と換気計画を洗い出しています。",
  },
  {
    url: "/gallery/洗面所.png",
    alt: "造作収納付き洗面所のリフォーム",
    category: "洗面所",
    description: "造作カウンターと壁面収納で家族全員が使いやすい洗面スペースに。調湿パネルでカビ対策も実施しています。",
  },
  {
    url: "/gallery/トイレ.png",
    alt: "タンクレストイレと手洗いカウンター",
    category: "トイレ",
    description: "節水型タンクレスと自動手洗い器を組み合わせ、コンパクトな空間にゆとりを持たせたプランです。",
  },
  {
    url: "/gallery/不動産.png",
    alt: "不動産活用の相談風景",
    category: "不動産",
    description: "リフォームと買取査定を同時に検討するお客様との打ち合わせ。資産価値を高める活用方法を提案しています。",
  },
];
