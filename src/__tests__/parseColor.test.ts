import { parseColor } from "../parseColor";

describe('parseColor', () => {
  test('should return parsed RGB object for valid hex color', () => {
    const result = parseColor('#ff0000');
    expect(result).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('should return parsed RGBA object for valid hex color with alpha', () => {
    const result = parseColor('#ff000080');
    expect(result).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
  });

  test('should return parsed RGB object for valid rgb color', () => {
    const result = parseColor('rgb(255, 0, 0)');
    expect(result).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('should return parsed RGBA object for valid rgba color', () => {
    const result = parseColor('rgba(255, 0, 0, 0.5)');
    expect(result).toEqual({ r: 255, g: 0, b: 0, a: 0.5 });
  });

  test('should throw error for invalid color format', () => {
    expect(() => parseColor('invalid-color')).toThrow('Invalid color format');
  });

  test('should throw error and log when parsing fails', () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => parseColor('#gggggg')).toThrow();
    expect(consoleErrorMock).toHaveBeenCalled();

    consoleErrorMock.mockRestore();
  });
});
