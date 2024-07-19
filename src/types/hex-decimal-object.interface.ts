import { Rgb } from './rgb.type'

export interface HexDecimalObject extends Rgb {
  r: number
  g: number
  b: number
  a?: number
}
