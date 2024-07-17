/**
 * Imports for color conversion and validation utilities.
 */
import { canBeConvertedIntoColor } from "./canBeConvertedToColor";
import { hexesToDecimals } from "./hexToDecimals";
import { hexToRgb } from "./hexToRgb";
import { hexToRgba } from "./hexToRgba";
import { isValidHex } from "./isValidHex";
import { isValidRgb } from "./isValidRgb";
import { isValidRgba } from "./isValidRgba";
import { parseRgbString } from "./parseRgbString";
import { toRgbString } from "./toRgbString";
import { HexDecimalObject } from "./types/hex-decimal-object.interface";

/**
 * Parses a color value into a HexDecimalObject representing RGB(A) values.
 * @param colorValue The color value to parse (e.g., hex, rgb, rgba string).
 * @returns A HexDecimalObject representing the parsed RGB(A) values.
 * @throws Error if the color value is invalid or cannot be converted.
 */
export const parseColor = (colorValue: string): HexDecimalObject => {
  if (!canBeConvertedIntoColor(colorValue)) {
    throw new Error("Invalid color format");
  }

  try {
    let rgbString: string | null = null;
    let rgbaString: string | null = null;
    let result: HexDecimalObject | null = null;

    if (isValidHex(colorValue)) {
      rgbString = hexToRgb(colorValue);
      rgbaString = hexToRgba(colorValue);
    } else if (isValidRgb(colorValue)) {
      rgbString = colorValue;
    } else if (isValidRgba(colorValue)) {
      rgbaString = colorValue;
    }

    if (rgbString) {
      result = parseRgbString(rgbString);
    }

    if (!result && rgbaString) {
      result = parseRgbString(rgbaString);
    }

    if (result) {
      return result;
    } else {
      // Default to black if parsing fails
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      };
    }
  } catch (error) {
    console.error(`Error parsing color value: ${colorValue}`, error);
    throw error;
  }
};
