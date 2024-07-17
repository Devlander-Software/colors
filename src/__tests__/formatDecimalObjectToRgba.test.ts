import { formatDecimalObjectToRgba } from '../formatDecimalObjectToRgba';
import { HexDecimalObject } from '../types/hex-decimal-object.interface';

describe('formatDecimalObjectToRgba', () => {
  test('formats HexDecimalObject to RGBA string with provided alpha parameter', () => {
    const color: HexDecimalObject = { r: 255, g: 255, b: 255, a: 1 };
    expect(formatDecimalObjectToRgba(color, '0.5')).toBe('rgba(255, 255, 255, 0.5)');
  });

  test('formats HexDecimalObject to RGB string when no alpha is provided', () => {
    const color: HexDecimalObject = { r: 255, g: 255, b: 255 };
    expect(formatDecimalObjectToRgba(color)).toBe('rgb(255, 255, 255)');
  });

  test('formats HexDecimalObject to RGBA string with existing alpha value', () => {
    const color: HexDecimalObject = { r: 255, g: 99, b: 71, a: 0.645343434232323 };
    expect(formatDecimalObjectToRgba(color)).toBe('rgba(255, 99, 71, 0.6)');
  });

  test('formats HexDecimalObject to RGBA string with provided numeric alpha parameter', () => {
    const color: HexDecimalObject = { r: 255, g: 99, b: 71, a: 1 };
    expect(formatDecimalObjectToRgba(color, '0.3')).toBe('rgba(255, 99, 71, 0.3)');
  });

  test('handles invalid alpha parameter gracefully', () => {
    const color: HexDecimalObject = { r: 255, g: 255, b: 255, a: 1 };
    expect(formatDecimalObjectToRgba(color, 'invalid')).toBe('rgba(255, 255, 255, 1)');
  });

  test('returns empty string on error', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Mock console.error
    const invalidColor = null as unknown as HexDecimalObject; // Force an error
    expect(formatDecimalObjectToRgba(invalidColor)).toBe('');
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('Error formatting decimal object to RGBA string'));
    (console.error as jest.Mock).mockRestore();
  });
});
