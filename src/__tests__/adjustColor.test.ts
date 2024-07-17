import { adjustColor } from "../adjustColor";
import { AlphaValue } from "../types/alpha-value.type";

describe('adjustColor', () => {
  it('should return the input color if it is a valid CSS color name', () => {
    const result = adjustColor('transparent', 0.5 as AlphaValue, 'light');
    expect(result).toBe('transparent');
  });

  it('should return default color if alphaValue is out of range', () => {
    const result = adjustColor('#FFFFFF', -1 as AlphaValue, 'light');
    expect(result).toBe('#FF0000');
  });

  it('should lighten the color in light mode', () => {
    const result = adjustColor('#000000', 0.5 as AlphaValue, 'light');
    expect(result).toMatch(/^#[0-9A-F]{6}$/i); // Regex to match hex color
  });

  it('should darken the color in dark mode', () => {
    const result = adjustColor('#FFFFFF', 0.5 as AlphaValue, 'dark');
    expect(result).toMatch(/^#[0-9A-F]{6}$/i); // Regex to match hex color
  });

  it('should return default color for invalid color format', () => {
    const result = adjustColor('invalidColor', 0.5 as AlphaValue, 'light');
    expect(result).toBe('#FF0000');
  });

  it('should apply alpha to RGB color', () => {
    const result = adjustColor('rgb(0, 0, 0)', 0.5 as AlphaValue, 'light');
    expect(result).toMatch(/^rgba\(\d{1,3}, \d{1,3}, \d{1,3}, 0(\.\d+)?\)$/i); // Regex to match RGBA color
  });

  it('should apply alpha to RGBA color', () => {
    const result = adjustColor('rgba(0, 0, 0, 1)', 0.5 as AlphaValue, 'light');
    expect(result).toMatch(/^rgba\(\d{1,3}, \d{1,3}, \d{1,3}, 0(\.\d+)?\)$/i); // Regex to match RGBA color
  });

  it('should handle exceptions and return default color', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log
    const result = adjustColor('#12345G', 0.5 as AlphaValue, 'light');
    expect(result).toBe('#FF0000');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Error adjusting color with value'));
    (console.log as jest.Mock).mockRestore();
  });
});
