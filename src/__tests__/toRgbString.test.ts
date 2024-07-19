import { toRgbString } from "../toRgbString";
import { HexDecimalObject } from "../types/hex-decimal-object.interface";

describe("toRgbString", () => {
  test("should convert a color object without alpha to an RGB string", () => {
    const color: HexDecimalObject = { r: 255, g: 0, b: 0 };
    const result = toRgbString(color);
    expect(result).toBe("rgb(255, 0, 0)");
  });

  test("should convert a color object with alpha to an RGBA string", () => {
    const color: HexDecimalObject = { r: 255, g: 0, b: 0, a: 0.5 };
    const result = toRgbString(color);
    expect(result).toBe("rgba(255, 0, 0, 0.5)");
  });

  test("should round the alpha value to one decimal place", () => {
    const color: HexDecimalObject = { r: 255, g: 0, b: 0, a: 0.123 };
    const result = toRgbString(color);
    expect(result).toBe("rgba(255, 0, 0, 0.1)");
  });

  test("should round the alpha value correctly for different inputs", () => {
    const color1: HexDecimalObject = { r: 255, g: 0, b: 0, a: 0.666 };
    const color2: HexDecimalObject = { r: 0, g: 255, b: 0, a: 0.999 };
    const color3: HexDecimalObject = { r: 0, g: 0, b: 255, a: 0.333 };

    expect(toRgbString(color1)).toBe("rgba(255, 0, 0, 0.7)");
    expect(toRgbString(color2)).toBe("rgba(0, 255, 0, 1)");
    expect(toRgbString(color3)).toBe("rgba(0, 0, 255, 0.3)");
  });

  test("should handle full transparency", () => {
    const color: HexDecimalObject = { r: 255, g: 0, b: 0, a: 0 };
    const result = toRgbString(color);
    expect(result).toBe("rgba(255, 0, 0, 0)");
  });

  test("should handle full opacity", () => {
    const color: HexDecimalObject = { r: 255, g: 0, b: 0, a: 1 };
    const result = toRgbString(color);
    expect(result).toBe("rgba(255, 0, 0, 1)");
  });
});
