import { isValidRgba } from "../isValidRgba";

describe("isValidRgba", () => {
 

  test("handles edge cases", () => {
    expect(isValidRgba("rgba(256, 255, 255, 0.5)")).toBe(false); // Out of range RGB
    expect(isValidRgba("rgba(255, 256, 255, 0.5)")).toBe(false); // Out of range RGB
    expect(isValidRgba("rgba(255, 255, 256, 0.5)")).toBe(false); // Out of range RGB
    expect(isValidRgba("rgba(-1, 0, 128, 0.5)")).toBe(false); // Negative value
    expect(isValidRgba("rgba(255, 0, 128")).toBe(false); // Missing closing parenthesis
    expect(isValidRgba("rgba(255, 0, 128,")).toBe(false); // Trailing comma
    expect(isValidRgba("rgba(255, 0, 128, extra)")).toBe(false); // Non-numeric alpha
    expect(isValidRgba("rgba(255, 0, 128, 0.5, extra)")).toBe(false); // Extra alpha component
    expect(isValidRgba("rgba(255, 0, 128, 0.5")).toBe(false); // Missing closing parenthesis
    expect(isValidRgba("rgba(255, 0, 128 extra")).toBe(false); // Extra characters
    expect(isValidRgba("rgba(255, 0, 128) extra")).toBe(false); // Extra characters after valid format
  });

  test("handles invalid input gracefully", () => {
    expect(isValidRgba("")).toBe(false); // Empty string
    expect(isValidRgba("rgba")).toBe(false); // Missing parentheses and numbers
    expect(isValidRgba("rgba()")).toBe(false); // Empty parentheses
    expect(isValidRgba("rgba(255, 0, 128, extra)")).toBe(false); // Non-numeric component
    expect(isValidRgba("rgba(255, 0, 128," + "\n" + ")")).toBe(false); // Newline between components
  });
});
