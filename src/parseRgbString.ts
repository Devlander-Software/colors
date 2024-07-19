import { isValidRgb } from './isValidRgb'
import { isValidRgba } from './isValidRgba'
import { HexDecimalObject } from './types/hex-decimal-object.interface'

/**
 * Parses an RGB or RGBA string and returns an object with the red, green, blue, and optionally alpha components.
 *
 * @param {string} color - The RGB or RGBA string to parse (e.g., "rgb(255, 255, 255)", "rgba(255, 255, 255, 0.5)", "rgb(100%, 0%, 0%)", or "rgba(100%, 0%, 0%, 0.5)").
 * @returns {HexDecimalObject | null} The RGB components or null if the input is invalid.
 */
export const parseRgbString = (color: string): HexDecimalObject | null => {
  try {
    let result: RegExpExecArray | null = null

    const percentageToDecimal = (percent: string): number => {
      return Math.round(parseFloat(percent) * 2.55) // Convert percentage to 0-255 range
    }

    if (isValidRgb(color)) {
      const rgbRegex =
        /^rgb\(\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*\)$/
      result = rgbRegex.exec(color)
    } else if (isValidRgba(color)) {
      const rgbaRegex =
        /^rgba\(\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*,\s*(0|1|0?\.\d+)\s*\)$/
      result = rgbaRegex.exec(color)
    }

    if (result) {
      const [r, g, b, a] = result
        .slice(1)
        .map((value) =>
          value.endsWith('%') ? percentageToDecimal(value) : Number(value),
        )
      const colorObject: HexDecimalObject = { r, g, b }
      if (a !== undefined) {
        colorObject.a = Number(a) // Leave alpha as it is
      }
      return colorObject
    }

    return null
  } catch (error) {
    console.error('Error parsing RGB string:', error)
    return null
  }
}
