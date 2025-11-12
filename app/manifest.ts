import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "株式会社 三上不動産",
    short_name: "三上不動産",
    description:
      "京都・大阪エリアで土地仲介やリフォームを行う株式会社 三上不動産の公式サイト。",
    start_url: "/",
    display: "standalone",
    background_color: "#03130f",
    theme_color: "#064e3b",
    lang: "ja",
    icons: [
      {
        src: "/icon",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

