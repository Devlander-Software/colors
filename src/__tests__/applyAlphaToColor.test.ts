import { applyAlphaToColor } from "../applyAlphaToColor";

describe('applyAlphaToColor', () => {
    test('adds alpha value to RGB color object', () => {
      expect(applyAlphaToColor({ r: 255, g: 0, b: 0 }, 0.5)).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
      expect(applyAlphaToColor({ r: 0, g: 255, b: 0 }, 0.75)).toEqual({ r: 0, g: 255, b: 0, a: 0.75 });
      expect(applyAlphaToColor({ r: 0, g: 0, b: 255 }, 1)).toEqual({ r: 0, g: 0, b: 255, a: 1 });
    });
  
    test('replaces existing alpha value with new alpha value', () => {
      expect(applyAlphaToColor({ r: 255, g: 0, b: 0, a: 0.3 }, 0.8)).toEqual({ r: 255, g: 0, b: 0, a: 0.8 });
      expect(applyAlphaToColor({ r: 0, g: 255, b: 0, a: 0.4 }, 0.9)).toEqual({ r: 0, g: 255, b: 0, a: 0.9 });
    });
  
    test('handles edge cases for alpha value', () => {
      expect(applyAlphaToColor({ r: 128, g: 128, b: 128 }, 0)).toEqual({ r: 128, g: 128, b: 128, a: 0 });
      expect(applyAlphaToColor({ r: 128, g: 128, b: 128 }, 1)).toEqual({ r: 128, g: 128, b: 128, a: 1 });
      expect(applyAlphaToColor({ r: 128, g: 128, b: 128 }, 0.1)).toEqual({ r: 128, g: 128, b: 128, a: 0.1 });
    });
  });
  