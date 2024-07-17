import { parseRgbString } from "../parseRgbString";

describe('parseRgbString', () => {
  it('should return parsed RGB object for valid RGB string', () => {
    const result = parseRgbString('rgb(255, 255, 255)');
    expect(result).toEqual({ r: 255, g: 255, b: 255 });
  });

  it('should return parsed RGBA object for valid RGBA string', () => {
    const result = parseRgbString('rgba(255, 255, 255, 0.5)');
    expect(result).toEqual({ r: 255, g: 255, b: 255, a: 0.5 });
  });

  it('should return null for invalid RGB string', () => {
    const result = parseRgbString('rgb(255, 255, 255, 1)');
    expect(result).toBeNull();
  });

  it('should return null for invalid RGBA string', () => {
    const result = parseRgbString('rgba(255, 255, 255)');
    expect(result).toBeNull();
  });

  it('should return null for completely invalid string', () => {
    const result = parseRgbString('invalid string');
    expect(result).toBeNull();
  });

  it('should handle errors and return null', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Mock console.error

    const result = parseRgbString('rgb(255, 255, not-a-number)');
    expect(result).toBeNull();
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('Error parsing RGB string'));

    (console.error as jest.Mock).mockRestore();
  });
});
