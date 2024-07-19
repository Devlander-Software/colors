import { HexDecimalObject } from "./types/hex-decimal-object.interface";

/**
 * Converts a HexDecimalObject to an RGB or RGBA string.
 *
 * @param {HexDecimalObject} color - The color object to convert.
 * @returns {string} The RGB or RGBA string.
 */
export const toRgbString = (color: HexDecimalObject): string => {
  if (color.a !== undefined) {
    const roundedAlpha = Math.round(color.a * 10) / 10; // Round alpha to one decimal place
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${roundedAlpha})`;
  }
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
};
