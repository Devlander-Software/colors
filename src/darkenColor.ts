/**
 * Darkens an RGB color by a given factor.
 * @param color - An object containing r, g, and b values.
 * @param factor - The factor by which to darken the color. The value should be between 0 and 1.
 * @returns An object containing the darkened r, g, and b values.
 *
 * @example
 * ```typescript
 * // Darken a light red color by 10%
 * console.log(darkenColor({ r: 255, g: 100, b: 100 }, 0.1)); // { r: 230, g: 90, b: 90 }
 *
 * // Darken a green color by 20%
 * console.log(darkenColor({ r: 0, g: 200, b: 0 }, 0.2)); // { r: 0, g: 160, b: 0 }
 *
 * // Darken a blue color by 30%
 * console.log(darkenColor({ r: 0, g: 0, b: 255 }, 0.3)); // { r: 0, g: 0, b: 178 }
 *
 * // Darken a nearly black color by 10%
 * console.log(darkenColor({ r: 10, g: 10, b: 10 }, 0.1)); // { r: 9, g: 9, b: 9 }
 *
 * // Darken a medium gray color by 50%
 * console.log(darkenColor({ r: 128, g: 128, b: 128 }, 0.5)); // { r: 64, g: 64, b: 64 }
 * ```
 */
export const darkenColor = (
  color: { r: number; g: number; b: number },
  factor: number,
): { r: number; g: number; b: number } => {
  return {
    r: Math.max(0, Math.round(color.r - factor * color.r)),
    g: Math.max(0, Math.round(color.g - factor * color.g)),
    b: Math.max(0, Math.round(color.b - factor * color.b)),
  };
};
