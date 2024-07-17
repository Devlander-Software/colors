import { HexObject } from './parseHex';
import { HexDecimalObject } from './types/hex-decimal-object.interface';

/**
 * Converts a hexadecimal string to a decimal number.
 * @param hex - The hexadecimal string to convert.
 * @returns The decimal number.
 *
 * @example
 * ```typescript
 * console.log(hexToDecimal('ff')); // 255
 * console.log(hexToDecimal('0a')); // 10
 * ```
 */
export const hexToDecimal = (hex: string): number => {
  return parseInt(hex, 16);
};

export interface RgbWithAHexObject extends Partial<HexObject >{
  r: string
  g: string,
  b: string,
  a?: string
}

/**
 * Converts a HexObject to a HexDecimalObject by converting each hex value to its decimal equivalent.
 * If the alpha (a) value is not provided, it returns an object without the alpha value.
 *
 * @param hexObj - The object containing hex values for r, g, b, and optionally a.
 * @returns An object containing decimal values for r, g, b, and optionally a.
 *
 * @example
 * ```typescript
 * const hexObj = { r: 'ff', g: '00', b: '00', a: '80' };
 * console.log(hexesToDecimals(hexObj)); // { r: 255, g: 0, b: 0, a: 0.5 }
 *
 * const hexObjWithoutA = { r: 'ff', g: '00', b: '00' };
 * console.log(hexesToDecimals(hexObjWithoutA)); // { r: 255, g: 0, b: 0 }
 * ```
 */
export const hexesToDecimals = ({ r, g, b, a }: RgbWithAHexObject): HexDecimalObject => {
  const result: HexDecimalObject = {
    r: hexToDecimal(r),
    g: hexToDecimal(g),
    b: hexToDecimal(b),
  };
  if (a !== undefined) {
    result.a = +(hexToDecimal(a) / 255).toFixed(2);
  }
  return result;
};
