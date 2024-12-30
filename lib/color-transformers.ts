import { hexToHSL, HSLToHex } from './color-utils';

export type ColorTransformer = (color: string) => string;

// Méthode 1: Ajustement HSL
export function hslAdjust(color: string): string {
  const hsl = hexToHSL(color);
  return HSLToHex(
    hsl.h,
    Math.min(hsl.s + 10, 100),
    Math.max(hsl.l - 40, 15)
  );
}

// Méthode 2: Assombrissement simple
export function darken(color: string): string {
  const percent = 20;
  let num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) - amt,
    G = ((num >> 8) & 0x00FF) - amt,
    B = (num & 0x0000FF) - amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
}

// Méthode 3: Inversion et ajustement
export function invert(color: string): string {
  let num = parseInt(color.replace("#", ""), 16),
    R = 255 - (num >> 16),
    G = 255 - ((num >> 8) & 0x00FF),
    B = 255 - (num & 0x0000FF);
  return `#${(R << 16 | G << 8 | B).toString(16).padStart(6, '0')}`;
}

// Map des méthodes disponibles
export const transformers: Record<string, ColorTransformer> = {
  hsl: hslAdjust,
  darken: darken,
  invert: invert,
};