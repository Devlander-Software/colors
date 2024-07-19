import { cssColors } from "../cssColors";
import { toHexColor } from "../toHexColor";
import { ColorNames } from "../types/color-names";

describe("toHexColor", () => {
  Object.keys(cssColors).forEach((colorName) => {
    const color = cssColors[colorName as ColorNames];
    test(`converts ${colorName} RGB to hex color string`, () => {
      expect(toHexColor(color.rgb)).toBe(color.hex);
    });
  });

  test("converts RGB color to hex color string", () => {
    expect(toHexColor({ r: 255, g: 0, b: 0 })).toBe("#FF0000");
    expect(toHexColor({ r: 0, g: 255, b: 0 })).toBe("#00FF00");
    expect(toHexColor({ r: 0, g: 0, b: 255 })).toBe("#0000FF");
  });

  test("pads single digit hex values with zero", () => {
    expect(toHexColor({ r: 15, g: 15, b: 15 })).toBe("#0F0F0F");
    expect(toHexColor({ r: 1, g: 1, b: 1 })).toBe("#010101");
    expect(toHexColor({ r: 255, g: 255, b: 255 })).toBe("#FFFFFF");
  });

  test("handles mixed value ranges correctly", () => {
    expect(toHexColor({ r: 128, g: 64, b: 32 })).toBe("#804020");
    expect(toHexColor({ r: 10, g: 100, b: 200 })).toBe("#0A64C8");
  });
});
