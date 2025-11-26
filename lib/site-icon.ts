import { readFileSync } from "node:fs";
import path from "node:path";

const ICON_RELATIVE_PATH = ["public", "gallery", "アイコン.png"] as const;
const iconAbsolutePath = path.join(process.cwd(), ...ICON_RELATIVE_PATH);

function readIconFile() {
  try {
    return readFileSync(iconAbsolutePath);
  } catch (error) {
    throw new Error(`Failed to read site icon at ${iconAbsolutePath}: ${String(error)}`);
  }
}

const iconBuffer = readIconFile();
const iconBase64 = iconBuffer.toString("base64");

export const siteIconContentType = "image/png";
export const siteIconDimensions = { width: 176, height: 160 } as const;
export const siteIconPublicPath = "/gallery/アイコン.png";
export const siteIconDataUrl = `data:${siteIconContentType};base64,${iconBase64}`;

export function getSiteIconBuffer() {
  return iconBuffer;
}
