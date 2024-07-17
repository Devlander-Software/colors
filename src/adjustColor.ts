import { applyAlphaToColor } from "./applyAlphaToColor";
import { canBeConvertedIntoColor } from "./canBeConvertedToColor";
import { hexToRgb } from "./hexToRgb";
import { hexToRgba } from "./hexToRgba";
import { lightenColor } from "./lightenColor";
import { darkenColor } from "./darkenColor";
import { toHexColor } from "./toHexColor";
import { toRgbString } from "./toRgbString";
import { blendColors } from "./blendColors";
import { parseRgbString } from "./parseRgbString";
import { HexObject, parseHex } from "./parseHex";
import { isValidHex } from "./isValidHex";
import { isValidRgb } from "./isValidRgb";
import { isValidRgba } from "./isValidRgba";
import { AlphaValue } from "./types/alpha-value.type";
import { ThemeType } from "./types/theme.type";
import { HexDecimalObject } from "./types/hex-decimal-object.interface";
import { hexesToDecimals, RgbWithAHexObject } from "./hexToDecimals";

export interface AdjustColorFunc {
  (
    colorValue: string,
    alphaValue: AlphaValue,
    mode: ThemeType,
    cssColorNames?: string[]
  ): string;
}

const defaultCssColorNames = ['transparent'];

export const log = (message: string): void => {
  if (typeof console !== 'undefined' && typeof console.log === 'function') {
    console.log(message);
  }
};

export const adjustColor: AdjustColorFunc = (
  colorValue: string,
  alphaValue: AlphaValue,
  mode: ThemeType,
  cssColorNames = defaultCssColorNames
): string => {
  try {
    if (cssColorNames.includes(colorValue)) return colorValue;

    if (alphaValue < 0 || alphaValue > 1) {
      log('Alpha value should be between 0.0 and 1.0. Returning default color.');
      return '#FF0000'; // Default color (Red in this case)
    }

    if (canBeConvertedIntoColor(colorValue)) {
      let color: HexDecimalObject | null = null;

      if (isValidHex(colorValue)) {
        const hexObject = parseHex(colorValue);
        color = hexesToDecimals(hexObject as RgbWithAHexObject);
      } else if (isValidRgb(colorValue)) {
        color = parseRgbString(colorValue);
      } else if (isValidRgba(colorValue)) {
        color = parseRgbString(colorValue);
      } else {
        throw new Error("Invalid color format");
      }

      if (!color) {
        throw new Error("Failed to parse color");
      }

      const brightnessFactor = mode === 'light' ? 0.2 : -0.2;
      color = mode === 'light' ? lightenColor(color, brightnessFactor) : darkenColor(color, brightnessFactor);

      const alphaScale = alphaValue;

      if (isValidHex(colorValue)) {
        const mixedColor = blendColors(color, { r: 255, g: 255, b: 255 }, alphaScale);
        return toHexColor(mixedColor);
      } else {
        const colorWithAlpha = applyAlphaToColor(color, alphaScale);
        return toRgbString(colorWithAlpha);
      }
    } else {
      log(`Failed to convert ${colorValue} into a color. Returning default color.`);
      return '#FF0000'; // Default color (Red in this case)
    }
  } catch (error) {
    if (error instanceof Error) {
      log(`Error adjusting color with value: ${colorValue}. Returning default color. Error: ${error.message}`);
    } else {
      log(`Error adjusting color with value: ${colorValue}. Returning default color. Unknown error.`);
    }
    return '#FF0000'; // Default color (Red in this case)
  }
};
