import { isRgbaOutOfRange } from "./isRgbaOutOfRange";

/**
 * Checks if the provided string is a valid RGB color format.
 * @param rgb The string to validate as RGB (e.g., "rgb(255, 0, 128)").
 * @returns True if the string is a valid RGB format, false otherwise.
 */

export const isValidRgb = (rgb: string): boolean => {
  try {
    const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
    const match = rgb.match(rgbRegex);

    if (!match) {
      return false;
    }

    const [, r, g, b] = match.map(Number);
    const rgbObj = {
      r: r,
      g: g,
      b: b,
    };

    const valid = !isRgbaOutOfRange(rgbObj);

    return valid;
  } catch (error) {
    console.error(`Error validating RGB string: ${rgb}`, error);
    return false;
  }
};
