import { ImageResponse } from "next/og";
import { siteIconContentType, siteIconDataUrl } from "@/lib/site-icon";

export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = siteIconContentType;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 48,
          padding: "120px 140px",
          background: "radial-gradient(circle at top, #0f172a, #020617 60%)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            width: 360,
            height: 360,
            borderRadius: 80,
            background: "rgba(15,23,42,0.7)",
            boxShadow: "0 35px 120px rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 32,
          }}
        >
          <img
            src={siteIconDataUrl}
            alt="株式会社三上不動産のアイコン"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#fff",
              borderRadius: 48,
              padding: 36,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            株式会社 三上不動産
          </span>
          <span
            style={{
              fontSize: 32,
              lineHeight: 1.5,
              fontWeight: 500,
              color: "rgba(248,250,252,0.8)",
            }}
          >
            京都・大阪エリアの土地仲介／リフォーム／買取査定を
            ワンストップで支援する総合不動産パートナー
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        "content-type": siteIconContentType,
      },
    }
  );
}
