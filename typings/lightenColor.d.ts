import { AlphaScale } from "./types/alpha-scale.type";
/**
 * Adjusts an RGB color by a given factor. If the factor is positive, it lightens the color. If the factor is negative, it darkens the color.
 * The factor can be provided in the range -1 to 1, -1.00 to 1.00, or -100 to 100.
 *
 * @param color - An object containing r, g, and b values.
 * @param factor - The factor by which to adjust the color. It can be in the range -1 to 1, -1.00 to 1.00, or -100 to 100.
 * @returns An object containing the adjusted r, g, and b values.
 *
 * @example
 * ```typescript
 * // Lighten a dark red color by 10%
 * console.log(lightenColor({ r: 100, g: 0, b: 0 }, 0.1)); // { r: 115, g: 0, b: 0 }
 *
 * // Darken a dark red color by 10%
 * console.log(lightenColor({ r: 100, g: 0, b: 0 }, -0.1)); // { r: 90, g: 0, b: 0 }
 *
 * // Lighten a green color by 20%
 * console.log(lightenColor({ r: 0, g: 100, b: 0 }, 0.2)); // { r: 0, g: 120, b: 0 }
 *
 * // Darken a green color by 20%
 * console.log(lightenColor({ r: 0, g: 100, b: 0 }, -0.2)); // { r: 0, g: 80, b: 0 }
 *
 * // Lighten a blue color by 30%
 * console.log(lightenColor({ r: 0, g: 0, b: 100 }, 0.3)); // { r: 0, g: 0, b: 130 }
 *
 * // Darken a blue color by 30%
 * console.log(lightenColor({ r: 0, g: 0, b: 100 }, -0.3)); // { r: 0, g: 0, b: 70 }
 *
 * // Lighten a nearly white color by 10%
 * console.log(lightenColor({ r: 245, g: 245, b: 245 }, 0.1)); // { r: 255, g: 255, b: 255 }
 *
 * // Darken a nearly white color by 10%
 * console.log(lightenColor({ r: 245, g: 245, b: 245 }, -0.1)); // { r: 220, g: 220, b: 220 }
 *
 * // Lighten a medium gray color by 50%
 * console.log(lightenColor({ r: 128, g: 128, b: 128 }, 0.5)); // { r: 192, g: 192, b: 192 }
 *
 * // Darken a medium gray color by 50%
 * console.log(lightenColor({ r: 128, g: 128, b: 128 }, -0.5)); // { r: 64, g: 64, b: 64 }
 * ```
 */
export declare const lightenColor: (color: {
    r: number;
    g: number;
    b: number;
}, factor: AlphaScale) => {
    r: number;
    g: number;
    b: number;
};
