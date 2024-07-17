import { isValidRgb } from "../isValidRgb";

describe("isValidRgb", () => {
  test("validates correctly formatted RGB strings", () => {
    expect(isValidRgb("rgb(255, 0, 128)")).toBe(true);
    expect(isValidRgb("rgb(0, 128, 255)")).toBe(true);
    expect(isValidRgb("rgb(100, 100, 100)")).toBe(true);
  });

  test("handles edge cases", () => {
    expect(isValidRgb("rgb(0,0,0)")).toBe(true); // No spaces
    expect(isValidRgb("rgb(255, 255, 255)")).toBe(true); // Maximum values
    expect(isValidRgb("rgb(256, 255, 255)")).toBe(false); // Out of range
    expect(isValidRgb("rgb(255, 256, 255)")).toBe(false); // Out of range
    expect(isValidRgb("rgb(255, 255, 256)")).toBe(false); // Out of range
    expect(isValidRgb("rgb(-1, 0, 128)")).toBe(false); // Negative value
    expect(isValidRgb("rgb(255, 0, 128")).toBe(false); // Missing closing parenthesis
    expect(isValidRgb("rgba(255, 0, 128)")).toBe(false); // Wrong format
    expect(isValidRgb("rgb(255, 0)")).toBe(false); // Missing a component
    expect(isValidRgb("rgb(255, 0, 128, 0.5)")).toBe(false); // Extra alpha component
    expect(isValidRgb("rgb(255, 0, 128,)")).toBe(false); // Trailing comma
    expect(isValidRgb("rgb(255, 0, 128")).toBe(false); // Missing closing parenthesis
  });

  test("handles invalid input gracefully", () => {
    expect(isValidRgb("")).toBe(false); // Empty string
    expect(isValidRgb("rgb")).toBe(false); // Missing parentheses and numbers
    expect(isValidRgb("rgb()")).toBe(false); // Empty parentheses
    expect(isValidRgb("rgb(255, 0, 128, extra)")).toBe(false); // Non-numeric component
    expect(isValidRgb("rgb(255, 0, 128," + "\n" + ")")).toBe(false); // Newline between components
    expect(isValidRgb("rgb(255, 0, 128) extra")).toBe(false); // Extra characters after valid format
  });
});
