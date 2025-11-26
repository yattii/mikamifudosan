import { ImageResponse } from "next/og";
import { siteIconContentType, siteIconDataUrl } from "@/lib/site-icon";

export const runtime = "nodejs";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <img
          src={siteIconDataUrl}
          alt="株式会社三上不動産 ロゴ"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundColor: "#fff",
            borderRadius: 120,
            padding: 40,
          }}
        />
      </div>
    ),
    {
      width: 512,
      height: 512,
      headers: {
        "content-type": siteIconContentType,
      },
    }
  );
}
