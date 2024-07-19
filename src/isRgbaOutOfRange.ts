import { HexDecimalObject } from "./types/hex-decimal-object.interface";

/**
 * Checks if the RGBA value is out of range.
 * @param rgba - The RGBA object to validate.
 * @returns {boolean} - True if the value is out of range, false otherwise.
 */
export function isRgbaOutOfRange(rgba: HexDecimalObject): boolean {
  const { r, g, b, a } = rgba;

  // Check if r, g, b are within 0-255
  if (r < 0 || r > 255) return true;
  if (g < 0 || g > 255) return true;
  if (b < 0 || b > 255) return true;

  // Check if a (if provided) is within 0-1
  if (a !== undefined && (a < 0 || a > 1)) return true;

  // If none of the conditions are met, the value is not out of range
  return false;
}
