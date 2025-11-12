import { ImageResponse } from "next/og";
import { BrandGlyph } from "@/lib/brand-icon";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(<BrandGlyph fontSize={260} borderRadius={80} />, {
    width: 512,
    height: 512,
  });
}

