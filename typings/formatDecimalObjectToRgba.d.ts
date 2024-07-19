import { HexDecimalObject } from "./types/hex-decimal-object.interface";
/**
 * Formats a HexDecimalObject to an RGBA string.
 *
 * @param {HexDecimalObject} decimalObject - The object containing the red, green, blue, and optionally alpha components.
 * @param {string} [parameterA] - Optional alpha parameter as a string. If provided and numeric, it overrides the alpha value in the object.
 * @returns {string} The formatted RGBA string.
 *
 * @example
 * // Returns 'rgba(255, 255, 255, 0.5)'
 * formatDecimalObjectToRgba({ r: 255, g: 255, b: 255, a: 1 }, '0.5');
 *
 * @example
 * // Returns 'rgb(255, 255, 255)'
 * formatDecimalObjectToRgba({ r: 255, g: 255, b: 255 });
 *
 * @example
 * // Returns 'rgba(255, 99, 71, 0.6)' (alpha rounded to one decimal place)
 * formatDecimalObjectToRgba({ r: 255, g: 99, b: 71, a: 0.645343434232323 });
 */
export declare const formatDecimalObjectToRgba: (decimalObject: HexDecimalObject, parameterA?: string) => string;
