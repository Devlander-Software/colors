import { adjustColor } from "../adjustColor";

describe("adjustColor", () => {
  it("should return the input color if it is a valid CSS color name", () => {
    const result = adjustColor("transparent", 0.5, "light");
    expect(result).toBe("transparent");
  });

  it("should return default color is out of range", () => {
    const result = adjustColor("#FFFFFF", -1, "light");
    expect(result).toBe("#FF0000");
  });

  it("should lighten the color in light mode", () => {
    const result = adjustColor("#000000", 0.5, "light");
    expect(result).toMatch(/^#[0-9A-F]{6}$/i); // Regex to match hex color
  });

  it("should darken the color in dark mode", () => {
    const result = adjustColor("#FFFFFF", 0.5, "dark");
    expect(result).toMatch(/^#[0-9A-F]{6}$/i); // Regex to match hex color
  });

  it("should return default color for invalid color format", () => {
    const result = adjustColor("invalidColor", 0.5, "light");
    expect(result).toBe("#FF0000");
  });

  



  it("should handle exceptions and return default color", () => {
    jest.spyOn(console, "log").mockImplementation(() => {}); // Mock console.log
    const result = adjustColor("#12345G", 0.5, "light");
    expect(result).toBe("#FF0000");
  
    (console.log as jest.Mock).mockRestore();
  });
});
