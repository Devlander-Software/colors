import { AlphaScale } from "./types/alpha-scale.type";

/**
 * Applies a new alpha value to an RGBA color object.
 * The alpha value can be provided in the range 0-1 or 0-100.
 *
 * @param {object} color - The original color object with properties r, g, b, and optionally a.
 * @param {AlphaScale} alphaValue - The new alpha value. It can be in the range 0-1 or 0-100.
 * @returns {object} - The new color object with the updated alpha value.
 *
 * @example
 * const color = { r: 52, g: 152, b: 219 };
 * const newColor = applyAlphaToColor(color, 50);
 * // newColor will be { r: 52, g: 152, b: 219, a: 0.5 }
 */
export const applyAlphaToColor = (
  color: { r: number; g: number; b: number; a?: number },
  alphaValue: AlphaScale,
): { r: number; g: number; b: number; a: number } => {
  let alpha;

  // Check if alphaValue is in the 0-1 range or 0-100 range
  if (alphaValue > 1) {
    // Assume alphaValue is in the 0-100 range
    alpha = alphaValue / 100;
  } else {
    // Assume alphaValue is in the 0-1 range
    alpha = alphaValue;
  }

  // Ensure the new alpha value is within the valid range (0 to 1)
  const clampedAlpha = Math.min(Math.max(alpha, 0), 1);

  return { ...color, a: clampedAlpha };
};
