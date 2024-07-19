import { isObject, isString } from "@devlander/utils";
import { HexObject, parseHex } from "./parseHex";
import { HexDecimalObject } from "./types/hex-decimal-object.interface";

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

export interface RgbWithAHexObject extends Partial<HexObject> {
  r: string;
  g: string;
  b: string;
  a?: string;
}

type ParamsForHexesToDecimals = string | RgbWithAHexObject;

/**
 * Converts a HexObject or hex string to a HexDecimalObject by converting each hex value to its decimal equivalent.
 * If the alpha (a) value is not provided, it defaults to 1.
 *
 * @param params - The object containing hex values for r, g, b, and optionally a, or a hex string.
 * @returns An object containing decimal values for r, g, b, and optionally a.
 *
 * @example
 * ```typescript
 * const hexObj = { r: 'ff', g: '00', b: '00', a: '80' };
 * console.log(hexesToDecimals(hexObj)); // { r: 255, g: 0, b: 0, a: 0.5 }
 *
 * const hexString = '#ff000080';
 * console.log(hexesToDecimals(hexString)); // { r: 255, g: 0, b: 0, a: 0.5 }
 *
 * const shortHexString = '#f008';
 * console.log(hexesToDecimals(shortHexString)); // { r: 255, g: 0, b: 0, a: 0.53 }
 * ```
 */
export const hexesToDecimals = (
  params: ParamsForHexesToDecimals,
): HexDecimalObject => {
  let hexObject: RgbWithAHexObject;

  if (isObject(params) && !isString(params)) {
    hexObject = {
      r: params.r,
      g: params.g,
      b: params.b,
      a: "a" in params ? params.a : "ff",
    };
  } else {
    hexObject = parseHex(params as string);
  }

  const { r, g, b, a } = hexObject;
  const result: HexDecimalObject = {
    r: hexToDecimal(r),
    g: hexToDecimal(g),
    b: hexToDecimal(b),
  };

  if (a !== undefined && a !== "ff") {
    result.a = +(hexToDecimal(a) / 255).toFixed(2);
  } else {
    result.a = 1;
  }

  return validateHexDecimalObject(result);
};

/**
 * Validates a HexDecimalObject by checking for NaN values and changing them to 1.
 * @param obj - The HexDecimalObject to validate.
 * @returns The validated HexDecimalObject.
 */
const validateHexDecimalObject = (obj: HexDecimalObject): HexDecimalObject => {
  const keys: (keyof HexDecimalObject)[] = ["r", "g", "b", "a"];
  keys.forEach((key) => {
    if (obj[key] !== undefined && isNaN(obj[key] as number)) {
      obj[key] = 1;
    }
  });
  return obj;
};
