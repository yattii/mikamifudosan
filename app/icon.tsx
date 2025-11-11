import { ImageResponse } from "next/og";

export const size = {
  width: 192,
  height: 192,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #064e3b, #047857)",
          color: "#ecfdf5",
          fontSize: 88,
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
