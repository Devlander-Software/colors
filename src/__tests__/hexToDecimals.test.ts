import { hexesToDecimals, hexToDecimal } from '../hexToDecimals';
import { RgbWithAHexObject } from '../hexToDecimals';
import { HexObject } from '../parseHex';
import { HexDecimalObject } from '../types/hex-decimal-object.interface';

describe('hexToDecimal', () => {
  test('converts hex to decimal', () => {
    expect(hexToDecimal('ff')).toBe(255);
    expect(hexToDecimal('0a')).toBe(10);
    expect(hexToDecimal('00')).toBe(0);
    expect(hexToDecimal('80')).toBe(128);
  });
});

describe('hexesToDecimals', () => {
  test('converts hex values to decimal values including alpha', () => {
    const hexObj: HexObject = { r: 'ff', g: '00', b: '00', a: '80' };
    const expected: HexDecimalObject = { r: 255, g: 0, b: 0, a: 0.5 };
    expect(hexesToDecimals(hexObj)).toEqual(expected);
  });

  test('converts hex values to decimal values without alpha', () => {
    const hexObj: RgbWithAHexObject = { r: 'ff', g: '00', b: '00' };
    const expected: HexDecimalObject = { r: 255, g: 0, b: 0, a: 1 };
    expect(hexesToDecimals(hexObj)).toEqual(expected);
  });

  test('handles case when alpha value is not provided', () => {
    const hexObj: RgbWithAHexObject = { r: 'ff', g: 'ff', b: 'ff' };
    const expected: HexDecimalObject = { r: 255, g: 255, b: 255, a: 1 };
    expect(hexesToDecimals(hexObj)).toEqual(expected);
  });

  test('handles case when alpha value is 100%', () => {
    const hexObj: RgbWithAHexObject = { r: 'ff', g: 'ff', b: 'ff', a: 'ff' };
    const expected: HexDecimalObject = { r: 255, g: 255, b: 255, a: 1.0 };
    expect(hexesToDecimals(hexObj)).toEqual(expected);
  });

  test('parses and converts hex string to decimal values', () => {
    const hexString = '#ff000080';
    const expected: HexDecimalObject = { r: 255, g: 0, b: 0, a: 0.5 };
    expect(hexesToDecimals(hexString)).toEqual(expected);
  });

  test('parses and converts hex string without alpha to decimal values', () => {
    const hexString = '#ff0000';
    const expected: HexDecimalObject = { r: 255, g: 0, b: 0, a: 1 };
    expect(hexesToDecimals(hexString)).toEqual(expected);
  });

  test('handles invalid hex string gracefully', () => {
    const hexString = '#gggggg';
    expect(() => hexesToDecimals(hexString)).toThrow('Invalid hex color');
  });

  test('handles short hex string format', () => {
    const hexString = '#f00';
    const expected: HexDecimalObject = { r: 255, g: 0, b: 0, a: 1 };
    expect(hexesToDecimals(hexString)).toEqual(expected);
  });

  test('handles short hex string with alpha format', () => {
    const hexString = '#f008';
    const expected: HexDecimalObject = { r: 255, g: 0, b: 0, a: 0.53 };
    expect(hexesToDecimals(hexString)).toEqual(expected);
  });
});
