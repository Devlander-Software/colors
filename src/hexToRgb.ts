// @devlander/utils src/hexToRgba
import { hexToRgba } from './hexToRgba'
import { isValidHex } from './isValidHex'
import { toRgbString } from './toRgbString'
/**
 * Converts a hexadecimal color code to an RGB or RGBA color string.
 * @param hex - The hexadecimal color code to convert.
 * @returns The RGB or RGBA color string.
 *
 * @example
 * ```typescript
 * console.log(hexToRgb('#ff0000')); // 'rgb(255, 0, 0)'
 * console.log(hexToRgb('#ff000080')); // 'rgba(255, 0, 0, 0.5)'
 * ```
 */
export const hexToRgb = (hex: string): string => {
  if (!isValidHex(hex)) {
    throw new Error('Invalid hex color')
  }
  hex = hex.charAt(0) === '#' ? hex.slice(1) : hex
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  if (hex.length === 8) {
    const a = ((bigint >> 24) & 255) / 255
    return hexToRgba(hex, a)
  } 
  
  return toRgbString({ r, g, b });

}