import { isValidHex } from "../isValidHex";

describe("isValidHex", () => {
  test("should return true for valid 6-digit hexadecimal color code with #", () => {
    expect(isValidHex("#ff0000")).toBe(true);
  });

  test("should return true for valid 6-digit hexadecimal color code without #", () => {
    expect(isValidHex("ff0000")).toBe(true);
  });

  test("should return true for valid 3-digit hexadecimal color code with #", () => {
    expect(isValidHex("#FFF")).toBe(true);
  });

  test("should return true for valid 3-digit hexadecimal color code without #", () => {
    expect(isValidHex("FFF")).toBe(true);
  });

  test("should return true for valid 8-digit hexadecimal color code with #", () => {
    expect(isValidHex("#12345678")).toBe(true);
  });

  test("should return true for valid 8-digit hexadecimal color code without #", () => {
    expect(isValidHex("12345678")).toBe(true);
  });

  test("should return false for 5-digit hexadecimal color code", () => {
    expect(isValidHex("#12345")).toBe(false);
  });

  test("should return false for invalid characters in hexadecimal color code", () => {
    expect(isValidHex("#gggggg")).toBe(false);
  });

  test("should return false for null input", () => {
    expect(isValidHex(null as any)).toBe(false);
  });

  test("should return false for numeric input", () => {
    expect(isValidHex(123 as any)).toBe(false);
  });

  test("should return false for non-hexadecimal string", () => {
    expect(isValidHex("hello")).toBe(false);
  });

  test("should return false for empty string", () => {
    expect(isValidHex("")).toBe(false);
  });

  test("should return false for strings with invalid length", () => {
    expect(isValidHex("#1234")).toBe(false);
    expect(isValidHex("#1234567")).toBe(false);
    expect(isValidHex("#123456789")).toBe(false);
  });
});
