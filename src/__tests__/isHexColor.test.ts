import { isHexColor } from "../isHexColor";

describe("isHexColor", () => {
  test("should return true for valid 6-digit hexadecimal color code", () => {
    expect(isHexColor("#ff0000")).toBe(true);
  });

  test("should return true for valid 3-digit hexadecimal color code", () => {
    expect(isHexColor("#FFF")).toBe(true);
  });

  test("should return true for valid 8-digit hexadecimal color code", () => {
    expect(isHexColor("#12345678")).toBe(true);
  });

  test("should return true for valid 6-digit hexadecimal color code without #", () => {
    expect(isHexColor("ff0000")).toBe(true);
  });

  test("should return false for 5-digit hexadecimal color code", () => {
    expect(isHexColor("#12345")).toBe(false);
  });

  test("should return false for invalid characters in hexadecimal color code", () => {
    expect(isHexColor("#gggggg")).toBe(false);
  });

  test("should return false for null input", () => {
    expect(isHexColor(null as any)).toBe(false);
  });

  test("should return false for numeric input", () => {
    expect(isHexColor(123 as any)).toBe(false);
  });

  test("should return false for non-hexadecimal string", () => {
    expect(isHexColor("hello")).toBe(false);
  });

  test("should return true for valid 4-digit hexadecimal color code", () => {
    expect(isHexColor("#1a2B")).toBe(true);
  });

  test("should return false for empty string", () => {
    expect(isHexColor("")).toBe(false);
  });

  test("should return false for strings with invalid length", () => {
    expect(isHexColor("#1234")).toBe(true); // This is actually a valid test case for 4-digit hex
    expect(isHexColor("#123")).toBe(true); // This is a valid 3-digit hex
    expect(isHexColor("#12")).toBe(false);
    expect(isHexColor("#123456789")).toBe(false);
  });
});
