import { isRgbaOutOfRange } from './isRgbaOutOfRange'
import { HexDecimalObject } from './types/hex-decimal-object.interface'

/**
 * Checks if the provided string is a valid RGBA color format.
 * @param rgba The string to validate as RGBA (e.g., "rgba(255,0,128,0.5)" or "rgba(255%, 0%, 50%, 0.5)").
 * @returns True if the string is a valid RGBA format, false otherwise.
 */
export const isValidRgba = (rgba: string): boolean => {
  try {
    // Regex to match RGBA format, including percentages
    const rgbaRegex =
      /^rgba?\(\s*((?:\d{1,3}%?\s*,\s*){2})(?:\d{1,3}%?\s*,\s*)\d{1,3}%?\s*(?:,\s*([+-]?\d*\.?\d+)\s*)?\)$/
    const match = rgba.match(rgbaRegex)

    if (!match) return false

    // Extract RGBA values
    const parseValue = (value: string) => {
      const numValue = Number(value.replace('%', ''))
      return value.includes('%') ? numValue * 2.55 : numValue // Convert percentage to 0-255 range
    }

    const r = parseValue(match[1].trim())
    const g = parseValue(match[2].trim())
    const b = parseValue(match[3].trim())
    const a = match[4] !== undefined ? Number(match[4]) : undefined

    const rgbaObj: HexDecimalObject = { r, g, b, a }

    return !isRgbaOutOfRange(rgbaObj)
  } catch (error) {
    console.error(`Error validating RGBA string: ${rgba}`, error)
    return false
  }
}
