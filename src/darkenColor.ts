import { AlphaScale } from "./types/alpha-scale.type";

/**
 * Adjusts an RGB color by a given factor. If the factor is positive, it darkens the color. If the factor is negative, it lightens the color.
 * The factor can be provided in the range -1 to 1, -1.00 to 1.00, or -100 to 100.
 *
 * @param color - An object containing r, g, and b values.
 * @param factor - The factor by which to adjust the color. It can be in the range -1 to 1, -1.00 to 1.00, or -100 to 100.
 * @returns An object containing the adjusted r, g, and b values.
 *
 * @example
 * ```typescript
 * // Darken a light red color by 10%
 * console.log(darkenColor({ r: 255, g: 100, b: 100 }, 0.1)); // { r: 230, g: 90, b: 90 }
 *
 * // Lighten a light red color by 10%
 * console.log(darkenColor({ r: 255, g: 100, b: 100 }, -0.1)); // { r: 255, g: 110, b: 110 }
 *
 * // Darken a green color by 20%
 * console.log(darkenColor({ r: 0, g: 200, b: 0 }, 0.2)); // { r: 0, g: 160, b: 0 }
 *
 * // Lighten a green color by 20%
 * console.log(darkenColor({ r: 0, g: 200, b: 0 }, -0.2)); // { r: 0, g: 240, b: 0 }
 *
 * // Darken a blue color by 30%
 * console.log(darkenColor({ r: 0, g: 0, b: 255 }, 0.3)); // { r: 0, g: 0, b: 178 }
 *
 * // Lighten a blue color by 30%
 * console.log(darkenColor({ r: 0, g: 0, b: 255 }, -0.3)); // { r: 0, g: 0, b: 255 }
 *
 * // Darken a nearly black color by 10%
 * console.log(darkenColor({ r: 10, g: 10, b: 10 }, 0.1)); // { r: 9, g: 9, b: 9 }
 *
 * // Lighten a nearly black color by 10%
 * console.log(darkenColor({ r: 10, g: 10, b: 10 }, -0.1)); // { r: 12, g: 12, b: 12 }
 *
 * // Darken a medium gray color by 50%
 * console.log(darkenColor({ r: 128, g: 128, b: 128 }, 0.5)); // { r: 64, g: 64, b: 64 }
 *
 * // Lighten a medium gray color by 50%
 * console.log(darkenColor({ r: 128, g: 128, b: 128 }, -0.5)); // { r: 192, g: 192, b: 192 }
 * ```
 */
export const darkenColor = (
  color: { r: number; g: number; b: number },
  factor: AlphaScale,
): { r: number; g: number; b: number } => {
  // Convert factor to the 0-1 range if it's in the 1-100 range
  const adjustedFactor = Math.abs(factor) > 1 ? factor / 100 : factor;

  return {
    r: Math.max(
      0,
      Math.min(
        255,
        Math.round(
          factor < 0
            ? color.r - adjustedFactor * (255 - color.r)
            : color.r * (1 - adjustedFactor),
        ),
      ),
    ),
    g: Math.max(
      0,
      Math.min(
        255,
        Math.round(
          factor < 0
            ? color.g - adjustedFactor * (255 - color.g)
            : color.g * (1 - adjustedFactor),
        ),
      ),
    ),
    b: Math.max(
      0,
      Math.min(
        255,
        Math.round(
          factor < 0
            ? color.b - adjustedFactor * (255 - color.b)
            : color.b * (1 - adjustedFactor),
        ),
      ),
    ),
  };
};
