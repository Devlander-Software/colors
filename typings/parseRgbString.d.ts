import { HexDecimalObject } from "./types/hex-decimal-object.interface";
/**
 * Parses an RGB or RGBA string and returns an object with the red, green, blue, and optionally alpha components.
 *
 * @param {string} color - The RGB or RGBA string to parse (e.g., "rgb(255, 255, 255)" or "rgba(255, 255, 255, 0.5)").
 * @returns {HexDecimalObject | null} The RGB components or null if the input is invalid.
 */
export declare const parseRgbString: (color: string) => HexDecimalObject | null;
