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

    // Check if components are within valid range
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  } catch (error) {
    console.error(`Error validating RGB string: ${rgb}`, error);
    return false;
  }
};
