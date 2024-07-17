/**
 * Converts a CSS hex color value to an RGB or RGBA color value.
 * @param hex - The hex value to convert. ('123456', '#123456', '123', '#123')
 * @param alpha - An optional alpha value to apply. ('0.5', '0.25')
 * @returns An RGB or RGBA color value. ('rgb(11, 22, 33)', 'rgba(11, 22, 33, 0.5)')
 *
 * @example
 * ```typescript
 * console.log(hexToRgba('#ff0000')); // 'rgba(255, 0, 0, 1)'
 * console.log(hexToRgba('#ff0000', 0.5)); // 'rgba(255, 0, 0, 0.5)'
 * ```
 */
export declare function hexToRgba(hex: string, alpha?: string | number): string;
