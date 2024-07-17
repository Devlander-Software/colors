import { RGBAToHexAlpha } from "../rgbaToHexAlpha";

describe('RGBAToHexAlpha', () => {
  test('should convert rgba to hex with alpha', () => {
    expect(RGBAToHexAlpha('rgba(255, 0, 0, 1)')).toBe('#ff0000ff');
  });

  test('should convert rgb to hex without alpha', () => {
    expect(RGBAToHexAlpha('rgb(255, 0, 0)')).toBe('#ff0000');
  });

  test('should convert rgba to hex with alpha and round alpha value', () => {
    expect(RGBAToHexAlpha('rgba(255, 0, 0, 0.5)')).toBe('#ff000080');
  });

  test('should convert rgba to hex and remove alpha when forceRemoveAlpha is true', () => {
    expect(RGBAToHexAlpha('rgba(255, 0, 0, 0.5)', true)).toBe('#ff0000');
  });

  test('should throw error for invalid rgba input', () => {
    expect(() => RGBAToHexAlpha('invalid input')).toThrow('Invalid RGBA/RGB input');
  });

  test('should handle rgba with missing alpha channel', () => {
    expect(RGBAToHexAlpha('rgba(255, 0, 0)')).toBe('#ff0000');
  });

  test('should handle rgb input with spaces', () => {
    expect(RGBAToHexAlpha('rgb( 255 , 0 , 0 )')).toBe('#ff0000');
  });

  test('should handle rgba input with spaces and alpha', () => {
    expect(RGBAToHexAlpha('rgba( 255 , 0 , 0 , 0.5 )')).toBe('#ff000080');
  });

  test('should handle rgb input with decimal values', () => {
    expect(RGBAToHexAlpha('rgb(255.0, 0.0, 0.0)')).toBe('#ff0000');
  });

  test('should handle rgba input with decimal values for alpha', () => {
    expect(RGBAToHexAlpha('rgba(255.0, 0.0, 0.0, 0.5)')).toBe('#ff000080');
  });
});
