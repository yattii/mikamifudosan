import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #022c22, #047857)",
          color: "#f0fdf4",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        三上
      </div>
    ),
    {
      ...size,
    }
  );
}
