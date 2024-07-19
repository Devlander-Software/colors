import { canBeConvertedIntoColor } from "./canBeConvertedToColor";
import { hexesToDecimals, RgbWithAHexObject } from "./hexToDecimals";
import { isValidHex } from "./isValidHex";
import { isValidRgb } from "./isValidRgb";
import { isValidRgba } from "./isValidRgba";
import { parseRgbString } from "./parseRgbString";
import { parseHex } from "./parseHex";
import { HexDecimalObject } from "./types/hex-decimal-object.interface";
import { isRgbaOutOfRange } from "./isRgbaOutOfRange";

export type ColorFormatType = "hex" | "rgba" | "rgb" | "alphaHex" | undefined;

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
    let result: HexDecimalObject | null = null;

    if (isValidHex(colorValue)) {
      const hexObject = parseHex(colorValue);
      result = hexesToDecimals(hexObject as RgbWithAHexObject);
    } else if (isValidRgb(colorValue)) {
      const rgbObject = parseRgbString(colorValue);
      result = rgbObject;
    } else if (isValidRgba(colorValue)) {
      const rgbaObject = parseRgbString(colorValue);
      result = rgbaObject;
    }

    if (result) {
      if (!isRgbaOutOfRange(result)) {
        return result;
      }
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      };
    } else {
      // Default to black if parsing fails
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      };
    }
  } catch (error) {
    console.error(`Error parsing color value: ${colorValue}`, error);
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    };
  }
};
