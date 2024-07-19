import { isRgbaOutOfRange } from "../isRgbaOutOfRange";
import { HexDecimalObject } from "../types/hex-decimal-object.interface";

describe("isRgbaOutOfRange", () => {
  it("should return false for valid RGBA values", () => {
    const validColors: HexDecimalObject[] = [
      { r: 0, g: 0, b: 0, a: 0 },
      { r: 255, g: 255, b: 255, a: 1 },
      { r: 123, g: 123, b: 123, a: 0.5 },
      { r: 200, g: 100, b: 50 },
    ];

    validColors.forEach((color) => {
      expect(isRgbaOutOfRange(color)).toBe(false);
    });
  });

  it("should return true for invalid R values", () => {
    const invalidColors: HexDecimalObject[] = [
      { r: -1, g: 0, b: 0, a: 0 },
      { r: 256, g: 0, b: 0, a: 0 },
    ];

    invalidColors.forEach((color) => {
      expect(isRgbaOutOfRange(color)).toBe(true);
    });
  });

  it("should return true for invalid G values", () => {
    const invalidColors: HexDecimalObject[] = [
      { r: 0, g: -1, b: 0, a: 0 },
      { r: 0, g: 256, b: 0, a: 0 },
    ];

    invalidColors.forEach((color) => {
      expect(isRgbaOutOfRange(color)).toBe(true);
    });
  });

  it("should return true for invalid B values", () => {
    const invalidColors: HexDecimalObject[] = [
      { r: 0, g: 0, b: -1, a: 0 },
      { r: 0, g: 0, b: 256, a: 0 },
    ];

    invalidColors.forEach((color) => {
      expect(isRgbaOutOfRange(color)).toBe(true);
    });
  });

  it("should return true for invalid A values", () => {
    const invalidColors: HexDecimalObject[] = [
      { r: 0, g: 0, b: 0, a: -0.1 },
      { r: 0, g: 0, b: 0, a: 1.1 },
    ];

    invalidColors.forEach((color) => {
      expect(isRgbaOutOfRange(color)).toBe(true);
    });
  });

  it("should return false for valid colors without alpha", () => {
    const validColors: HexDecimalObject[] = [
      { r: 100, g: 150, b: 200 },
      { r: 0, g: 0, b: 0 },
      { r: 255, g: 255, b: 255 },
    ];

    validColors.forEach((color) => {
      expect(isRgbaOutOfRange(color)).toBe(false);
    });
  });
});
