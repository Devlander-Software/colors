/**
 * Lightens an RGB color by a given factor.
 * @param color - An object containing r, g, and b values.
 * @param factor - The factor by which to lighten the color. The value should be between 0 and 1.
 * @returns An object containing the lightened r, g, and b values.
 *
 * @example
 * ```typescript
 * // Lighten a dark red color by 10%
 * console.log(lightenColor({ r: 100, g: 0, b: 0 }, 0.1)); // { r: 115, g: 0, b: 0 }
 *
 * // Lighten a green color by 20%
 * console.log(lightenColor({ r: 0, g: 100, b: 0 }, 0.2)); // { r: 0, g: 120, b: 0 }
 *
 * // Lighten a blue color by 30%
 * console.log(lightenColor({ r: 0, g: 0, b: 100 }, 0.3)); // { r: 0, g: 0, b: 130 }
 *
 * // Lighten a nearly white color by 10%
 * console.log(lightenColor({ r: 245, g: 245, b: 245 }, 0.1)); // { r: 255, g: 255, b: 255 }
 *
 * // Lighten a medium gray color by 50%
 * console.log(lightenColor({ r: 128, g: 128, b: 128 }, 0.5)); // { r: 192, g: 192, b: 192 }
 * ```
 */
export const lightenColor = (
    color: { r: number; g: number; b: number },
    factor: number
  ): { r: number; g: number; b: number } => {
    return {
      r: Math.min(255, Math.round(color.r + factor * (255 - color.r))),
      g: Math.min(255, Math.round(color.g + factor * (255 - color.g))),
      b: Math.min(255, Math.round(color.b + factor * (255 - color.b)))
    };
  };
  