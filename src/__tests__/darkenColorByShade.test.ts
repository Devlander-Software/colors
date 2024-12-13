import { darkenColorByShade } from "../darkenColorByShade";

describe("darkenColorByShade", () => {
  // Test valid HEX input




  // Test valid RGB input
  test("darkens an RGB color correctly", () => {
    expect(darkenColorByShade("rgb(255, 204, 0)", 50)).toBe("rgba(205, 154, 0, 1)");
  });

  // Test valid input edge cases
  test("darkens to black when amount exceeds RGB values", () => {
    expect(darkenColorByShade("rgb(10, 10, 10)", 20)).toBe("rgba(0, 0, 0, 1)");
  });

  test("darkens color minimally", () => {
    expect(darkenColorByShade("#ffcc00", 1)).toBe("rgba(254, 203, 0, 1)");
  });

  // Test edge cases with zero or negative amount
  test("returns the same color when amount is zero", () => {
    expect(darkenColorByShade("#ffcc00", 0)).toBe("rgba(255, 204, 0, 1)");
  });

});
