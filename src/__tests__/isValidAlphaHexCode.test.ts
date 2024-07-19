import { isValidAlphaHexCode } from "../isValidAlphaHexCode";

describe("isValidAlphaHexCode", () => {
  it("should return true for valid alpha hex codes", () => {
    const validHexCodes = [
      "#FFAABBCC",
      "#01234567",
      "#89ABCDEF",
      "#abcdef12",
      "#12345678",
    ];

    validHexCodes.forEach((hexCode) => {
      expect(isValidAlphaHexCode(hexCode)).toBe(true);
    });
  });

  it("should return false for invalid alpha hex codes", () => {
    const invalidHexCodes = [
      "#FFAABB", // Only 6 characters
      "#FFAABBCCDD", // 10 characters
      "FFAABBCC", // Missing #
      "#GGAABBCC", // Invalid characters
      "#FFAABBCCG", // Extra invalid character at end
    ];

    invalidHexCodes.forEach((hexCode) => {
      expect(isValidAlphaHexCode(hexCode)).toBe(false);
    });
  });
});
