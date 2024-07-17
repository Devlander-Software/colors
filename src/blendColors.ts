import { HexDecimalObject } from "./types/hex-decimal-object.interface";

export const blendColors = (
    color1: HexDecimalObject,
    color2: { r: number; g: number; b: number },
    alphaScale: number,
  ): HexDecimalObject=> {
    return {
      r: Math.round(color1.r * alphaScale + color2.r * (1 - alphaScale)),
      g: Math.round(color1.g * alphaScale + color2.g * (1 - alphaScale)),
      b: Math.round(color1.b * alphaScale + color2.b * (1 - alphaScale)),
    }
  }
  