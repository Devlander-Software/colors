import { Color } from "../color";
import { HexDecimalObject } from "../types/hex-decimal-object.interface";

describe('Color class', () => {
  test('should initialize with a hex string and convert to RGB', () => {
    const color = new Color('#ff6464');
    expect(color.getColor()).toEqual({ r: 255, g: 100, b: 100 });
  });

  test('should initialize with an RGB object', () => {
    const color = new Color({ r: 255, g: 100, b: 100 });
    expect(color.getColor()).toEqual({ r: 255, g: 100, b: 100 });
  });

  test('should darken the color', () => {
    const color = new Color('#ff6464');
    color.darken(0.1);
    expect(color.getColor()).toEqual({ r: 230, g: 90, b: 90 });
  });

  test('should lighten the color', () => {
    const color = new Color('#ff6464');
    color.lighten(0.1);
    expect(color.getColor()).toEqual({ r: 255, g: 116, b: 116 });
  });

  test('should apply alpha to the color', () => {
    const color = new Color('#ff6464');
    color.alpha(0.5);
    expect(color.getColor()).toEqual({ r: 255, g: 100, b: 100, a: 0.5 });
  });

  test('should blend the color with another color', () => {
    const color = new Color('#ff6464');
    const secondaryColor: HexDecimalObject = { r: 0, g: 0, b: 255 };
    color.blend(0.5, secondaryColor);
    expect(color.getColor()).toEqual({ r: 128, g: 50, b: 178 });
  });

  test('should return the color in RGB string format', () => {
    const color = new Color('#ff6464');
    expect(color.rgb()).toBe('rgb(255, 100, 100)');
  });

  test('should return the color in hex string format', () => {
    const color = new Color('#ff6464');
    expect(color.hex()).toBe('#FF6464');
  });
});
