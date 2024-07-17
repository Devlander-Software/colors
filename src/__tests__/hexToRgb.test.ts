import { hexToRgb } from "../hexToRgb";


const uniqueHexColors = [
  "#B20A28",
  "#009655",
  "#D5EDD5",
  "#008149",
  "#361849",
  "#51246D",
  "#1B88BF",
  "#ffffff",
  "#65676B",
  "#222220",
  "#4A4A4A",
  "#828282",
  "#F4F5E6",
  "#ED6322",
  "#0063AD",
  "#000000",
  "#4BB543",
  "#E07116",
  "#fcfcfc",
  "#1E1E1E",
  "#E1E1E1",
  "#0C0C0C",
];

describe("hexToRgb", () => {
  uniqueHexColors.forEach((color) => {
    test(`converts hex color ${color} to rgb`, () => {
      const rgb = hexToRgb(color);
      expect(rgb).toMatch(/rgb\(\d+, \d+, \d+\)/);
    });
  });

  test("handles invalid hex color gracefully", () => {
    expect(() => hexToRgb("xyz")).toThrow("Invalid hex color");
  });

  test("handles hex color with alpha channel", () => {
    const hexWithAlpha = "#B20A28FF";
    const rgbWithAlpha = hexToRgb(hexWithAlpha);
    // this should round up
    expect(rgbWithAlpha).toBe("rgba(178, 10, 40, 0.7)");
  });
});
