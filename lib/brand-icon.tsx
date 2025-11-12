import React from "react";

export const brandIconGradient = "linear-gradient(135deg, #064e3b, #047857)";
export const brandIconTextColor = "#ecfdf5";

type BrandGlyphProps = {
  fontSize?: number;
  borderRadius?: number;
  padding?: number;
  letterSpacing?: string;
  label?: string;
};

export function BrandGlyph({
  fontSize = 88,
  borderRadius = 32,
  padding = 0,
  letterSpacing = "-0.04em",
  label = "三上",
}: BrandGlyphProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: brandIconGradient,
        color: brandIconTextColor,
        fontSize,
        fontWeight: 700,
        letterSpacing,
        borderRadius,
        padding,
      }}
    >
      {label}
    </div>
  );
}

