import { darkenColor } from './darkenColor';
import { lightenColor } from './lightenColor';
import { blendColors } from './blendColors';
import { applyAlphaToColor } from './applyAlphaToColor';
import { toHexColor } from './toHexColor';
import { toRgbString } from './toRgbString';
import { HexDecimalObject } from './types/hex-decimal-object.interface';
import { hexToDecimal } from './hexToDecimals';

export class Color {
  private color: HexDecimalObject;

  constructor(color: string | HexDecimalObject) {
    if (typeof color === 'string') {
      // Parse the string into RGB (assume it's in the format '#RRGGBB' or '#RRGGBBAA')
      const hex = color.replace('#', '');
      this.color = {
        r: hexToDecimal(hex.substring(0, 2)),
        g: hexToDecimal(hex.substring(2, 4)),
        b: hexToDecimal(hex.substring(4, 6)),
      };
      if (hex.length === 8) {
        this.color.a = +(hexToDecimal(hex.substring(6, 8)) / 255).toFixed(2);
      }
    } else {
      this.color = color;
    }
  }

  darken(factor: number): Color {
    this.color = darkenColor(this.color, factor);
    return this;
  }

  lighten(factor: number): Color {
    this.color = lightenColor(this.color, factor);
    return this;
  }

  rgb(): string {
    return toRgbString(this.color);
  }

  hex(): string {
    return toHexColor(this.color);
  }

  invert(): string {
    const { r, g, b } = this.color;
    return toHexColor({ r: 255 - r, g: 255 - g, b: 255 - b });
  }

  alpha(factor: number): HexDecimalObject {
    this.color = applyAlphaToColor(this.color, factor);
    return this.color;
  }

  blend(factor: number, secondaryColor: HexDecimalObject): Color {
    this.color = blendColors(this.color, secondaryColor, factor);
    return this;
  }

  getColor(): HexDecimalObject {
    return this.color;
  }
}
