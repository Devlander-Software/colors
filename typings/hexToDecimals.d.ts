import { HexObject } from "./parseHex";
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
export declare const hexToDecimal: (hex: string) => number;
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
export declare const hexesToDecimals: (params: ParamsForHexesToDecimals) => HexDecimalObject;
export {};
