import { hexToHSL, HSLToHex } from './color-utils';

export function generateDarkVariant(lightHex: string) {
  const hsl = hexToHSL(lightHex);
  
  return HSLToHex(
    hsl.h,
    Math.min(hsl.s + 10, 100), // Augmenter légèrement la saturation
    Math.max(hsl.l - 40, 15)   // Réduire la luminosité mais pas trop
  );
}