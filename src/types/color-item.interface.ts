import { Rgb } from './rgb.type'

export interface Rgba {
  r: number
  g: number
  b: number
  a: number
}

export interface ColorItem {
  rgb: Rgb
  cmyk?: string
  rgba?: Rgba
  hex?: string
  hexAlpha?: string
}
