/**
 * Represents an RGB array containing red, green, and blue values.
 */
type RGBArray = [number, number, number]

/**
 * Darkens a given color (HEX or RGB) by reducing its brightness.
 *
 * @param color - The input color in HEX format (e.g., "#ffcc00") or RGB format (e.g., "rgb(255, 204, 0)").
 * @param amount - The amount to darken the color by. Must be a positive number.
 * @returns The darkened color in RGBA format (e.g., "rgba(205, 152, 0, 1)").
 * @throws If the color format is invalid or if amount is not a valid number or negative.
 */
export const darkenColorByShade = (color: string, amount: number): string => {
  const isHexColor = (color: string): boolean =>
    /^#([A-Fa-f0-9]{3}){1,2}$/.test(color)

  const hexToRgb = (hex: string): RGBArray => {
    if (!isHexColor(hex)) {
      throw new Error('Invalid HEX format')
    }

    let c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    const numericValue = parseInt(c.join(''), 16)
    return [
      (numericValue >> 16) & 255,
      (numericValue >> 8) & 255,
      numericValue & 255,
    ]
  }

  const getRGBValues = (rgb: string): RGBArray => {
    const match = rgb.match(/\d+/g)
    if (!match || match.length < 3) {
      throw new Error('Invalid RGB format')
    }
    return [
      parseInt(match[0], 10),
      parseInt(match[1], 10),
      parseInt(match[2], 10),
    ]
  }

  const applyShade = (rgbArray: RGBArray, amount: number): string => {
    const [r, g, b] = rgbArray.map((value) => Math.max(0, value - amount))
    return `rgba(${r}, ${g}, ${b}, 1)`
  }

  if (!color || typeof amount !== 'number') {
    throw new Error('Both color and amount are required')
  }

  if (amount < 0) {
    throw new Error('Amount must be a positive number')
  }

  const rgbValues = isHexColor(color) ? hexToRgb(color) : getRGBValues(color)
  return applyShade(rgbValues, amount)
}
