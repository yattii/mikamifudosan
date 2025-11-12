import { ImageResponse } from "next/og";
import { BrandGlyph } from "@/lib/brand-icon";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <BrandGlyph fontSize={82} borderRadius={40} />,
    {
      ...size,
    }
  );
}
