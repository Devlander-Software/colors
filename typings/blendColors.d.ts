import { AlphaScale } from "./types/alpha-scale.type";
import { HexDecimalObject } from "./types/hex-decimal-object.interface";
/**
 * Blends two colors based on the given alpha scale.
 * The alpha scale can be provided in the range -1 to 1, -1.00 to 1.00, or -100 to 100.
 *
 * @param {HexDecimalObject} color1 - The first color object with properties r, g, b.
 * @param {HexDecimalObject} color2 - The second color object with properties r, g, b.
 * @param {AlphaScale} alphaScale - The alpha scale value. It can be in the range -1 to 1, -1.00 to 1.00, or -100 to 100.
 * @returns {HexDecimalObject} - The blended color object.
 *
 * @example
 * const color1 = { r: 52, g: 152, b: 219 };
 * const color2 = { r: 255, g: 0, b: 0 };
 * const blendedColor = blendColors(color1, color2, 50);
 * // blendedColor will be a color blended 50% between color1 and color2
 */
export declare const blendColors: (color1: HexDecimalObject, color2: {
    r: number;
    g: number;
    b: number;
}, alphaScale: AlphaScale) => HexDecimalObject;
