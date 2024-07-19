import { HexDecimalObject } from "./types/hex-decimal-object.interface";
export type ColorFormatType = "hex" | "rgba" | "rgb" | "alphaHex" | undefined;
/**
 * Parses a color value into a HexDecimalObject representing RGB(A) values.
 * @param colorValue The color value to parse (e.g., hex, rgb, rgba string).
 * @returns A HexDecimalObject representing the parsed RGB(A) values.
 * @throws Error if the color value is invalid or cannot be converted.
 */
export declare const parseColor: (colorValue: string) => HexDecimalObject;
