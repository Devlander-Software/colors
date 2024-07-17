import { isNumeric } from '@devlander/utils';
import { hexToDecimal } from './hexToDecimals';
import { isValidHex } from './isValidHex';
import { parseHex } from './parseHex';
import { toRgbString } from './toRgbString';

/**
 * Converts a CSS hex color value to an RGB or RGBA color value.
 * @param hex - The hex value to convert. ('123456', '#123456', '123', '#123')
 * @param alpha - An optional alpha value to apply. ('0.5', '0.25', 0.5, 0.25)
 * @returns An RGB or RGBA color value. ('rgb(11, 22, 33)', 'rgba(11, 22, 33, 0.5)')
 */
export function hexToRgba(hex: string, alpha: string | number = 1): string {
  try {
    if (!isValidHex(hex)) {
      throw new Error('Invalid hex color');
    }

    const hashlessHex = hex.replace(/^#/, '');
    const { r, g, b } = parseHex(hashlessHex);

    // Check if r, g, b are valid numbers
    if (!isNumeric(r) || !isNumeric(g) || !isNumeric(b)) {
      throw new TypeError('Invalid color components');
    }

    let alphaValue: number;

    // Check alpha value
    if (typeof alpha === 'number') {
      if (alpha < 0 || alpha > 1) {
        throw new Error('Invalid alpha value');
      }
      alphaValue = alpha;
    } else if (isNumeric(alpha)) {
      alphaValue = parseFloat(alpha);
      if (alphaValue < 0 || alphaValue > 1) {
        throw new Error('Invalid alpha value');
      }
    } else {
      alphaValue = 1;
    }

    return toRgbString({
      r: hexToDecimal(r),
      g: hexToDecimal(g),
      b: hexToDecimal(b),
      a: alphaValue
    });

  } catch (error: any) {
    console.log(`Error converting hex to RGBA: ${error.toString()}`);
    return toRgbString({
      r: hexToDecimal('FF'),
      g: hexToDecimal('00'),
      b: hexToDecimal('00'),
      a: 1
    });
  }
}
