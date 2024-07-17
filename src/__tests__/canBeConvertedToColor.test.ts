import { canBeConvertedIntoColor } from "../canBeConvertedToColor";

describe('canBeConvertedIntoColor', () => {
  test('should return true for valid CSS color names', () => {
    expect(canBeConvertedIntoColor('transparent')).toBe(true);
    expect(canBeConvertedIntoColor('blue', ['blue', 'transparent'])).toBe(true);
  });

  test('should return true for valid hex colors', () => {
    expect(canBeConvertedIntoColor('#000')).toBe(true);
    expect(canBeConvertedIntoColor('#000000')).toBe(true);
    expect(canBeConvertedIntoColor('#ABC')).toBe(true);
    expect(canBeConvertedIntoColor('#ABCDEF')).toBe(true);
  });

  test('should return true for valid rgb colors', () => {
    expect(canBeConvertedIntoColor('rgb(255, 255, 255)')).toBe(true);
    expect(canBeConvertedIntoColor('rgb(0, 0, 0)')).toBe(true);
    expect(canBeConvertedIntoColor('rgb(123, 45, 67)')).toBe(true);
  });

  test('should return true for valid rgba colors', () => {
    expect(canBeConvertedIntoColor('rgba(255, 255, 255, 1)')).toBe(true);
    expect(canBeConvertedIntoColor('rgba(0, 0, 0, 0)')).toBe(true);
    expect(canBeConvertedIntoColor('rgba(123, 45, 67, 0.5)')).toBe(true);
  });

  test('should return false for invalid colors', () => {
    expect(canBeConvertedIntoColor('notacolor')).toBe(false);
    expect(canBeConvertedIntoColor('#12345')).toBe(false);
    expect(canBeConvertedIntoColor('rgb(256, 0, 0)')).toBe(false);
    expect(canBeConvertedIntoColor('rgba(255, 255, 255, 1.5)')).toBe(false);
  });

  test('should handle custom CSS color names', () => {
    expect(canBeConvertedIntoColor('customColor', ['customColor'])).toBe(true);
    expect(canBeConvertedIntoColor('anotherColor', ['anotherColor', 'customColor'])).toBe(true);
  });
});
