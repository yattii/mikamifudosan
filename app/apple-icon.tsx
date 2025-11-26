import { NextResponse } from "next/server";
import {
  getSiteIconBuffer,
  siteIconContentType,
  siteIconDimensions,
} from "@/lib/site-icon";

export const runtime = "nodejs";

export const size = {
  width: siteIconDimensions.width,
  height: siteIconDimensions.height,
};

export const contentType = siteIconContentType;

export default function AppleIcon() {
  const buffer = Buffer.from(getSiteIconBuffer());
  return new NextResponse(buffer, {
    headers: {
      "content-type": siteIconContentType,
    },
  });
}
