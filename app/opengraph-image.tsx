import { ImageResponse } from "next/og";
import { BrandGlyph, brandIconTextColor } from "@/lib/brand-icon";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 72,
          padding: "80px 96px",
          background: "#03130f",
          color: brandIconTextColor,
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 48,
            boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BrandGlyph fontSize={220} borderRadius={48} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            株式会社 三上不動産
          </span>
          <span
            style={{
              fontSize: 36,
              fontWeight: 500,
              lineHeight: 1.4,
              color: "#d1fae5",
            }}
          >
            京都・大阪エリアで土地仲介・リフォームまで
            ワンストップでサポートする総合不動産パートナー
          </span>
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            <span>土地仲介</span>
            <span>リフォーム</span>
            <span>保険</span>
            <span>インテリア</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
